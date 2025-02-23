import styles from './index.module.scss';

export type CardProps = {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export function Card({ title, description, icon: Icon }: CardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.card__header}>
        <Icon className={styles.card__icon} aria-hidden="true" />
        <h3 className={styles.card__title}>{title}</h3>
      </div>
      <p className={styles.card__description}>{description}</p>
    </article>
  );
}
