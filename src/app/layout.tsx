import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "../styles/globals.scss";
import { Layout } from "@/layouts";
import clsx from "clsx";
import { baseMetadata } from "@/lib/metadata";

const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={clsx(inter.className, notoSansJP.className)}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
