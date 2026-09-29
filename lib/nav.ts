/** Shared primary nav - keep header and footer in lockstep.
 * Home, Application layer, Agentic layer, The Block, Contact.
 */
export type NavItem = {
  href: string;
  label: string;
  isDevOnly?: boolean;
};

export const PRIMARY_NAV: readonly NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/application-layer/", label: "Application layer" },
  { href: "/agentic-layer/", label: "Agentic layer" },
  { href: "/block/", label: "The Block" },
  { href: "/contact/", label: "Contact" },
];
