import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { defaultPostsDir, readPosts, parseFrontmatter } from "@/lib/seo/posts";
import s from "./post.module.css";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const posts = readPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const posts = readPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  const url = `https://idigdata.com/agentic-ai/${post.slug}/`;
  return {
    title: `${post.title} | Robert Paddock`,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date.toISOString(),
      authors: ["Robert Paddock"],
    },
  };
}

function renderMarkdown(md: string) {
  // Strip frontmatter
  const body = md.replace(/^---[\s\S]*?---\n*/, "").trim();
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let inList = false;
  let listType: "ul" | "ol" = "ul";
  let listItems: string[] = [];
  let inQuote = false;
  let quoteBuffer: string[] = [];
  let key = 0;

  function flushList() {
    if (inList && listItems.length > 0) {
      if (listType === "ol") {
        elements.push(
          <ol key={"ol-" + key++} className={s.orderedList}>
            {listItems.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            ))}
          </ol>
        );
      } else {
        elements.push(
          <ul key={"ul-" + key++} className={s.list}>
            {listItems.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            ))}
          </ul>
        );
      }
      listItems = [];
      inList = false;
      listType = "ul";
    }
  }

  function flushCode() {
    if (inCodeBlock) {
      elements.push(
        <pre key={"code-" + key++} className={s.codeBlock}>
          <code>{codeBuffer.join("\n")}</code>
        </pre>
      );
      codeBuffer = [];
      inCodeBlock = false;
    }
  }

  function flushQuote() {
    if (inQuote && quoteBuffer.length > 0) {
      const cleanLines = quoteBuffer.map((l) => l.replace(/^>\s?/, "").trim()).filter(Boolean);
      if (cleanLines.length === 0) {
        quoteBuffer = [];
        inQuote = false;
        return;
      }

      let rubric = "FIELD NOTE // OBSERVED REALITY";
      let stamp = "IDIGDATA // OPERATIONAL SEAM";
      let contentLines = cleanLines;

      const firstLine = cleanLines[0];
      const fieldNoteMatch = firstLine.match(/^\*\*FIELD NOTE\s*([0-9A-Za-z\-]*)\s*\/\/\s*(.*?)\*\*$/i);
      const operationalMatch = firstLine.match(/^\*\*OPERATIONAL\s*(.*?)\*\*$/i);
      const trilogyMatch = firstLine.match(/^###\s*(The .*?Trilogy)/i);

      if (fieldNoteMatch) {
        const idPart = fieldNoteMatch[1] ? (" " + fieldNoteMatch[1]) : "";
        rubric = "FIELD NOTE" + idPart + " // " + fieldNoteMatch[2];
        stamp = "STATUS: GROUND TRUTH";
        contentLines = cleanLines.slice(1);
      } else if (operationalMatch) {
        rubric = "OPERATIONAL DISPATCH // " + operationalMatch[1];
        stamp = "SEAM OBSERVATION";
        contentLines = cleanLines.slice(1);
      } else if (trilogyMatch) {
        rubric = trilogyMatch[1].toUpperCase() + " // THE SEAM SERIES";
        stamp = "CANONICAL SEQUENCE";
        contentLines = cleanLines.slice(1);
      } else if (firstLine.startsWith('*"') || firstLine.startsWith('"') || firstLine.startsWith("*'")) {
        rubric = "FIELD NOTE // SEAM LOG";
        stamp = "VERIFIED IN ARENA";
      }

      elements.push(
        <aside key={"field-card-" + key++} className={s.fieldNoteCard} aria-label="Field Note">
          <div className={s.fieldNoteHeader}>
            <div className={s.fieldNoteRubric}>
              <span className={s.fieldNoteRubricDot} aria-hidden="true" />
              <span>{rubric}</span>
            </div>
            {stamp && <span className={s.fieldNoteStamp}>{stamp}</span>}
          </div>
          <div className={s.fieldNoteBody}>
            {contentLines.map((cLine, cIdx) => (
              <p key={cIdx} dangerouslySetInnerHTML={{ __html: formatInline(cLine) }} />
            ))}
          </div>
          <div className={s.fieldNoteFooter}>
            <span>DISPATCH LOG · IDIGDATA OPERATIONAL SEAM</span>
            <span>HUMAN AUTHORITY REQUIRED</span>
          </div>
        </aside>
      );

      quoteBuffer = [];
      inQuote = false;
    }
  }

  function formatInline(text: string): string {
    return text
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith("```")) {
      flushQuote();
      if (inCodeBlock) {
        flushCode();
      } else {
        flushList();
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // Horizontal rule
    if (line.trim() === "---") {
      flushList();
      flushQuote();
      elements.push(<hr key={"hr-" + key++} className={s.hr} />);
      continue;
    }

    // Blockquote
    if (line.startsWith("> ") || line === ">") {
      flushList();
      inQuote = true;
      quoteBuffer.push(line);
      continue;
    }

    // Not in blockquote anymore
    flushQuote();

    // Headings
    if (line.startsWith("# ")) {
      flushList();
      continue;
    }
    if (line.startsWith("### By ")) {
      flushList();
      continue;
    }
    if (line.startsWith("## ")) {
      flushList();
      elements.push(<h2 key={"h2-" + key++} className={s.h2}>{line.slice(3)}</h2>);
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      elements.push(<h3 key={"h3-" + key++} className={s.h3}>{line.slice(4)}</h3>);
      continue;
    }

    // Unordered list item
    if (line.startsWith("- ") || line.startsWith("* ")) {
      if (inList && listType !== "ul") {
        flushList();
      }
      inList = true;
      listType = "ul";
      listItems.push(line.slice(2));
      continue;
    }

    // Ordered list item
    const olMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (olMatch) {
      if (inList && listType !== "ol") {
        flushList();
      }
      inList = true;
      listType = "ol";
      listItems.push(olMatch[2]);
      continue;
    }

    // Empty line
    if (!line.trim()) {
      flushList();
      continue;
    }

    // Paragraph
    flushList();
    elements.push(
      <p key={"p-" + key++} className={s.p} dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
    );
  }

  flushList();
  flushQuote();
  flushCode();

  return elements;
}
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postsDir = defaultPostsDir();
  const filePath = path.join(postsDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const fm = parseFrontmatter(raw);
  if (!fm || !fm.title) notFound();

  const formattedDate = fm.date
    ? new Date(fm.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "October 2026";

  // Canonical order matching the three Collective Inquiries / Theses
  const canonicalSlugs = [
    "marys-sheet",
    "the-application-layer",
    "the-delivery-seam",
  ];

  const allPosts = readPosts();
  const currentIdx = canonicalSlugs.indexOf(slug);
  const prevSlug = currentIdx > 0 ? canonicalSlugs[currentIdx - 1] : null;
  const nextSlug =
    currentIdx !== -1 && currentIdx < canonicalSlugs.length - 1
      ? canonicalSlugs[currentIdx + 1]
      : null;

  const prevPost = prevSlug ? allPosts.find((p) => p.slug === prevSlug) : null;
  const nextPost = nextSlug ? allPosts.find((p) => p.slug === nextSlug) : null;

  return (
    <article className={s.postArticle} id="top">
      <div className={s.container}>
        <nav aria-label="Breadcrumb" className={s.topNav}>
          <Link href="/agentic-ai/#field-briefs" className={s.backLink}>
            <span aria-hidden="true">&larr;</span>
            <span>Return to Field Briefs</span>
          </Link>
          <span className={s.navDivider} aria-hidden="true">/</span>
          <span className={s.navCurrent}>{fm.title}</span>
        </nav>

        <header className={s.header}>
          <div className={s.metaTop}>
            <span className={s.topicBadge}>{fm.topic || "Domain Reality"}</span>
            <span className={s.date}>{formattedDate}</span>
          </div>
          <h1 className={s.title}>{fm.title}</h1>
          <p className={s.dek}>{fm.description}</p>
          <div className={s.byline}>
            <span className={s.square} />
            <span>Robert Paddock <small>Founder, Operator, Enterprise Technology Leader</small></span>
          </div>
        </header>

        <div className={s.content}>
          {renderMarkdown(raw)}
        </div>

        {/* Bottom Field Brief Navigation */}
        <nav aria-label="Field Brief Navigation" className={s.bottomNav}>
          <div className={s.briefPagination}>
            {prevPost ? (
              <Link href={`/agentic-ai/${prevPost.slug}/`} className={`${s.briefNavCard} ${s.prevCard}`}>
                <span className={s.navCardDirection}>&larr; Previous Field Brief</span>
                <span className={s.navCardTitle}>{prevPost.title}</span>
              </Link>
            ) : (
              <div className={s.navCardPlaceholder} />
            )}

            {nextPost ? (
              <Link href={`/agentic-ai/${nextPost.slug}/`} className={`${s.briefNavCard} ${s.nextCard}`}>
                <span className={s.navCardDirection}>Next Field Brief &rarr;</span>
                <span className={s.navCardTitle}>{nextPost.title}</span>
              </Link>
            ) : (
              <div className={s.navCardPlaceholder} />
            )}
          </div>

          <div className={s.bottomReturnAction}>
            <Link href="/agentic-ai/#field-briefs" className={s.returnToDispatchesBtn}>
              <span aria-hidden="true">&larr;</span>
              <span>Return to Field Briefs</span>
            </Link>
          </div>
        </nav>

        <footer className={s.footer}>
          <div className={s.footerCard}>
            <h3>Continue the Conversation</h3>
            <p>
              Have a perspective on the 20% operational seam, or navigating an active enterprise system cutover?
            </p>
            <div className={s.footerActions}>
              <Link href="/agentic-ai/#conversation" className={s.ctaBtn}>
                Send a Dispatch Note  
              </Link>
              <Link href="/block/" className={s.secondaryBtn}>
                Explore The Outcome Block
              </Link>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating Quick Return Bar - Accessible anywhere during long scroll */}
      <aside className={s.floatingReturnBar} role="navigation" aria-label="Quick navigation">
        <Link href="/agentic-ai/#field-briefs" className={s.floatingReturnLink} title="Return to Field Briefs">
          <span aria-hidden="true">&larr;</span>
          <span>Field Briefs</span>
        </Link>
        <span className={s.floatingDivider} aria-hidden="true">&bull;</span>
        <a href="#top" className={s.floatingTopLink} title="Jump to top of article">
          <span>Top &uarr;</span>
        </a>
      </aside>
    </article>
  );
}
