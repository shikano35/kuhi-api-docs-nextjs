import { NavItem, NavItemProps } from "./NavItem";
import styles from './index.module.scss';

export const navItems: NavItemProps[] = [
  {
    title: "Home",
    label: "概要",
    href: "/",
  },
  {
    title: "API Reference",
    label: "APIリファレンス",
    href: "#reference",
  },
  {
    title: "Changelog",
    label: "変更履歴",
    href: "#changelog",
  },
  {
    title: "Example",
    label: "使用例",
    href: "#example",
  },
];

export function NavList() {
  return (
    <nav aria-label="Main Navigation" className={styles.navlist}>
      <ul className={styles.navlist__list}>
        {navItems.map((item) => (
          <li key={item.title} className={styles.navlist__item}>
          <NavItem title={item.title} label={item.label} href={item.href} />
          </li>
        ))}
      </ul>
    </nav>
  );
}