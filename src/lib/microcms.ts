// src/lib/microcms.ts
import { createClient } from "microcms-js-sdk";

// クライアントの初期化
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// カテゴリの型定義
export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  slug: string;
};

// ブログの型定義
export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  date?: string; 
  eyecatch?: string;
  slug?: string; // すでに使っているslugも追加しておくと安心です
  category?: Category; // 追加：カテゴリ情報
};

// 記事一覧を取得する関数
export const getBlogs = async (queries?: Parameters<typeof client.get>[1]) => {
  return await client.get<{ contents: Blog[] }>({
    endpoint: "sws-demo-blog",
    queries,
  });
};

// 1件の記事詳細を取得する関数
export const getBlogDetail = async (contentId: string, queries?: Parameters<typeof client.get>[1]) => {
  return await client.getListDetail<Blog>({
    endpoint: "sws-demo-blog",
    contentId,
    queries,
  });
};

// カテゴリ一覧を取得する関数
export const getCategories = async (queries?: Parameters<typeof client.get>[1]) => {
  return await client.get<{ contents: Category[] }>({
    endpoint: "sws-demo-blog-categories",
    queries,
  });
};