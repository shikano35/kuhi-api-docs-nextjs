import styles from "./index.module.scss";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export type Endpoint = {
  endpoint: string;
  method: HttpMethod;
  description: string;
};

export type EndpointsSectionProps = {
  id: string;
  title: string;
  endpoints: Endpoint[];
};

function EndpointItem({ method, endpoint, description }: Endpoint) {
  const methodClass = (() => {
    switch (method) {
      case "GET":
        return styles.methodGet;
      case "POST":
        return styles.methodPost;
      case "PUT":
        return styles.methodPut;
      case "DELETE":
        return styles.methodDelete;
      default:
        return "";
    }
  })();

  return (
    <li className={styles.endpointItem}>
      <div className={styles.endpointItemInner}>
        <p className={methodClass}>{method}</p>
        <p className={styles.endpointPath}>{endpoint}</p>
      </div>
      <p className={styles.endpointDescription}>{description}</p>
    </li>
  );
}

export function EndpointsSection({ id, title, endpoints }: EndpointsSectionProps) {
  return (
    <section className={styles.endpointSection}>
      <h2 className={styles.endpointTitle}>{title}</h2>
      <ul className={styles.endpointList}>
        {endpoints.map((ep) => (
          <EndpointItem key={`${id}-${ep.endpoint}`} {...ep} />
        ))}
      </ul>
    </section>
  );
}
