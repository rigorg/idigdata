import { permanentRedirect } from "next/navigation";

/** Former owned-software door. The Block catalog is the primary door. */
export default function OwnedSoftwareRedirect() {
  permanentRedirect("/block/");
}
