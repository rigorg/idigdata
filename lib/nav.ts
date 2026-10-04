/** Shared primary nav - keep header and footer in lockstep.
 * Home, Experience, The Block, Contact.
 */
export type NavItem = {
  href: string;
  label: string;
  isDevOnly?: boolean;
};

export const PRIMARY_NAV: readonly NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/experience/", label: "Experience" },
  { href: "/block/", label: "The Block" },
  { href: "/contact/", label: "Contact" },
];
