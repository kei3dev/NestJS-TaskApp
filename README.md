# Task App

### ユーザー認証付きにタスク管理アプリ

NestJS で GraphQL バックエンド API を開発

こちらの開発方法を [Zenn](https://zenn.dev/) で本にまとめました  
[NestJS で GraphQL 開発を試す](https://zenn.dev/keisuke333/books/ce5e3208a9d393)

## Stack

- NestJS
- GraphQL
- Prisma
- PostgreSQL
- Passport.js
- Docker

## 環境構築

### Dockerでデータベースの作成

```
docker compose up -d
```

### ライブラリのインストール

```
pnpm i
```

### 開発サーバー起動

```
pnpm run start:dev
```

### Prisma Studioの起動

```
npx prisma studio
```

### GraphQL Playground

```
http://localhost:3000/graphql
```
