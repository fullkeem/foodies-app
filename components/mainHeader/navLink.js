"use client";
import Link from "next/link";
import classes from "./navLink.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();
  const isActive = path.startsWith(href)
    ? `${classes.link} ${classes.active}`
    : classes.link;
  return (
    <Link href={href} className={isActive}>
      {children}
    </Link>
  );
}
