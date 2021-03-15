# next-router-prefetch

`next-router-prefetch` is a custom hook that wraps useRouter.<br>
Apply prefetch to links that do not use the Link component.

[日本語](https://github.com/dc7290/next-router-prefetch/blob/main/docs/README-ja.md)

## Features

Usually,

```typescript
const router = useRouter();
router.push("/about");
```

If you try to transition pages in this way, it will take some time to load before you can transition.<br>
If this is a page transition with the `next/link`(Link) component, it will automatically prefetch the link destination when the link enters the viewport.<br>（Unless you have set `prefetch={false}`.）<br>
However, if you use `router.push`, the page will not be moved immediately because automatic prefetch is not performed.<br><br>
The solution to this is `next-router-prefetch`!

## Installation

```bash
yarn add @dc7290/next-router-prefetch # npm i @dc7290/next-router-prefetch
```

## Usage

```javascript
useRouter(url, observe, nextRouterOptions);
```

Use the first argument to enter the link destination.<br>
This link can be the same as the one used in `router.push`, so it can be a `UrlObject` as well as a string.<br>
The `UrlObject` received internally is converted to a string so that it can be applied to `router.prefetch`, so there is no need to pass a string for prefetch.<br><br>
Running `useRouterPrefetch()` will return `handleRouterPush` and (if observe is `true`) `prefetchTarget`.<br><br>
`handleRouterPush`, as the name suggests, is a function that transitions to the passed link destination.<br>
Use this in the event you want to trigger, or in useEffect, etc.<br><br>
`prefetchTarget` is a ref object that is supposed to be observed by `IntersectionObserver`.<br>
Set this to the ref of the element you want prefetched when it enters the viewport.

#### JavaScript での使用例

```js
import { useEffect } from "react";
import { useRouterPrefetch } from "@dc7290/next-router-prefetch";

const FooComponent = () => {
  const { handleRouterPush, prefetchTarget } = useRouterPrefetch("/foo");
  // You can also give it to them in the following ways
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

// Use with observe = false
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

```js
import { useRouterPrefetch } from "@dc7290/next-router-prefetch";

const FooComponent: React.VFC = () => {
  const { handleRouterPush, prefetchTarget } =
    useRouterPrefetch < HTMLDivElement > "/foo";
  // You can also give it to them in the following ways
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

// Use with observe = false
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

| value               | description                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| string or UrlObject | Specifies the transition destination.<br>It takes on the same type as when passed to router.push(). |

#### observe

| value   | description                                                                                                                                                  |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| boolean | Use `IntersectionObserver` to decide whether to prefetch or not.<br>The default is true, and if set to `false` it will prefetch immediately after rendering. |

#### nextRouterOptions

This is the same as the default optins for router.push.

| key     | value               | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| as      | string or UrlObject | ブラウザに表示される URL のオプションのデコレーターです。Next.js 9.5.3 より前のバージョンでは、このデコレーターはダイナミックルートに使用されていましたが、その仕組みについては[以前のドキュメント](https://nextjs.org/docs/tag/v9.5.2/api-reference/next/link#dynamic-routes)をご覧ください。                                                                                                                                                                                                    |
| options | object              | 以下の設定オプションを持つオプションオブジェクトです。<br>scroll: ナビゲーション後にページの先頭にスクロールするかどうか。デフォルトは true です。<br>shallow: getStaticProps、getServerSideProps、getInitialProps を再実行することなく、現在のページのパスを更新します。デフォルトは false です。<br>locale: アクティブなロケールは自動的に前置されます。 locale は異なるロケールを指定することができます。false の場合、href はロケールを含めなければならず、デフォルトの動作は無効になります。 |

## Tips

Here are some useful ways to use it.

#### Linking with pathpida

```typescript
import { pagesPath } from "~/utils/$path";

// ~~~~ 省略

const { handleRouterPush, prefetchTarget } = useRouterPrefetch<HTMLElement>(
  pagesPath.posts._postId(props.url).$url()
);

// ~~~~ 省略
```

It is also possible to work with [pathpida](https://github.com/aspida/pathpida), a library that makes links type-safe, in this way.
And you don't need to pass `pagesPath.posts._postId(props.url)`. You don't even need to pass `$url().pathname` as a string to make pathpida even more useful!

## Author

dc7290
dhkh.cba0927@gmail.com

## License

"next-router-prefetch" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).
