import React from "react";
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
    <div className={styles.changelog__content__item}>
      <time className={styles.changelog__content__date}>{date}</time>
      <p className={styles.changelog__content__description}>{description}</p>
    </div>
  );
};

export function ChangelogSection() {
  return (
    <section className={styles.changelog} id="changelog">
      <header className={styles.changelog__header}>
        <h2 className={styles.changelog__header__title}>Changelog</h2>
        <small className={styles.changelog__header__subtitle}>変更履歴</small>
      </header>
      <div className={styles.changelog__content}>
        {changelogEntries.map((entry, index) => (
          <ChangelogItem key={index} {...entry} />
        ))}
      </div>
    </section>
  );
};