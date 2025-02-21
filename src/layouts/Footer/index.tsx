import Link from "next/link";
import { Roboto_Slab }from 'next/font/google'
import styles from "./index.module.scss";
import { navItems } from "../Nav";
import { NavItem } from "../Nav/NavItem";

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer} aria-label="フッター"> 
    <div className={styles.footer__inner}>
      <div className={styles.footer__description}>
      <Link href="/" className={styles.footer__title} aria-label="ホームページ">
        <span className={robotoSlab.className}>HaikuMonument API</span>
      </Link>
      <p>句碑APIは、句碑のデータを提供するAPIです。</p>
      <small className={styles.footer__copyright}>
          &copy; {currentYear}{" "}
          <a href="https://github.com/shikano35" className={styles.footer__copyright__link} target="_blank" rel="noopener noreferrer">
            Shikano35
          </a>
        </small>
      </div>
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