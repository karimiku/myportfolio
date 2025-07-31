# Modern Portfolio Website

Bun + Vite + React + TypeScript + Tailwind CSS を使用した超高速でモダンなポートフォリオサイトです。

## 特徴

- ⚡ **Bun** - 超高速なJavaScriptランタイム
- 🚀 **Vite** - 爆速な開発サーバーとビルドツール
- 🔷 **TypeScript** - 型安全な開発環境
- ✨ モダンでスタイリッシュなデザイン
- 🎨 Tailwind CSS によるレスポンシブデザイン
- 🎭 Framer Motion によるスムーズなアニメーション
- 📱 モバイルファーストなレスポンシブ対応
- 🌙 ダークテーマ
- 🔧 ESLint による静的解析

## セクション

1. **Hero** - 自己紹介とプロフィール写真
2. **About** - 詳しいプロフィールとスキル概要
3. **Experience** - タイムライン形式の経歴
4. **Skills** - 技術スキルとソフトスキル
5. **Projects** - プロジェクト・実績紹介
6. **Contact** - お問い合わせフォームと連絡先

## 技術スタック

- **Runtime**: Bun
- **Build Tool**: Vite
- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Linting**: ESLint

## 前提条件

[Bun](https://bun.sh/) がインストールされている必要があります。

```bash
# macOS/Linux
curl -fsSL https://bun.sh/install | bash

# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"
```

## セットアップ

1. 依存関係をインストール:
```bash
bun install
```

2. 開発サーバーを起動:
```bash
bun dev
```

3. ブラウザで http://localhost:3000 を開く

## スクリプト

```bash
# 開発サーバー起動
bun dev

# 本番用ビルド
bun run build

# ビルド結果をプレビュー
bun run preview

# ESLintでコードチェック
bun run lint
```

## カスタマイズ

### 個人情報の更新
各コンポーネントファイル内の `[あなたの名前]` や `[メールアドレス]` などのプレースホルダーを実際の情報に置き換えてください。

### 色の変更
`tailwind.config.js` の `colors` セクションで色をカスタマイズできます。

### プロジェクトの追加
`src/components/Projects.tsx` の `projects` 配列に新しいプロジェクトを追加してください。

### 型定義
`src/types/index.ts` で型定義を管理しています。新しいデータ構造を追加する際は、ここに型を定義してください。

## ファイル構成

```
├── src/
│   ├── components/     # Reactコンポーネント
│   ├── types/         # TypeScript型定義
│   ├── App.tsx        # メインアプリケーション
│   ├── main.tsx       # エントリーポイント
│   └── index.css      # グローバルスタイル
├── public/            # 静的ファイル
├── index.html         # HTMLテンプレート
├── vite.config.ts     # Vite設定
├── tailwind.config.js # Tailwind設定
└── tsconfig.json      # TypeScript設定
```

## デプロイ

### Vercel
```bash
bun run build
# distフォルダをVercelにデプロイ
```

### Netlify
```bash
bun run build
# distフォルダをNetlifyにデプロイ
```

### その他
- GitHub Pages
- Cloudflare Pages
- Firebase Hosting

など、静的サイトホスティングサービスで簡単にデプロイできます。

## パフォーマンス

- Bunによる超高速なパッケージ管理とランタイム
- Viteによる高速な開発サーバーとHMR
- TypeScriptによる開発時の型チェック
- Tailwind CSSによる最適化されたCSS
- Framer Motionによる滑らかなアニメーション

## ライセンス

MIT License