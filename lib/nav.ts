/** Shared primary nav - keep header and footer in lockstep.
 * In development mode (localhost:3100), includes the local "Preview ⚡" studio tab.
 * In production (Vercel), strictly limits to the canonical 4-item navigation.
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
  { href: "/contact/", label: "Contact" },
  ...(process.env.NODE_ENV !== "production"
    ? [{ href: "/preview-agentic/", label: "Preview ⚡", isDevOnly: true }]
    : []),
];
