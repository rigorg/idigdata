import { permanentRedirect } from "next/navigation";

/** Former agentic-layer address. Agentic AI is the page. */
export default function AgenticLayerRedirect() {
  permanentRedirect("/agentic-ai/");
}
