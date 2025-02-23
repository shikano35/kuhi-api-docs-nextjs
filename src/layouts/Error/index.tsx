import styles from './index.module.scss';

export function ErrorPage() {
  return (
    <div className={styles.Error}>
      <header className={styles.Error__inner}>
        <h1 className={styles.Error__inner__title}>
          Error
        </h1>
        <p className={styles.Error__inner__subtitle}>
          エラーが発生しました。
        </p>
      </header>
    </div>
  );
}
