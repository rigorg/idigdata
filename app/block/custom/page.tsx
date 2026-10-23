import { permanentRedirect } from "next/navigation";

/** Custom scoping page is deprecated. The Block catalog is the one door. */
export default function CustomScopingDeprecated() {
  permanentRedirect("/block/");
}
