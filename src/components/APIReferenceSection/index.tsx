import { EndpointsSection } from "@/components/EndpointsSection";
import { haikuMonuments, poets, locations, sources } from "@/lib/data";
import styles from "./index.module.scss";

export default function APIReferenceSection() {
  return (
    <section className={styles.apiReference} id="reference">
      <div className={styles.apiReference__inner}>
        <header>
          <h2 className={styles.apiReference__inner__title}>API Reference</h2>
          <p className={styles.apiReference__inner__subtitle}>APIリファレンス</p>
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
      <EndpointsSection title="/haiku-monuments" endpoints={haikuMonuments} />
      <EndpointsSection title="/poets" endpoints={poets} />
      <EndpointsSection title="/locations" endpoints={locations} />
      <EndpointsSection title="/sources" endpoints={sources} />
    </section>
  );
}
