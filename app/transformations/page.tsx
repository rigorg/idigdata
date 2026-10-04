import { permanentRedirect } from "next/navigation";

/** Legacy route — public name is Application layer. */
export default function TransformationsRedirectPage() {
  permanentRedirect("/experience/");
}
