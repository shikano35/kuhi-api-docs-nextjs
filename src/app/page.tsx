import styles from "./index.module.scss";
import { ChangelogSection } from "@/components/Section/ChangelogSection";
import PageTitleSection from "@/components/Section/PageTitleSection";
import OverviewSection from "@/components/Section/OverviewSection";
import APIReferenceSection from "@/components/Section/APIReferenceSection";

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
