import styles from "./index.module.scss";

export type ChangelogEntry = {
  date: string;
  description: string;
}

const changelogEntries: ChangelogEntry[] = [
  {
    date: "2025-02-22",
    description: "APIの提供を開始しました"
  }
];

export function ChangelogItem({ date, description }: ChangelogEntry) {
  return (
    <li className={styles.changelog__content__item}>
      <time className={styles.changelog__content__date} dateTime={date}>
        {date}
      </time>
      <p className={styles.changelog__content__description}>{description}</p>
    </li>
  );
};

export function ChangelogSection() {
  return (
    <section
      className={styles.changelog}
      id="changelog"
      aria-labelledby="changelog-title"
    >
      <header className={styles.changelog__header}>
        <h2 id="changelog-title" className={styles.changelog__header__title}>
          Changelog
        </h2>
        <small className={styles.changelog__header__subtitle}>変更履歴</small>
      </header>
      <ul className={styles.changelog__content}>
        {changelogEntries.map((entry, index) => (
          <ChangelogItem key={index} {...entry} />
        ))}
      </ul>
    </section>
  );
};