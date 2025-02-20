import { Logo } from "@/components/Logo";
import styles from "./index.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <span>
          &copy; {new Date().getFullYear()} {" "}
          <a href="https://shikano35.com" >
            shikano35
          </a>
        </span>
        <div>
          <p>test</p>
        </div>
      </div>
    </footer>
  );
}