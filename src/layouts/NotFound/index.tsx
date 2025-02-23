import Link from 'next/link';
import styles from './index.module.scss';

export function NotFoundPage() {
  return (
    <div className={styles.notFound}>
      <header className={styles.notFound__inner}>
        <h1 className={styles.notFound__inner__title}>
          404 Not Found
        </h1>
        <p className={styles.notFound__inner__subtitle}>
          お探しのページが見つかりませんでした。
        </p>
      </header>
      <Link href="/" className={styles.notFound__link}>
        <p>ホームに戻る</p>
      </Link>
    </div>
  );
}
