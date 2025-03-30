import { NotFoundPage } from "@/layouts/NotFound";
import { baseMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "404 Not Found",
  description: "お探しのページが見つかりませんでした。",
};

export default function NotFound() {
  return <NotFoundPage />;
}
