import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from "./index.module.scss";
import { NavList } from "./Nav";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <Header />
      <NavList />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
