# next-router-prefetch

`next-router-prefetch`は useRouter をラップしたカスタムフックです。<br>
Link コンポーネントを使わないリンクにも prefetch を適用します。

## Features

通常、

```typescript
const router = useRouter();
router.push("/about");
```

このようにページ遷移しようとすると、遷移するまでにロードの時間がかかります。<br>
これが`next/link`(Link)コンポーネントでページ遷移する場合、リンクがビューポートに入った時点で自動でリンク先を prefetch するようになっています。<br>（`prefetch={false}`にしていない限り）<br>
しかし、`router.push`を使った場合は自動 prefetch がされないため、すぐにページ遷移されないのです。<br><br>
これを解消するのが`next-router-prefetch`です！

## Installation

```bash
yarn add @dc7290/next-router-prefetch # npm i @dc7290/next-router-prefetch
```

## Usage

```javascript
useRouter(url, observe, nextRouterOptions);
```

第 1 引数にリンク先を入力して使用します。<br>
このリンク先は `router.push` で使われているものと同じものが使用できるので、文字列だけでなく `UrlObject` でも構いません。<br>
`router.prefetch` にも適用できるように内部で受け取った `UrlObject` を文字列に変換しているので、prefetch 用に文字列を渡す必要はありません。<br><br>
`useRouterPrefetch()`を実行すると`handleRouterPush`、(observe が`true`の場合)`prefetchTarget`が返ってきます。<br><br>
`handleRouterPush`はその名の通り、渡したリンク先に遷移する関数です。<br>
トリガーにしたいイベント、または useEffect 等の中で使います。<br><br>
`prefetchTarget`は`IntersectionObserver`で observe するようにされている ref オブジェクトです。<br>
これをビューポートに入ったら prefetch して欲しい要素の ref に設定します。

#### JavaScript での使用例

```javascript
import { useEffect } from "react";
import { useRouterPrefetch } from "@dc7290/next-router-prefetch";

const FooComponent = () => {
  const { handleRouterPush, prefetchTarget } = useRouterPrefetch("/foo");
  // 以下のような渡し方も可能
  // const { handleRouterPush, prefetchTarget } = useRouterPrefetch({
  //   pathname: "/posts/[postId]";
  //   query: {
  //       postId: 1;
  //   };
  //   hash: "title";
  // });

  return (
    <div ref={prefetchTarget} onClick={handleRouterPush}>
      Link to 'foo' page.
    </div>
  );
};

// observe = falseで使う
const BarComponent = () => {
  const { handleRouterPush } = useRouterPrefetch("bar/", false);
  useEffect(() => {
    if (login) {
      handleRouterPush();
    }
  });

  return <div>Example login page.</div>;
};
```

#### TypeScript での使用例

```typescript
import { useRouterPrefetch } from "@dc7290/next-router-prefetch";

const FooComponent: React.VFC = () => {
  const {
    handleRouterPush,
    prefetchTarget,
  } = useRouterPrefetch<HTMLDivElement>("/foo");
  // 以下のような渡し方も可能
  // const { handleRouterPush, prefetchTarget } = useRouterPrefetch<HTMLDivElement>({
  //   pathname: "/posts/[postId]";
  //   query: {
  //       postId: 1;
  //   };
  //   hash: "title";
  // });

  return (
    <div ref={prefetchTarget} onClick={handleRouterPush}>
      Link to 'foo' page.
    </div>
  );
};

// observe = falseで使う
const BarComponent: React.VFC = () => {
  const { handleRouterPush } = useRouterPrefetch("bar/", false);
  useEffect(() => {
    if (login) {
      handleRouterPush();
    }
  });

  return <div>Example login page.</div>;
};
```

## Options

#### url

| value               | description                                                           |
| ------------------- | --------------------------------------------------------------------- |
| string or UrlObject | 遷移先を指定します。<br>router.push()に渡す時と同じ型を引き受けます。 |

#### observe

| value   | description                                                                                                                                                    |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| boolean | `IntersectionObserver` を用いて prefetch するかどうかを決めます。<br>デフォルトは true になっており、`false`にするとレンダリングの後、すぐに prefetch します。 |

#### nextRouterOptions

router.push のデフォルトの optins と同様です。

| key     | value               | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| as      | string or UrlObject | ブラウザに表示される URL のオプションのデコレーターです。Next.js 9.5.3 より前のバージョンでは、このデコレーターはダイナミックルートに使用されていましたが、その仕組みについては[以前のドキュメント](https://nextjs.org/docs/tag/v9.5.2/api-reference/next/link#dynamic-routes)をご覧ください。                                                                                                                                                                                                    |
| options | object              | 以下の設定オプションを持つオプションオブジェクトです。<br>scroll: ナビゲーション後にページの先頭にスクロールするかどうか。デフォルトは true です。<br>shallow: getStaticProps、getServerSideProps、getInitialProps を再実行することなく、現在のページのパスを更新します。デフォルトは false です。<br>locale: アクティブなロケールは自動的に前置されます。 locale は異なるロケールを指定することができます。false の場合、href はロケールを含めなければならず、デフォルトの動作は無効になります。 |

## Tips

便利な使い方を紹介します。

#### pathpida との連携

```typescript
import { pagesPath } from "~/utils/$path";

// ~~~~ 省略

const { handleRouterPush, prefetchTarget } = useRouterPrefetch<HTMLElement>(
  pagesPath.posts._postId(props.url).$url()
);

// ~~~~ 省略
```

リンクを型安全にしてくれるライブラリである pathpida との連携もこのように可能です。
しかも prefetch のために`pagesPath.posts._postId(props.url).$url().pathname`と文字列にして渡す必要もないので、pathpida をさらに便利に使えるでしょう！

## Author

dc7290
dhkh.cba0927@gmail.com

## License

"next-router-prefetch" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).
