import "@/app/presence.css";

export default function PresenceShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="presence">{children}</div>;
}
