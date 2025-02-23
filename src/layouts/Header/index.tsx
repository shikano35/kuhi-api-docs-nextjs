import Link from 'next/link';
import { Roboto_Slab } from 'next/font/google'
import styles from './index.module.scss';
import { ExternalLink } from '@/components/Link';

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link href="/" className={styles.header__title} aria-label="ホームページ">
          <span className={robotoSlab.className}>HaikuMonument API</span>
        </Link>
        <ExternalLink href="https://api.kuhiapi.com/docs" label="Swagger UI documents" />
      </div>
    </header>
  );
}