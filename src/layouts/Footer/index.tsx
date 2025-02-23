import Link from "next/link";
import { Roboto_Slab } from 'next/font/google'
import styles from "./index.module.scss";
import { navItems } from "../Nav";
import { NavItem } from "../Nav/NavItem";

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <section className={styles.footer__description} aria-labelledby="footer-title">
          <Link href="/" aria-label="ホームページ" className={styles.footer__title}>
            <h2 id="footer-title" className={robotoSlab.className}>
              HaikuMonument API
            </h2>
          </Link>
          <p>句碑の情報を提供するAPI</p>
          <small className={styles.footer__copyright}>
            &copy; {currentYear} shikano
          </small>
        </section>
        <nav className={styles.footer__navlist} aria-label="Footer Navigation">
          <ul className={styles.footer__navlist__list}>
            {navItems.map((item) => (
              <li key={item.title} className={styles.footer__navlist__item}>
                <NavItem title={item.title} label={item.label} href={item.href} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}