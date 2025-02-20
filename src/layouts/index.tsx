import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from './index.module.scss';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}