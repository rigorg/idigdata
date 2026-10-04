/**
 * HomeDataGlobe runtime — true 3D yaw (Capo v1 motion).
 * Label pool from /data/estate-nodes.json (shared SoT).
 * Labels ride nodes, hide behind the globe, re-roll only on re-emerge.
 */
(function () {
  var CX = 210;
  var CY = 210;
  var RADIUS = 148;
  var LABEL_Z = -0.12;
  var SPEED = 0.28;
  var SPEED_REDUCED = 0.12;
  var DATA_URL = "/data/estate-nodes.json";

  function project(theta, phi, spin) {
    var x0 = Math.sin(phi) * Math.cos(theta);
    var y0 = Math.cos(phi);
    var z0 = Math.sin(phi) * Math.sin(theta);
    var cos = Math.cos(spin);
    var sin = Math.sin(spin);
    return {
      x: x0 * cos + z0 * sin,
      y: y0,
      z: -x0 * sin + z0 * cos,
    };
  }

  function flattenLabels(doc) {
    var out = [];
    if (!doc || !doc.categories) return out;
    for (var c = 0; c < doc.categories.length; c++) {
      var nodes = doc.categories[c].nodes || [];
      for (var n = 0; n < nodes.length; n++) {
        if (nodes[n] && nodes[n].label) out.push(nodes[n].label);
      }
    }
    return out;
  }

  function pickFresh(labels, avoid, rng, poolSize) {
    var used = {};
    for (var i = 0; i < labels.length; i++) {
      if (i !== avoid) used[labels[i]] = true;
    }
    var free = [];
    for (var j = 0; j < poolSize; j++) {
      if (!used[j]) free.push(j);
    }
    var pool = free.length
      ? free
      : Array.from({ length: poolSize }, function (_, i) {
          return i;
        });
    return pool[Math.floor(rng() * pool.length) % pool.length];
  }

  function arm(root, labelPool) {
    if (!root || root.getAttribute("data-hg-live") === "1") return;
    var svg = root.querySelector("svg");
    if (!svg || !labelPool.length) return;
    root.setAttribute("data-hg-live", "1");

    var nodes = [];
    var nodeEls = svg.querySelectorAll("[data-hg-node]");
    for (var i = 0; i < nodeEls.length; i++) {
      var el = nodeEls[i];
      var id = el.getAttribute("data-hg-node");
      nodes.push({
        id: id,
        theta: parseFloat(el.getAttribute("data-hg-theta") || "0"),
        phi: parseFloat(el.getAttribute("data-hg-phi") || "0"),
        labelIndex: parseInt(el.getAttribute("data-hg-base") || "0", 10) || 0,
        wasFront: el.getAttribute("data-hg-front") === "1",
        edge: svg.querySelector('[data-hg-edge="' + id + '"]'),
        group: el,
        halo: el.querySelector("[data-hg-halo]"),
        dot: el.querySelector("[data-hg-dot]"),
        label: el.querySelector("[data-hg-label]"),
      });
    }
    if (!nodes.length) return;

    var equator = svg.querySelector("[data-hg-equator]");
    var mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    var speed = mq.matches ? SPEED_REDUCED : SPEED;
    mq.addEventListener("change", function () {
      speed = mq.matches ? SPEED_REDUCED : SPEED;
    });

    var spin = 0;
    var last = performance.now();
    var labelIndexes = nodes.map(function (n) {
      return n.labelIndex % labelPool.length;
    });

    function paint(now) {
      var dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      spin += dt * speed;

      if (equator) {
        equator.setAttribute(
          "transform",
          "rotate(" +
            ((((spin * 40) % 360) + 360) % 360) +
            " " +
            CX +
            " " +
            CY +
            ")",
        );
      }

      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        var p = project(n.theta, n.phi, spin);
        var front = p.z > LABEL_Z;
        if (front && !n.wasFront) {
          labelIndexes[i] = pickFresh(
            labelIndexes,
            i,
            Math.random,
            labelPool.length,
          );
        }
        n.wasFront = front;
        var depth = (p.z + 1) / 2;
        var sx = CX + p.x * RADIUS;
        var sy = CY + p.y * RADIUS * 0.92;
        var label = labelPool[labelIndexes[i] % labelPool.length];
        var r = 3.2 + depth * 3.2;

        if (n.edge) {
          n.edge.setAttribute("x2", String(sx));
          n.edge.setAttribute("y2", String(sy));
          n.edge.setAttribute(
            "stroke",
            p.z > 0 ? "rgba(20, 24, 32, 0.85)" : "rgba(20, 24, 32, 0.35)",
          );
          n.edge.setAttribute("stroke-width", p.z > 0.2 ? "1.4" : "0.8");
        }
        if (n.halo) {
          n.halo.setAttribute("cx", String(sx));
          n.halo.setAttribute("cy", String(sy));
          n.halo.setAttribute("r", String(r + 2.5));
        }
        if (n.dot) {
          n.dot.setAttribute("cx", String(sx));
          n.dot.setAttribute("cy", String(sy));
          n.dot.setAttribute("r", String(r));
          n.dot.setAttribute(
            "stroke",
            p.z > 0.1 ? "#FACC15" : "rgba(250,204,21,0.35)",
          );
        }
        if (n.group) {
          n.group.setAttribute("opacity", String(0.35 + depth * 0.65));
        }
        if (n.label) {
          if (front) {
            n.label.setAttribute("x", String(sx));
            n.label.setAttribute("y", String(sy - r - 6));
            n.label.textContent = label;
            n.label.setAttribute("opacity", "1");
            n.label.style.display = "";
          } else {
            n.label.setAttribute("opacity", "0");
            n.label.style.display = "none";
          }
        }
      }

      requestAnimationFrame(paint);
    }

    requestAnimationFrame(paint);
  }

  function boot(labelPool) {
    var roots = document.querySelectorAll("[data-hg-root]");
    for (var i = 0; i < roots.length; i++) arm(roots[i], labelPool);
  }

  function start() {
    fetch(DATA_URL, { credentials: "same-origin" })
      .then(function (r) {
        if (!r.ok) throw new Error("estate-nodes " + r.status);
        return r.json();
      })
      .then(function (doc) {
        var pool = flattenLabels(doc);
        if (!pool.length) throw new Error("empty estate pool");
        boot(pool);
        var obs = new MutationObserver(function () {
          boot(pool);
        });
        obs.observe(document.documentElement, {
          childList: true,
          subtree: true,
        });
        window.setTimeout(function () {
          obs.disconnect();
        }, 20000);
      })
      .catch(function () {
        // Last-resort: whatever labels are already painted in the SVG.
        boot(
          Array.prototype.map
            .call(document.querySelectorAll("[data-hg-label]"), function (el) {
              return el.textContent || "";
            })
            .filter(Boolean),
        );
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
