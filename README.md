# React TypeScript 天気アプリ

WeatherAPI.comサービスを使用してリアルタイムの天気情報を表示する、ReactとTypeScriptで構築されたモダンな天気アプリケーションです。

## 🌟 機能

- **リアルタイム天気データ**: 世界中の任意の都市の現在の天気情報を取得
- **モダンUI**: ガラスモーフィズム効果を使用した美しいレスポンシブデザイン
- **TypeScript**: 完全な型安全性と優れた開発体験
- **レスポンシブデザイン**: デスクトップ、タブレット、モバイルデバイスで完璧に動作
- **高速パフォーマンス**: 効率的なレンダリングを備えた最適化されたReactコンポーネント

## 🚀 ライブデモ

**[ライブアプリを見る](https://wiz-program.github.io/weather-app)**

## 🛠️ 使用技術

- **React 18** - フックと関数コンポーネントを使用したモダンなReact
- **TypeScript** - 型安全なJavaScript開発
- **WeatherAPI.com** - リアルタイム天気データサービス
- **CSS3** - ガラスモーフィズム効果を使用したモダンスタイリング
- **GitHub Pages** - 無料ホスティングとデプロイ

## 📋 前提条件

- Node.js (バージョン14以上)
- npmまたはyarnパッケージマネージャー
- Git

## 🔧 インストール

1. **リポジトリをクローン**:
```bash
git clone https://github.com/wiz-program/weather-app.git
cd react-typescript-weather-app
```

2. **依存関係をインストール**:
```bash
npm install
```

3. **開発サーバーを起動**:
```bash
npm start
```

アプリは [http://localhost:3000](http://localhost:3000) で開きます。

## 📱 使用方法

1. **入力フィールドに都市名を入力**
2. **「Get Weather」をクリック**またはEnterキーを押す
3. **天気情報を確認**:
   - 都市名と国名
   - 現在の気温（摂氏）
   - 天気状態とアイコン
   - リアルタイム更新

## 🚀 デプロイ

このプロジェクトは自動GitHub Pagesデプロイ用に設定されています。

### GitHub Pagesへのデプロイ

1. **package.jsonのhomepageフィールドを更新**:
```json
"homepage": "https://wiz-program.github.io/weather-app"
```

2. **アプリをデプロイ**:
```bash
npm run deploy
```

3. **リポジトリ設定でGitHub Pagesを有効化**:
   - Settings > Pagesに移動
   - 「Deploy from a branch」を選択
   - 「gh-pages」ブランチを選択
   - 設定を保存

アプリは以下で利用可能になります: `https://wiz-program.github.io/weather-app`

## 📜 利用可能なスクリプト

- `npm start` - 開発モードでアプリを実行
- `npm run build` - 本番用にアプリをビルド
- `npm test` - テストランナーを起動
- `npm run eject` - Create React Appからイジェクト
- `npm run deploy` - GitHub Pagesにアプリをデプロイ

## 🔧 設定

### 環境変数

ルートディレクトリに`.env.local`ファイルを作成:

```env
REACT_APP_WEATHER_API_KEY=your_weather_api_key_here
```

### API設定

このアプリは[WeatherAPI.com](https://www.weatherapi.com/)の天気データを使用しています。以下が必要です:

1. WeatherAPI.comで無料アカウントにサインアップ
2. APIキーを取得
3. 環境変数に追加

## 🐛 トラブルシューティング

### よくある問題

1. **GitHub Pagesで白い画面**:
   - package.jsonの`homepage`フィールドが正しいか確認
   - `gh-pages`ブランチが存在するか確認
   - デプロイ完了まで数分待つ

2. **APIエラー**:
   - APIキーが正しいか確認
   - API使用制限を確認
   - 都市名が有効か確認

3. **ビルドエラー**:
   - `node_modules`フォルダをクリアして依存関係を再インストール
   - TypeScriptコンパイルエラーを確認

## 📄 ライセンス

このプロジェクトはオープンソースで、[MIT License](LICENSE)の下で利用可能です。

## 🤝 貢献

貢献を歓迎します！プルリクエストを自由に送信してください。

## 📞 サポート

問題が発生した場合や質問がある場合は:

1. [トラブルシューティングセクション](#-トラブルシューティング)を確認
2. 既存の[issues](https://github.com/wiz-program/weather-app/issues)を検索
3. 詳細情報を含む新しいissueを作成

## 🙏 謝辞

- 天気データを提供してくださった[WeatherAPI.com](https://www.weatherapi.com/)
- プロジェクトセットアップを提供してくださった[Create React App](https://create-react-app.dev/)
- 素晴らしいフレームワークを提供してくださった[React](https://reactjs.org/)チーム

---

**❤️ [wiz-program](https://github.com/wiz-program)によって作成**
