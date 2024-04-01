![言の葉つむぎ](https://github.com/topi0247/KotonohaTsumugi/assets/23026318/7405bb7c-5ad2-4d91-b59b-73f6e7cbab78)

## サービスURL
https://kotonoha-tsumugi.vercel.app

## サービス概要
物語というバトンを繋いで１つの小説を完成させる、リレー小説を投稿するアプリです。<br />
起承転結の4節構成で、1構成400文字の制限をつけています。

## 作成経緯
RUNTEQ祭に向け元々作っていたアプリの応募が間に合わないと判断し、急遽別のミニアプリを作ることにしました。<br />
そうして生まれたのが今回ご紹介するアプリ「言の葉つむぎ」です。<br />
3/18に開発を開始し、3/30にリリースしたので制作期間は12日ほどです。

## 機能紹介
（未）がついているものは未ログインでも使える機能です。
※gifで載せておりますので動画にカクつきがあります。
| トップ画面（未） | トップから一覧画面（未） |
| ---- | ---- |
| [![Image from Gyazo](https://i.gyazo.com/6612c99c7e1554d79d854e78954a6c15.gif)](https://gyazo.com/6612c99c7e1554d79d854e78954a6c15) | [![Image from Gyazo](https://i.gyazo.com/49b5207556cd71ecdad95d0428481dae.gif)](https://gyazo.com/49b5207556cd71ecdad95d0428481dae) |
| シンプルながらに演出をつけてみました。<br />初めて小説を読むときのわくわく感を演出してみました。| 読み込みまでのラグが分かりにくくなるようタイトルとナビゲーションをアニメーションで移動させページ遷移を感じさせない工夫をしました。 |

| 一覧画面（未） | 小説（未） |
| ---- | ---- |
| [![Image from Gyazo](https://i.gyazo.com/c4653c1a2606c9be0011f05b4c09b001.gif)](https://gyazo.com/c4653c1a2606c9be0011f05b4c09b001) | [![Image from Gyazo](https://i.gyazo.com/84482a08557a31c9642a9c2cec25c9bb.gif)](https://gyazo.com/84482a08557a31c9642a9c2cec25c9bb) |
| タイトルと冒頭が分かるよう一部を表示しています。 | ページ遷移せずそのまま読めます。紙をめくるような感覚で次ページを読めます。 |

| 執筆 | 続きを書く |
| ---- | ---- |
| [![Image from Gyazo](https://i.gyazo.com/87e23ac144d4424efb905b1533e5e099.gif)](https://gyazo.com/87e23ac144d4424efb905b1533e5e099) | [![Image from Gyazo](https://i.gyazo.com/68cdf9b02a344d1b3d634814d8566668.gif)](https://gyazo.com/68cdf9b02a344d1b3d634814d8566668) |
| 起承転結の起を書くページです。起の節ではタイトルから作成できます。 | ユーザーがまだ書いていない小説のみ、続きを書くことが出来ます。同じユーザーが2つ以上の節を書くことは出来ません。 |

| 自分の書いた小説一覧 |
| ---- |
| [![Image from Gyazo](https://i.gyazo.com/32c4424bb918c9fb826ffa2dc52217cf.gif)](https://gyazo.com/32c4424bb918c9fb826ffa2dc52217cf) |
| 起承転結の節別に一覧を分けています。 |

## 技術スタック
#### 使用技術
| カテゴリ | 技術 |
| ---- | ---- |
| フロントエンド | Next.js14(Page Router), TypeScript, Tailwind CSS, MaterialUI |
| バックエンド | Rails7.1.3 |
| データベース | PostgreSQL |
| 開発環境 | Windows, WSL2, Docker |
| インフラ | Vercel, Fly.io |
| CI/CL | GitHubActions |
| その他 | Swiper, Devise, DeviseJWT |

#### ER図
![er.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3083959/429b7b0a-9d78-dbd7-a0ce-4d014faf3061.png)

## その他
Qiitaに記事を書きました。<br />
[【個人開発】起承転結でリレー小説できるアプリ「言の葉つむぎ」を作りました【Next.js×Rails】](https://qiita.com/topi_log/items/3ef541d490ee4c332752)
