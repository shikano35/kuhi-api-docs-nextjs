import { DetailLink } from "@/components/Link";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <DetailLink href="/" message="sample" />
      HomePage
    </div>
  );
}
