import Link from 'next/link';
import { Roboto_Slab }from 'next/font/google'
import styles from './index.module.scss';

import clsx from 'clsx';
import { ExternalLink } from '@/components/Link';

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link href="/" className={styles.header__title}>
          <span className={clsx(robotoSlab.className)}>HaikuMonument API</span>
        </Link>
        <ExternalLink href="https://api.kuhi.jp/docs" label="Swagger documents" />
      </div>
    </header>
  );
}