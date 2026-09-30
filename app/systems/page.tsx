import { permanentRedirect } from "next/navigation";

/** Alias → Application layer. */
export default function SystemsRedirectPage() {
  permanentRedirect("/experience/");
}
