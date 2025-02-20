import styles from './index.module.scss';

export function Header() {
  return (
    <header>
      <div>
        <h1 className={styles.h1}>
          Sample
        </h1>
      </div>
    </header>
  );
}