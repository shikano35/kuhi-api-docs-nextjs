import Link from "next/link"
import styles from "./index.module.scss";

export function DetailLink({ href, message }: { href: string, message: string }) {
  return (
    <Link href={href} className={styles.link}>
      <p>
        {message}
      </p>
    </Link>
  );
}