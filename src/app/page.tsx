import { Card } from "@/components/Card";
import styles from "./index.module.scss";
import { BuildingLibraryIcon, UserIcon, MapPinIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { EndpointsSection } from "@/components/EndpointsSection";
import { haikuMonuments, poets, locations, sources } from "@/lib/data";

const apiList = [
  {
    title: "句碑",
    description: "建立された場所、俳句の作者、句の内容などの情報を取得することができます",
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
  }
];

export default function Home() {
  return (
    <div className={styles.layout}>
      <section className={styles.section__pagetitle}>
        <div className={styles.section__pagetitle__inner}>
          <h1 className={styles.section__pagetitle__title}>HaikuMonument API Documentation</h1>
          <small className={styles.section__pagetitle__subtitle}>句碑API ドキュメント</small>
        </div>
      </section>
      <div className={styles.border} />
      <section id="overview" className={styles.section__overview}>
        <div className={styles.section__overview__inner}>
          <h2 className={styles.section__overview__title}>Overview</h2>
          <small className={styles.section__overview__subtitle}>概要</small>
          <p className={styles.section__overview__description}>
            このAPIは、句碑の情報を提供します
            <br />
            以下の情報を取得することができます
          </p>
          <p className={styles.section__overview__destructive}>※ 現在制作中です</p>
        </div>
        <div className={styles.section__overview__content}>
          <ul className={styles.section__overview__list}>
            {apiList.map((item) => (
              <li key={item.title} className={styles.section__overview__item}>
                <Card
                  title={item.title}
                  description={item.description}
                  icon={item.item}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className={styles.border} />
      <section className={styles.section__reference} id="reference">
        <div className={styles.section__reference__inner}>
          <h2 className={styles.section__reference__title}>API Reference</h2>
          <small className={styles.section__reference__subtitle}>APIリファレンス</small>
        </div>
        <p className={styles.section__reference__description}>
          このAPIは、以下のエンドポイントを提供します
          <br />
          詳細な出力情報は、
          <a
            href="https://api.kuhiapi.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.swaggerLink}
          >
            Swagger UI
          </a>
          を参照してください
        </p>
        <EndpointsSection title="/haiku-monuments" endpoints={haikuMonuments} />
        <EndpointsSection title="/poets" endpoints={poets} />
        <EndpointsSection title="/locations" endpoints={locations} />
        <EndpointsSection title="/sources" endpoints={sources} />
      </section>
      <div className={styles.border} />
      <section className={styles.section__changelog} id="changelog">
        <div className={styles.section__changelog__inner}>
          <h2 className={styles.section__changelog__title}>Changelog</h2>
          <small className={styles.section__changelog__subtitle}>変更履歴</small>
        </div>
        <p className={styles.section__changelog__description}>
          このAPIの変更履歴は、
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className={styles.changelogLink}
          >
            GitHub
          </a>
          で管理しています
        </p>
      </section>
      <div className={styles.border} />
      <section className={styles.section__example} id="example">
        <div className={styles.section__example__inner}>
          <h2 className={styles.section__example__title}>Example</h2>
          <small className={styles.section__example__subtitle}>使用例</small>
        </div>
        <p className={styles.section__example__description}>
          以下は、APIの使用例です
        </p>
      </section>
    </div>
  );
}
