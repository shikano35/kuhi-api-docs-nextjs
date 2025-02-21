import { NavItem, NavItemProps } from "./NavItem";
import styles from './index.module.scss';

const navItems: NavItemProps[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Changelog",
    href: "#changelog",
  },
  {
    title: "API Reference",
    href: "#reference",
  },
  {
    title: "Example",
    href: "#example",
  },
];

export function NavList() {
  return (
    <nav aria-label="Main Navigation" className={styles.navlist}>
      <ul className={styles.navlist__list}>
        {navItems.map((item) => (
          <li key={item.title} className={styles.navlist__item}>
          <NavItem title={item.title} href={item.href} />
          </li>
        ))}
      </ul>
    </nav>
  );
}