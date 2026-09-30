import { permanentRedirect } from "next/navigation";

/** Former agentic-layer address. Experience is the page. */
export default function AgenticLayerRedirect() {
  permanentRedirect("/experience/");
}
