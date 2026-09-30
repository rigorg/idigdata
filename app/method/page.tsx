import { permanentRedirect } from "next/navigation";

/** Legacy route — public name is Agentic layer. */
export default function MethodRedirectPage() {
  permanentRedirect("/experience/");
}
