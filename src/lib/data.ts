import type { Endpoint } from "@/components/Section/EndpointsSection";

export const haikuMonuments: Endpoint[] = [
  {
    endpoint: "/haiku-monuments",
    method: "GET",
    description: "句碑の情報を一覧取得します",
  },
  {
    endpoint: "/haiku-monuments/{id}",
    method: "GET",
    description: "句碑の情報を取得します",
  },
];

export const poets: Endpoint[] = [
  {
    endpoint: "/poets",
    method: "GET",
    description: "俳人の情報を一覧取得します",
  },
  {
    endpoint: "/poets/{id}",
    method: "GET",
    description: "俳人の情報を取得します",
  },
  {
    endpoint: "/poets/{id}/haiku-monuments",
    method: "GET",
    description: "俳人に関連する句碑の一覧を取得します",
  },
];

export const locations: Endpoint[] = [
  {
    endpoint: "/locations",
    method: "GET",
    description: "句碑の設置場所の情報を一覧取得します",
  },
  {
    endpoint: "/locations/{id}",
    method: "GET",
    description: "句碑の設置場所の情報を取得します",
  },
  {
    endpoint: "/locations/{id}/haiku-monuments",
    method: "GET",
    description: "設置場所に関連する句碑の一覧を取得します",
  },
];

export const sources: Endpoint[] = [
  {
    endpoint: "/sources",
    method: "GET",
    description: "句碑の情報の出典情報を一覧取得します",
  },
  {
    endpoint: "/sources/{id}",
    method: "GET",
    description: "句碑の情報の出典情報を取得します",
  },
  {
    endpoint: "/sources/{id}/haiku-monuments",
    method: "GET",
    description: "出典に関連する句碑の一覧を取得します",
  },
];
