import { Card } from "@/components/Card";
import {
  BuildingLibraryIcon,
  UserIcon,
  MapPinIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import styles from "./index.module.scss";

const apiList = [
  {
    title: "句碑",
    description:
      "建立された場所、俳句の作者、句の内容などの情報を取得することができます",
    item: BuildingLibraryIcon,
  },
  {
    title: "俳人",
    description: "句碑に刻まれた俳句から、俳人の情報を取得することができます",
    item: UserIcon,
  },
  {
    title: "設置場所",
    description: "句碑の設置場所の情報を取得することができます",
    item: MapPinIcon,
  },
  {
    title: "出典",
    description: "句碑の出典情報を取得することができます",
    item: BookOpenIcon,
  },
];

export default function OverviewSection() {
  return (
    <section className={styles.overview} id="overview">
      <div className={styles.overview__inner}>
        <header>
          <h2 className={styles.overview__inner__title}>Overview</h2>
          <p className={styles.overview__inner__subtitle}>概要</p>
        </header>
        <p className={styles.overview__inner__description}>
          このAPIは、句碑の情報を提供します
          <br />
          以下の情報を取得することができます
        </p>
        <p className={styles.destructive}>※ 現在制作中です</p>
      </div>
      <ul className={styles.overview__list}>
        {apiList.map((item) => (
          <li key={item.title} className={styles.overview__item}>
            <Card
              title={item.title}
              description={item.description}
              icon={item.item}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
