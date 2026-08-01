export const SITE_INFO = {
  title: "YUKI'S SESSION",
  titleLogoImage: "logo_yukissession.avif",
  metaDescription: "宇宙からの叡智を、あなたの心へ。魂とつながるチャネリング・セッション。高次元のガイドやハイヤーセルフからのメッセージを通じ、迷いを手放し、本来の自分へと還るための深い気づきをお届けします。人生の目的や現状の悩み、魂の道しるべを知りたい方はぜひ一度ご相談ください。",
  ownerName: "ユキ",
  ownerFullname: "神城 ユキ",
  ownerNameEn: "YUKI",
  postCode: "*******",
  address: "東京都千代田区丸の内1丁目9-1",
  tel: "0000000000",
  fax: "00\u200c0000\u200c0000",
  googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280303808788!2d139.76493611234!3d35.6812361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x44c8309623e03!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1710000000000!5m2!1sja!2sjp",

  // ── プロフィール専用データ（site.tsへ統合） ──
  profile: {
    title: "はじめての方へ：ユキの想いと原点",
    subtitle: "魂の羅針盤を整え、本来の輝きを取り戻すサポート",
    lead: "幼い頃から目に見えないエネルギーの繊細な感覚に親しみ、現在はチャネラー・スピリチュアルリーダーとして活動しています。これまで数多くの方々との対話を通じ、高次元からのメッセージを仲介してまいりました。",
    text: "スピリチュアルは決して特別なものではなく、人生をより調和のとれたものにするための羅針盤です。どんなに深い迷いや不安の中にあるときでも、我们的（わたしたちの）魂は常に本来進むべき道を知っています。\n\n頭で考える損得勘定や世間体を手放し、ご自身の内側にある純粋な声に耳を傾けること。それだけで、人生は驚くほどスムーズに、そして温かな奇跡に満ちたものへと変化していきます。あなたの心がホッと軽くなり、あなたらしい一歩を踏み出すための伴走者として、心を込めてセッションに向き合っています。",
    tags: [
      "チャネラー",
      "スピリチュアルリーダー",
      "セッション実績 累計300件以上",
      "HSP・エンパシー繊細気質ケア",
      "人生の転機・キャリア伴走"
    ],
    philosophy: {
      title: "大切にしている価値観",
      concept: "「答えはすべて、あなたの内側にある」",
      description: "私が高次元からのメッセージをお伝えするのは、誰かに依存してもらうためではありません。あなたがご自身の足で立ち、自分の直感を信じて人生を切り開いていくための「目覚めのきっかけ」をお渡しするためです。どんなお悩みも否定せず、魂の視点から優しく紐解きます。"
    },
    history: [
      {
        period: "幼少期〜学生時代",
        event: "目に見えないエネルギーや人の感情の機微に人一倍敏感な子供時代を過ごす。自然や宇宙との対話に安らぎを見出す。"
      },
      {
        period: "社会人・転機",
        event: "一般的な企業勤務や人間関係の葛藤を経験する中で、心身のバランスを崩しかけたことをきっかけに、本格的なスピリチュアルワークや宇宙の法則の探求へ入る。"
      },
      {
        period: "現在",
        event: "チャネラー・スピリチュアルリーダーとして独立。これまでに300名を超えるクライアントの魂のブループリントを読み解き、数々の変容をサポート。"
      }
    ],
    specialties: [
      "高次元（ハイヤーセルフ・ガイド）からのチャネリングメッセージの通訳",
      "人生の大きな転機（転職・独立・人間関係）における進路の選択",
      "無意識の思い込みや心のブロックの特定と、エネルギーの書き換え"
    ],
    message: "「私なんかが…」と自分の可能性に蓋をしていませんか？ あなたがこの世界に生まれてきた意味や、魂が本当にやりたかったことは、必ず存在します。一人で抱え込ほどせず、いつでも気軽にお話しにいらしてくださいね。お会いできるのを心より楽しみにしています。"
  }
};




// 1. まず各URLのベーススラッグを定義（ここだけ変えればすべてに連動する）
export const SITE_URLS = {
  TOP: '/',
  SERVICE: '/service',
  VOICE: '/voice',
  FAQ: '/faq',
  PROFILE: '/profile',
  BLOG: '/blog',
  CONTACT: '/contact',
} as const;

// 2. 単一ページ用のハッシュリンクを SITE_URLS から自動組み立て
export const SINGLE_URLS = {
  TOP: SITE_URLS.TOP,
  // スラッグの先頭の '/' を外して '/#〇〇' に変換する
  SERVICE: `/#${SITE_URLS.SERVICE.replace('/', '')}`,
  VOICE: `/#${SITE_URLS.VOICE.replace('/', '')}`,
  FAQ: `/#${SITE_URLS.FAQ.replace('/', '')}`,
  PROFILE: `/#${SITE_URLS.PROFILE.replace('/', '')}`,
  BLOG: SITE_URLS.BLOG,
  CONTACT: SITE_URLS.CONTACT,
} as const;

// 3. 組み合わせる
export const BASE_NAV_ITEMS = [
  { text: 'トップ', icon: 'Sun', singleUrl: SINGLE_URLS.TOP, multiUrl: SITE_URLS.TOP },
  { text: 'セッション', icon: 'Sparkles', singleUrl: SINGLE_URLS.SERVICE, multiUrl: SITE_URLS.SERVICE },
  { text: 'お客様の声', icon: 'MessageCircle', singleUrl: SINGLE_URLS.VOICE, multiUrl: SITE_URLS.VOICE },
  { text: 'よくあるご質問', icon: 'HelpCircle', singleUrl: SINGLE_URLS.FAQ, multiUrl: SITE_URLS.FAQ },
  { text: 'プロフィール', icon: 'User', singleUrl: SINGLE_URLS.PROFILE, multiUrl: SITE_URLS.PROFILE },
  { text: 'ブログ', icon: 'User', singleUrl: SINGLE_URLS.BLOG, multiUrl: SITE_URLS.BLOG },
  { text: 'ご予約/お問い合わせ', icon: 'Mail', singleUrl: SINGLE_URLS.CONTACT, multiUrl: SITE_URLS.CONTACT },
] as const;
// 2. mapを使って single と multi を自動生成
export const NAV_ITEMS = {
  single: BASE_NAV_ITEMS.map(item => ({
    text: item.text,
    url: item.singleUrl,
    icon: item.icon,
  })),
  multi: BASE_NAV_ITEMS.map(item => ({
    text: item.text,
    url: item.multiUrl,
    icon: item.icon,
  })),
  premium: BASE_NAV_ITEMS.map(item => ({
    text: item.text,
    url: item.multiUrl,
    icon: item.icon,
  })),
};

//パンくずリストのための
export const BREADCRUMB_NAME_MAP: Record<string, string> = BASE_NAV_ITEMS.reduce((acc, item) => {
  // multiUrl から先頭の '/' を除いたものをキーにする（例: '/blog' -> 'blog'）
  const pathKey = item.multiUrl.replace(/^\//, '');
  if (pathKey) {
    acc[pathKey] = item.text;
  }
  return acc;
}, {} as Record<string, string>);





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
  SINGLE: "demo01",       
  MULTI: "demo02",         
  PREMIUM: "demo03" 
} as const;