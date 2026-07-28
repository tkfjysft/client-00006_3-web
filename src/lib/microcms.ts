// src/lib/microcms.ts
import { createClient } from "microcms-js-sdk";

// 先ほど .env に書いた設定を読み込みます
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// ブログの型定義（TypeScript用）
export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  // ※もしフィールドIDを 'date' にした場合は下の行のコメントアウトを外して上の date: string; を有効にしてください
  date?: string; 
  eyecatch?: string;
};

// 記事一覧を取得する関数
export const getBlogs = async (queries?: Parameters<typeof client.get>[1]) => {
  return await client.get<{ contents: Blog[] }>({
    endpoint: "sws-demo-blog", // ← microCMSで最初に作ったAPI名（エンドポイント）
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