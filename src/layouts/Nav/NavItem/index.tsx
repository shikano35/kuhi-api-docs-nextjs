"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";
import styles from "./index.module.scss";

export type NavItemProps = {
  title: string;
  href: string;
};

export function NavItem({ title, href }: NavItemProps) {
  const segment = useSelectedLayoutSegment();

  const isActive =
    (segment === null && href === "/") ||
    segment === href.replace(/^\//, "").toLowerCase();

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={clsx(styles.navitem, { [styles.active]: isActive })}
    >
        <span className={styles.navitem__text}>{title}</span>
    </Link>
  );
}
