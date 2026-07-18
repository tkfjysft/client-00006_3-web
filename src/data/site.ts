export const SITE_INFO = {
  title: "MAHO'S SESSION",
  metaDescription: "宇宙からの叡智を、あなたの心へ。魂とつながるチャネリング・セッション。高次元のガイドやハイヤーセルフからのメッセージを通じ、迷いを手放し、本来の自分へと還るための深い気づきをお届けします。人生の目的や現状の悩み、魂の道しるべを知りたい方はぜひ一度ご相談ください。",
  ownerName: "マホ",
  ownerFullname: "神崎 真帆",
  ownerNameEn: "MAHO",
  postCode: "*******",
  address: "東京都千代田区丸の内1丁目9-1",
  tel: "0000000000",
  fax: "00\u200c0000\u200c0000",
  googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.76493611234!3d35.6812361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x44c8309623e03!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1710000000000!5m2!1sja!2sjp",
};

export const NAV_ITEMS = {
  single: [
  { text: 'トップ', url: '/', icon: 'Sun' },
  { text: 'セッション', url: '#service', icon: 'Sparkles' },
  { text: 'お客様の声', url: '#voice', icon: 'MessageCircle' },
  { text: 'よくあるご質問', url: '#faq', icon: 'HelpCircle' },
  { text: 'プロフィール', url: '#profile', icon: 'User' },
  { text: 'ご予約/お問合せ', url: '/contact', icon: 'Mail' },
	],
	multi: [
  { text: 'トップ', url: '/', icon: 'Sun' },
  { text: 'セッション', url: '/service', icon: 'Sparkles' },
  { text: 'お客様の声', url: '/voice', icon: 'MessageCircle' },
  { text: 'よくあるご質問', url: '/faq', icon: 'HelpCircle' },
  { text: 'プロフィール', url: '/profile', icon: 'User' },
  { text: 'ご予約/お問合せ', url: '/contact', icon: 'Mail' },
  ]
};

export const FOOTER_DATA = {
  copyright: `© 2026 ${SITE_INFO.ownerNameEn}. All Rights Reserved.`,
  links: [
    { name: "鑑定メニュー", url: "#services", icon: "Sparkles" },
    { name: "お客様の声", url: "#testimonials", icon: "MessageCircle" },
    { name: "よくあるご質問", url: "#faq", icon: "HelpCircle" }
  ],
  sublinks: [
    { name: "特定商取引法に関する記述", url: "/law" },
    { name: "プライバシーポリシー", url: "/privacy-policy" }
  ]
};

export const SNS_DATA = [
  { url: 'https://yahoo.co.jp', icon: 'fa-brands fa-x-twitter' },
  { url: 'https://yahoo.co.jp', icon: 'fa-brands fa-instagram' },
  { url: 'https://yahoo.co.jp', icon: 'fa-brands fa-line' },
];

// プランの定義（将来的にここを変えるだけでいい）
export const PLANS = {
  SINGLE: "single",       
  MULTI: "multi",         
  PREMIUM: "premium-plan" 
} as const;