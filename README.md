# next-router-prefetch

[![npm version](https://img.shields.io/npm/v/@dc7290/next-router-prefetch)](https://www.npmjs.com/package/@dc7290/next-router-prefetch) [![license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/cyrilwanner/@dc7290/next-router-prefetch/blob/master/LICENSE) [![downloads](https://img.shields.io/npm/dt/@dc7290/next-router-prefetch)](https://www.npmjs.com/package/@dc7290/next-router-prefetch)

✋ こちらのバージョンでは Next.js 11 を使用しています。
それ以前のバージョンの場合は、[こちら](https://www.npmjs.com/package/@dc7290/next-router-prefetch/v/2.2.2)をご利用ください。

---

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
yarn add @dc7290/next-router-prefetch@2.2.2 # npm i @dc7290/next-router-prefetch@2.2.2
```

## Usage

```js
useRouterPrefetch(url, observe, nextRouterOptions);
```

Use the first argument to enter the link destination.<br>
This link can be the same as the one used in `router.push`, so it can be a `UrlObject` as well as a string.<br>
The `UrlObject` received internally is converted to a string so that it can be applied to `router.prefetch`, so there is no need to pass a string for prefetch.<br><br>
Running `useRouterPrefetch()` will return `handleRouterPush` and (if observe is `true`) `prefetchTarget`.<br><br>
`handleRouterPush`, as the name suggests, is a function that transitions to the passed link destination.<br>
Use this in the event you want to trigger, or in useEffect, etc.<br><br>
`prefetchTarget` is a ref object that is supposed to be observed by `IntersectionObserver`.<br>
Set this to the ref of the element you want prefetched when it enters the viewport.

#### Example of use in JavaScript

```js
import React, { useEffect } from "react";
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
  const { handleRouterPush } = useRouterPrefetch("/bar", false);
  useEffect(() => {
    if (login) {
      handleRouterPush();
    }
  });

  return <div>Example login page.</div>;
};
```

#### Example of use in TypeScript

```ts
import React, { useEffect } from "react";
import { useRouterPrefetch } from "@dc7290/next-router-prefetch";

const FooComponent: React.VFC = () => {
  const { handleRouterPush, prefetchTarget } =
    useRouterPrefetch<HTMLDivElement>("/foo");
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
  const { handleRouterPush } = useRouterPrefetch("/bar", false);
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

| key                         | value                    | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| intersectionObserverOptions | IntersectionObserverInit | Specify the options to be passed to IntersectionObserver when observe is set to true.[reference(MDN)](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#parameters)                                                                                                                                                                                                                                                                               |
| as                          | string or UrlObject      | Optional decorator for the path that will be shown in the browser URL bar.<br>Before Next.js 9.5.3 this was used for dynamic routes, check our [previous docs](https://nextjs.org/docs/tag/v9.5.2/api-reference/next/link#dynamic-routes) to see how it worked.                                                                                                                                                                                                                            |
| options                     | object                   | Optional object with the following configuration options:<br>scroll: Scroll to the top of the page after a navigation. Defaults to `true`<br>shallow: Update the path of the current page without rerunning `getStaticProps`, `getServerSideProps` or `getInitialProps`. Defaults to `false`<br>locale: The active `locale` is automatically prepended. locale allows for providing a different locale. When `false` `href` has to include the locale as the default behavior is disabled. |

## Tips

Here are some useful ways to use it.

#### Linking with pathpida

```typescript
import { pagesPath } from "~/utils/$path";

// ~~~~ abbreviation

const { handleRouterPush, prefetchTarget } = useRouterPrefetch<HTMLElement>(
  pagesPath.posts._postId(props.url).$url()
);

// ~~~~ abbreviation
```

It is also possible to work with [pathpida](https://github.com/aspida/pathpida), a library that makes links type-safe, in this way.
And you don't need to pass `pagesPath.posts._postId(props.url)`. You don't even need to pass `$url().pathname` as a string to make pathpida even more useful!

## Author

dc7290
dhkh.cba0927@gmail.com

## License

"next-router-prefetch" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).
