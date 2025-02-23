"use client";

import { ErrorPage } from "@/layouts/Error";
import { baseMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Error",
  description: "エラーページ",
};

export default function Error() {
  return <ErrorPage />;
}
