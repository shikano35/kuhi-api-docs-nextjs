import { EndpointsSection } from "@/components/Section/EndpointsSection";
import { haikuMonuments, poets, locations, sources } from "@/lib/data";
import styles from "./index.module.scss";

export default function APIReferenceSection() {
  return (
    <section className={styles.apiReference} id="reference">
      <div className={styles.apiReference__inner}>
        <header>
          <h2 className={styles.apiReference__inner__title}>API Reference</h2>
          <p className={styles.apiReference__inner__subtitle}>
            APIリファレンス
          </p>
        </header>
      </div>
      <p className={styles.apiReference__inner__description}>
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
        をご参照ください
      </p>
      <EndpointsSection id="section-1" title="/haiku-monuments" endpoints={haikuMonuments} />
      <EndpointsSection id="section-2" title="/poets" endpoints={poets} />
      <EndpointsSection id="section-3" title="/locations" endpoints={locations} />
      <EndpointsSection id="section-4" title="/sources" endpoints={sources} />
    </section>
  );
}
