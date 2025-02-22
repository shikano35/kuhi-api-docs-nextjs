import type { Endpoint } from "@/components/EndpointsSection";

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
  // {
  //   endpoint: "/haiku-monuments",
  //   method: "POST",
  //   description: "句碑の情報を登録します",
  // },
  // {
  //   endpoint: "/haiku-monuments/{id}",
  //   method: "PUT",
  //   description: "句碑の情報を更新します",
  // },
  // {
  //   endpoint: "/haiku-monuments/{id}",
  //   method: "DELETE",
  //   description: "句碑の情報を削除します",
  // },
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
  // {
  //   endpoint: "/poets",
  //   method: "POST",
  //   description: "俳人の情報を登録します",
  // },
  // {
  //   endpoint: "/poets/{id}",
  //   method: "PUT",
  //   description: "俳人の情報を更新します",
  // },
  // {
  //   endpoint: "/poets/{id}",
  //   method: "DELETE",
  //   description: "俳人の情報を削除します",
  // },
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
  // {
  //   endpoint: "/locations",
  //   method: "POST",
  //   description: "句碑の設置場所の情報を登録します",
  // },
  // {
  //   endpoint: "/locations/{id}",
  //   method: "PUT",
  //   description: "句碑の設置場所の情報を更新します",
  // },
  // {
  //   endpoint: "/locations/{id}",
  //   method: "DELETE",
  //   description: "句碑の設置場所の情報を削除します",
  // },
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
  // {
  //   endpoint: "/sources",
  //   method: "POST",
  //   description: "句碑の情報の出典情報を登録します",
  // },
  // {
  //   endpoint: "/sources/{id}",
  //   method: "PUT",
  //   description: "句碑の情報の出典情報を更新します",
  // },
  // {
  //   endpoint: "/sources/{id}",
  //   method: "DELETE",
  //   description: "句碑の情報の出典情報を削除します",
  // },
  {
    endpoint: "/sources/{id}/haiku-monuments",
    method: "GET",
    description: "出典に関連する句碑の一覧を取得します",
  },
];
