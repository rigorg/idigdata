"use client";

import { useEffect, useState } from "react";

/** In-estate Instance Admin → FlowCraft org Glass. Hidden off this box. */
export default function OrgAdminLink() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const host = window.location.hostname;
    setShow(host === "127.0.0.1" || host === "localhost");
  }, []);
  if (!show) return null;
  return (
    <a
      href="http://127.0.0.1:3101"
      className="font-body text-[12.5px] text-porcelain/50 transition-colors hover:text-gold"
      title="FlowCraft org Glass — builder org, not this instance"
    >
      Admin
    </a>
  );
}
