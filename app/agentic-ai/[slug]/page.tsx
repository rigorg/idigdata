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
  let listItems: string[] = [];
  let key = 0;

  function flushList() {
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key={`ul-${key++}`} className={s.list}>
          {listItems.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  }

  function flushCode() {
    if (inCodeBlock) {
      elements.push(
        <pre key={`code-${key++}`} className={s.codeBlock}>
          <code>{codeBuffer.join("\n")}</code>
        </pre>
      );
      codeBuffer = [];
      inCodeBlock = false;
    }
  }

  function formatInline(text: string): string {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith("```")) {
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
      elements.push(<hr key={`hr-${key++}`} className={s.hr} />);
      continue;
    }

    // Headings
    if (line.startsWith("# ")) {
      flushList();
      continue; // Skip H1 since it's in the header
    }
    if (line.startsWith("## ")) {
      flushList();
      elements.push(<h2 key={`h2-${key++}`} className={s.h2}>{line.slice(3)}</h2>);
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      elements.push(<h3 key={`h3-${key++}`} className={s.h3}>{line.slice(4)}</h3>);
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      flushList();
      elements.push(
        <blockquote key={`quote-${key++}`} className={s.blockquote}>
          <p dangerouslySetInnerHTML={{ __html: formatInline(line.slice(2)) }} />
        </blockquote>
      );
      continue;
    }

    // List item
    if (line.startsWith("- ") || line.startsWith("* ")) {
      inList = true;
      listItems.push(line.slice(2));
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
      <p key={`p-${key++}`} className={s.p} dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
    );
  }

  flushList();
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

  return (
    <article className={s.postArticle}>
      <div className={s.container}>
        <div className={s.backNav}>
          <Link href="/agentic-ai/" className={s.backLink}>
            ← All Dispatches from the Seam
          </Link>
        </div>

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

        <footer className={s.footer}>
          <div className={s.footerCard}>
            <h3>Continue the Conversation</h3>
            <p>
              Have a perspective on the 20% operational seam, or navigating an active enterprise system cutover?
            </p>
            <div className={s.footerActions}>
              <Link href="/agentic-ai/#conversation" className={s.ctaBtn}>
                Send a Dispatch Note →
              </Link>
              <Link href="/block/" className={s.secondaryBtn}>
                Explore The Outcome Block
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
