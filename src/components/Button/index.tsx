"use client";

import { signIn } from "next-auth/react";
import styles from "./index.module.scss";

export function Button() {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => signIn("google")}
    >
      ログイン
    </button>
  );
}