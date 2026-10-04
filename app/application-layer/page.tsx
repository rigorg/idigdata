import { permanentRedirect } from "next/navigation";

/** Former application-layer address. Experience is the page. */
export default function ApplicationLayerRedirect() {
  permanentRedirect("/experience/");
}
