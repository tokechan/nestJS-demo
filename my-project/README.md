# タスク管理アプリケーション

シンプルなタスク管理アプリケーションです。React + TypeScriptのフロントエンドとNestJSのバックエンドで構成されています。

## プロジェクト構成

```
my-project/
├── openapi/
│   └── openapi.yaml               # OpenAPI仕様ファイル（CRUD定義済み）
│
├── frontend/
│   ├── package.json               # React + TypeScript用パッケージ
│   ├── vite.config.ts             # Vite構成
│   ├── src/
│   │   ├── main.tsx               # Reactエントリポイント
│   │   ├── App.tsx                # ルーティングやUI構成
│   │   ├── api/                   # OpenAPIから生成された型付きクライアント
│   │   │   ├── models/            # Task, CreateTaskDto などの型
│   │   │   ├── services/          # DefaultService: API呼び出し関数群
│   │   │   └── OpenAPI.ts         # APIベースURLや設定
│   │   └── pages/                 # タスク一覧・作成などの画面
│   └── tsconfig.json
│
├── backend/                       # NestJS用（今後実装予定）
│
└── README.md
```

## 開発環境のセットアップ

### フロントエンド（React + TypeScript）

1. 依存関係のインストール
   ```
   cd frontend
   npm install
   ```

2. 開発サーバーの起動
   ```
   npm run dev
   ```

3. OpenAPI クライアントの生成
   ```
   npm run generate-api
   ```

### バックエンド（NestJS）

1. NestJS CLIのインストール（初回のみ）
   ```
   npm i -g @nestjs/cli
   ```

2. NestJSプロジェクトの生成
   ```
   cd backend
   nest new .
   ```

3. 開発サーバーの起動
   ```
   npm run start:dev
   ```

## 機能

- タスクの一覧表示
- タスクの作成
- タスクの詳細表示
- タスクの更新
- タスクの削除

## 技術スタック

### フロントエンド
- React
- TypeScript
- Vite
- React Router
- Axios

### バックエンド
- NestJS（予定）
- TypeScript
- TypeORM（予定）
- SQLite/PostgreSQL（予定）

## ライセンス

MIT 