# 🔥 HonoTodoApp

Hono × Node.js × SQLite × EJS で構築したシンプルなTodoアプリです。  
Honoフレームワークの学習を目的として作成しました。

---

## 技術スタック

| 技術 | 役割 |
|---|---|
| [Hono](https://hono.dev/) | Webフレームワーク |
| [@hono/node-server](https://github.com/honojs/node-server) | Node.jsアダプター |
| [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) | SQLiteクライアント |
| [EJS](https://ejs.co/) | テンプレートエンジン |
| [TypeScript](https://www.typescriptlang.org/) | 型安全な開発 |
| [tsx](https://github.com/privatenumber/tsx) | TypeScriptの直接実行 |

---

## 機能

- ✅ Todoの追加
- ✅ Todoの完了 / 未完了トグル
- ✅ Todoの削除

---

## 追加予定の機能

- [ ] Zodによるバリデーション強化（`@hono/zod-validator` の導入）
- [ ] Todoタイトルの編集機能（`POST /:id/edit` エンドポイントの追加）

---

## ディレクトリ構成

```
HonoTodoApp/
├── src/
│   ├── index.ts          # エントリーポイント
│   ├── routes/
│   │   └── todos.ts      # Todoルーティング
│   ├── db/
│   │   └── database.ts   # SQLite接続・初期化
│   └── types/
│       └── todo.ts       # 型定義
├── views/
│   └── index.ejs         # 一覧画面
├── public/
│   └── style.css         # スタイルシート
├── package.json
└── tsconfig.json
```

---

## セットアップ手順

### 1. リポジトリのクローン

```bash
git clone <your-repository-url>
cd HonoTodoApp
```

### 2. パッケージのインストール

```bash
npm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

### 4. ブラウザでアクセス

```
http://localhost:3000
```

---

## スクリプト

| コマンド | 内容 |
|---|---|
| `npm run dev` | 開発サーバー起動（ホットリロードあり） |
| `npm run build` | TypeScriptをコンパイル |
| `npm run start` | コンパイル済みJSを本番実行 |