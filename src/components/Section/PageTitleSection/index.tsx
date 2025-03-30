"use client";

import { signIn } from "next-auth/react";
import styles from "./index.module.scss";

export default function PageTitleSection() {
  return (
    <section className={styles.pageTitle}>
      <header className={styles.pageTitle__inner}>
        <h1 className={styles.pageTitle__title}>
          HaikuMonument API Documentation
        </h1>
        <p className={styles.pageTitle__subtitle}>句碑API ドキュメント</p>
        <button
          type="button"
          className={styles.button}
          onClick={() => signIn("google")}
        >
          ログイン
        </button>
      </header>
    </section>
  );
}
