import type { Metadata } from "next";

export const basedata: Metadata = {
  title: "句碑API",
  description: "句碑の情報をAPIとして提供します。",
  keywords: "句碑API, kuhi-api, kuhi, 句碑",
  authors: [{ name: "shikano35", url: "https://developers.kuhi.jp" }],
  generator: "Kuhi API",
  applicationName: "句碑API",
  openGraph: {
    title: "句碑API",
    description: "句碑の情報をAPIとして提供します。",
    type: "website",
    url: "https://developers.kuhi.jp",
    siteName: "句碑API",
    locale: "ja_JP",
    images: [
      {
        url: "https://developers.kuhi.jp",
        width: 1200,
        height: 630,
        alt: "句碑API",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "句碑API",
    description: "句碑の情報をAPIとして提供します。",
    images: [""],
    creator: "shikano35",
  },
};
