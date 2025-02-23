import styles from "./index.module.scss";
import { ChangelogSection } from "@/components/ChangelogSection";
import PageTitleSection from "@/components/PageTitleSection";
import OverviewSection from "@/components/OverviewSection";
import APIReferenceSection from "@/components/APIReferenceSection";

export default function Home() {
  return (
    <div className={styles.layout}>
      <PageTitleSection />
      <hr className={styles.border} />
      <OverviewSection />
      <hr className={styles.border} />
      <APIReferenceSection />
      <hr className={styles.border} />
      <ChangelogSection />
    </div>
  );
}
