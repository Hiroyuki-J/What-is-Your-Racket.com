# What-is-Your-Racket.com
# テニスラケット診断Webサイト 開発ガイド

このドキュメントは、GitHubリポジトリが準備できた状態から、テニスラケット診断Webサイトの開発を始めるためのステップをまとめたものです。

---

## 1. ローカル開発環境のセットアップ

コードを書き、開発を進めるために必要な環境をあなたのPC上に構築します。

### 1.1. Node.jsのインストール

ReactやTailwind CSSを使用するために必須のJavaScript実行環境です。

* **推奨バージョン**: LTS (Long Term Support) 版。安定性が高く、長期的なサポートが提供されます。
    * Node.jsの公式サイトから最新のLTS版をダウンロードし、インストールしてください。
    * [Node.js 公式サイト](https://nodejs.org/ja/)
* **インストール確認**:
    * インストール後、コマンドプロンプトやターミナルで以下のコマンドを実行し、バージョンが表示されることを確認します。
        ```bash
        node -v
        npm -v
        ```

### 1.2. テキストエディタ / IDE の準備

コードを記述するためのツールです。

* **推奨**: **Visual Studio Code (VS Code)**
    * 多機能で拡張性が高く、Web開発に非常に適しています。
    * [Visual Studio Code 公式サイト](https://code.visualstudio.com/)

---

## 2. GitHubリポジトリのクローン

GitHub上のリポジトリをあなたのPC（ローカル環境）にダウンロードします。

1.  **GitHubリポジトリのURLをコピー**:
    * GitHubのリポジトリページにアクセスします。
    * 「Code」ボタンをクリックし、表示されるURL（通常はHTTPSタブのURL）をコピーします。
2.  **コマンドの実行**:
    * コマンドプロンプトやターミナルを開き、プロジェクトを保存したい任意のディレクトリに移動します。
    * 以下のコマンドを実行します。（`[コピーしたGitHubリポジトリのURL]` は実際のURLに置き換えてください）
        ```bash
        git clone [コピーしたGitHubリポジトリのURL]
        ```
    * 例: `git clone https://github.com/YourUsername/What-is-Your-Racket.com.git`
    * これにより、指定したディレクトリ内にリポジトリ名のフォルダ（例: `What-is-Your-Racket.com`）が作成され、その中にGitHub上のファイルがダウンロードされます。

---

## 3. Reactプロジェクトの作成

クローンしたリポジトリのディレクトリ内で、Reactアプリケーションのひな形を作成します。

1.  **リポジトリのディレクトリへ移動**:
    * ターミナルで、先ほどクローンしたリポジトリのフォルダに移動します。
        ```bash
        cd What-is-Your-Racket.com # あなたのリポジトリ名に合わせてください
        ```
2.  **Create React App (CRA) でプロジェクト作成**:
    * 以下のコマンドを実行します。`npx create-react-app .` は、**現在のディレクトリ**にReactプロジェクトを作成するという意味です。
        ```bash
        npx create-react-app .
        ```
    * このコマンドにより、Reactアプリケーションに必要なファイルやフォルダ（`src/`, `public/`, `package.json` など）が自動的に生成されます。完了まで数分かかる場合があります。

---

## 4. Tailwind CSSのセットアップ

ReactプロジェクトにTailwind CSSを導入し、スタイルを適用できるようにします。

1.  **Tailwind CSSと関連パッケージのインストール**:
    * Reactプロジェクトのルートディレクトリ（`package.json` がある場所）で、以下のコマンドを実行します。
        ```bash
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p
        ```
    * これにより、`tailwind.config.js` と `postcss.config.js` という2つの設定ファイルが生成されます。

2.  **`tailwind.config.js` の設定**:
    * 生成された `tailwind.config.js` ファイルを開き、`content` オプションを以下のように編集して、Tailwind CSSが適用されるファイルを指定します。
        ```javascript
        /** @type {import('tailwindcss').Config} */
        module.exports = {
          content: [
            "./src/**/*.{js,jsx,ts,tsx}", // Reactコンポーネントがあるディレクトリを指定
          ],
          theme: {
            extend: {},
          },
          plugins: [],
        }
        ```

3.  **メインCSSファイルへのTailwindディレクティブの追加**:
    * 通常は `src/index.css` または `src/App.css` など、プロジェクトのCSSの起点となるファイルを開きます。
    * ファイルの先頭に以下のTailwindディレクティブを追加します。
        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```

---

## 5. 開発サーバーの起動と動作確認

ローカル環境でWebサイトを起動し、正しく動作するか確認します。

1.  **開発サーバーの起動**:
    * プロジェクトのルートディレクトリで以下のコマンドを実行します。
        ```bash
        npm start
        ```
2.  **ブラウザでの確認**:
    * 通常、自動的にWebブラウザが開き、`http://localhost:3000` でReactアプリケーションの初期画面が表示されます。

---

## 6. 初めてのコミットとプッシュ

ローカルでの変更をGitHubリポジトリに反映させます。

1.  **変更をステージングエリアに追加**:
    * ```bash
        git add .
        ```
2.  **変更内容をコミット**:
    * ```bash
        git commit -m "feat: Initial React and Tailwind CSS setup"
        ```
3.  **GitHubにプッシュ**:
    * ```bash
        git push origin main # または、あなたのリポジトリのデフォルトブランチ名に合わせてください（例: master）
        ```
    * これで、GitHubリポジトリにReactとTailwind CSSの初期ファイルがアップロードされます。

---

## 7. 次のステップ (開発計画)

ここからは、Webサイトの具体的なコンテンツと機能を実装していきます。

* **コンポーネントの設計と実装**:
    * 質問表示コンポーネント
    * 選択肢ボタンコンポーネント
    * 診断結果表示コンポーネント
    * ナビゲーション（例: 進む/戻るボタン、進捗バー）コンポーネント
* **質問データの定義**:
    * 質問内容、選択肢、各選択肢が診断ロジックに与える影響などをJavaScriptの配列やオブジェクトとして定義します。
* **診断ロジックの実装**:
    * ユーザーの回答に基づいて、最適なラケットを判断するJavaScriptのロジックを記述します。
    * ラケットデータベース（JSON形式などで管理）を読み込み、フィルタリングやスコアリングを行います。
* **UI/UXの改善**:
    * ユーザーが快適に質問を進められるように、アニメーションやフィードバックを追加します。
    * Tailwind CSSを使って、見た目を美しく整えます。
* **レスポンシブデザイン**:
    * スマートフォン、タブレット、PCなど、様々なデバイスで適切に表示されるように調整します。

---

このガイドを参考に、開発を進めていってください。# テニスラケット診断Webサイト 開発ガイド

このドキュメントは、GitHubリポジトリが準備できた状態から、テニスラケット診断Webサイトの開発を始めるためのステップをまとめたものです。

---

## 1. ローカル開発環境のセットアップ

コードを書き、開発を進めるために必要な環境をあなたのPC上に構築します。

### 1.1. Node.jsのインストール

ReactやTailwind CSSを使用するために必須のJavaScript実行環境です。

* **推奨バージョン**: LTS (Long Term Support) 版。安定性が高く、長期的なサポートが提供されます。
    * Node.jsの公式サイトから最新のLTS版をダウンロードし、インストールしてください。
    * [Node.js 公式サイト](https://nodejs.org/ja/)
* **インストール確認**:
    * インストール後、コマンドプロンプトやターミナルで以下のコマンドを実行し、バージョンが表示されることを確認します。
        ```bash
        node -v
        npm -v
        ```

### 1.2. テキストエディタ / IDE の準備

コードを記述するためのツールです。

* **推奨**: **Visual Studio Code (VS Code)**
    * 多機能で拡張性が高く、Web開発に非常に適しています。
    * [Visual Studio Code 公式サイト](https://code.visualstudio.com/)

---

## 2. GitHubリポジトリのクローン

GitHub上のリポジトリをあなたのPC（ローカル環境）にダウンロードします。

1.  **GitHubリポジトリのURLをコピー**:
    * GitHubのリポジトリページにアクセスします。
    * 「Code」ボタンをクリックし、表示されるURL（通常はHTTPSタブのURL）をコピーします。
2.  **コマンドの実行**:
    * コマンドプロンプトやターミナルを開き、プロジェクトを保存したい任意のディレクトリに移動します。
    * 以下のコマンドを実行します。（`[コピーしたGitHubリポジトリのURL]` は実際のURLに置き換えてください）
        ```bash
        git clone [コピーしたGitHubリポジトリのURL]
        ```
    * 例: `git clone https://github.com/YourUsername/What-is-Your-Racket.com.git`
    * これにより、指定したディレクトリ内にリポジトリ名のフォルダ（例: `What-is-Your-Racket.com`）が作成され、その中にGitHub上のファイルがダウンロードされます。

---

## 3. Reactプロジェクトの作成

クローンしたリポジトリのディレクトリ内で、Reactアプリケーションのひな形を作成します。

1.  **リポジトリのディレクトリへ移動**:
    * ターミナルで、先ほどクローンしたリポジトリのフォルダに移動します。
        ```bash
        cd What-is-Your-Racket.com # あなたのリポジトリ名に合わせてください
        ```
2.  **Create React App (CRA) でプロジェクト作成**:
    * 以下のコマンドを実行します。`npx create-react-app .` は、**現在のディレクトリ**にReactプロジェクトを作成するという意味です。
        ```bash
        npx create-react-app .
        ```
    * このコマンドにより、Reactアプリケーションに必要なファイルやフォルダ（`src/`, `public/`, `package.json` など）が自動的に生成されます。完了まで数分かかる場合があります。

---

## 4. Tailwind CSSのセットアップ

ReactプロジェクトにTailwind CSSを導入し、スタイルを適用できるようにします。

1.  **Tailwind CSSと関連パッケージのインストール**:
    * Reactプロジェクトのルートディレクトリ（`package.json` がある場所）で、以下のコマンドを実行します。
        ```bash
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p
        ```
    * これにより、`tailwind.config.js` と `postcss.config.js` という2つの設定ファイルが生成されます。

2.  **`tailwind.config.js` の設定**:
    * 生成された `tailwind.config.js` ファイルを開き、`content` オプションを以下のように編集して、Tailwind CSSが適用されるファイルを指定します。
        ```javascript
        /** @type {import('tailwindcss').Config} */
        module.exports = {
          content: [
            "./src/**/*.{js,jsx,ts,tsx}", // Reactコンポーネントがあるディレクトリを指定
          ],
          theme: {
            extend: {},
          },
          plugins: [],
        }
        ```

3.  **メインCSSファイルへのTailwindディレクティブの追加**:
    * 通常は `src/index.css` または `src/App.css` など、プロジェクトのCSSの起点となるファイルを開きます。
    * ファイルの先頭に以下のTailwindディレクティブを追加します。
        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```

---

## 5. 開発サーバーの起動と動作確認

ローカル環境でWebサイトを起動し、正しく動作するか確認します。

1.  **開発サーバーの起動**:
    * プロジェクトのルートディレクトリで以下のコマンドを実行します。
        ```bash
        npm start
        ```
2.  **ブラウザでの確認**:
    * 通常、自動的にWebブラウザが開き、`http://localhost:3000` でReactアプリケーションの初期画面が表示されます。

---

## 6. 初めてのコミットとプッシュ

ローカルでの変更をGitHubリポジトリに反映させます。

1.  **変更をステージングエリアに追加**:
    * ```bash
        git add .
        ```
2.  **変更内容をコミット**:
    * ```bash
        git commit -m "feat: Initial React and Tailwind CSS setup"
        ```
3.  **GitHubにプッシュ**:
    * ```bash
        git push origin main # または、あなたのリポジトリのデフォルトブランチ名に合わせてください（例: master）
        ```
    * これで、GitHubリポジトリにReactとTailwind CSSの初期ファイルがアップロードされます。

---

## 7. 次のステップ (開発計画)

ここからは、Webサイトの具体的なコンテンツと機能を実装していきます。

* **コンポーネントの設計と実装**:
    * 質問表示コンポーネント
    * 選択肢ボタンコンポーネント
    * 診断結果表示コンポーネント
    * ナビゲーション（例: 進む/戻るボタン、進捗バー）コンポーネント
* **質問データの定義**:
    * 質問内容、選択肢、各選択肢が診断ロジックに与える影響などをJavaScriptの配列やオブジェクトとして定義します。
* **診断ロジックの実装**:
    * ユーザーの回答に基づいて、最適なラケットを判断するJavaScriptのロジックを記述します。
    * ラケットデータベース（JSON形式などで管理）を読み込み、フィルタリングやスコアリングを行います。
* **UI/UXの改善**:
    * ユーザーが快適に質問を進められるように、アニメーションやフィードバックを追加します。
    * Tailwind CSSを使って、見た目を美しく整えます。
* **レスポンシブデザイン**:
    * スマートフォン、タブレット、PCなど、様々なデバイスで適切に表示されるように調整します。

---

このガイドを参考に、開発を進めていってください。
