import styles from './index.module.scss';

export function Card({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <Icon className={styles.card__icon} />
        <h3 className={styles.card__title}>{title}</h3>
      </div>
      <p className={styles.card__description}>{description}</p>
    </div>
  );
}
