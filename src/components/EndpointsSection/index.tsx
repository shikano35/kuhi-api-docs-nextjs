import React from "react";
import styles from "./index.module.scss";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface Endpoint {
  endpoint: string;
  method: HttpMethod;
  description: string;
}

export interface EndpointsSectionProps {
  title: string;
  endpoints: Endpoint[];
}

const EndpointItem: React.FC<Endpoint> = ({ method, endpoint, description }) => {
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
};

export function EndpointsSection({ title, endpoints }: EndpointsSectionProps) {
  return (
    <section className={styles.endpointSection}>
      <h2 className={styles.endpointTitle}>{title}</h2>
      <div className={styles.border} />
      <ul className={styles.endpointList}>
        {endpoints.map((ep, index) => (
          <EndpointItem key={index} {...ep} />
        ))}
      </ul>
    </section>
  );
};

export default EndpointsSection;
