import styles from "./index.module.scss";

export default function PageTitleSection() {
  return (
    <section className={styles.pageTitle}>
      <header className={styles.pageTitle__inner}>
        <h1 className={styles.pageTitle__title}>
          HaikuMonument API Documentation
        </h1>
        <p className={styles.pageTitle__subtitle}>句碑API ドキュメント</p>
      </header>
    </section>
  );
}
