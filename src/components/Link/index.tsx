import Link from "next/link";
import styles from "./index.module.scss";
import clsx from "clsx";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export type InternalLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export type ExternalLinkProps = {
  href: string;
  label: string;
  className?: string;
  ariaLabel?: string;
};

export function InternalLink({ href, label, className }: InternalLinkProps) {
  return (
    <Link href={href} className={clsx(styles.link, className)}>
      <span>{label}</span>
      <ChevronRightIcon className={styles.icon} aria-hidden="true" />
    </Link>
  );
}

export function ExternalLink({
  href,
  label,
  className,
  ariaLabel,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(styles.link, className)}
      aria-label={ariaLabel || label}
    >
      <span>{label}</span>
      <ChevronRightIcon className={styles.icon} aria-hidden="true" />
    </a>
  );
}
