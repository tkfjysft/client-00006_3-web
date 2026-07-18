import { PLANS } from '@/data/site';

export function getPlanFromPath(pathname: string) {
  // pathnameからプラン部分を抽出（/single/contact -> single）
  const segments = pathname.split('/');
  return segments[1] || PLANS.SINGLE; // デフォルトはsingleなど
}

export function resolveUrl(url: string, currentPath: string) {
  if (url.startsWith('#') || url.startsWith('http')) return url;
  
  const currentPlan = getPlanFromPath(currentPath);
  return `/${currentPlan}${url}`;
}