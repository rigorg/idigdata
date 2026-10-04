import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  classifyWebsiteSignal,
  isBotUserAgent,
  isProbePathName,
} from "../traffic/websiteSignals";

describe("websiteSignals", () => {
  it("marks DigOps paths as buyer signal when direct", () => {
    const signal = classifyWebsiteSignal({
      path: "/approach/",
      hostname: "idigdata.com",
      userAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0",
    });
    assert.equal(signal.suppress_pageview, false);
    assert.equal(signal.buyer_signal, true);
    assert.equal(signal.traffic_class, "direct");
  });

  it("classifies php probes as probe/bot", () => {
    assert.equal(isProbePathName("/wp-admin/install.php"), true);
    const signal = classifyWebsiteSignal({
      path: "/wp-login.php",
      hostname: "idigdata.com",
      userAgent: "Mozilla/5.0",
      suppressBotTraffic: false,
    });
    assert.equal(signal.is_bot, true);
    assert.equal(signal.buyer_signal, false);
  });

  it("detects automation UAs", () => {
    assert.equal(isBotUserAgent("curl/8.0"), true);
    assert.equal(isBotUserAgent("Mozilla/5.0"), true);
  });

  it("records localhost as internal instead of dropping the hit", () => {
    const signal = classifyWebsiteSignal({
      path: "/",
      hostname: "localhost",
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0",
    });
    assert.equal(signal.suppress_pageview, false);
    assert.equal(signal.is_internal, true);
    assert.equal(signal.source_kind, "rob_internal");
    assert.equal(signal.traffic_class, "internal");
    assert.equal(signal.buyer_signal, false);
  });

  it("treats gclid as campaign", () => {
    const signal = classifyWebsiteSignal({
      path: "/",
      search: "?gclid=abc123",
      hostname: "idigdata.com",
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0",
    });
    assert.equal(signal.traffic_class, "campaign");
    assert.equal(signal.source_channel, "gclid");
  });
});
