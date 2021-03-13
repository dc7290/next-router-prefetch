# next-router-prefetch

<p>`next-router-prefetch`は useRouter をラップしたカスタムフックです。</p>
<p>Link コンポーネントを使わないリンクにも prefetch を適用します。</p>

## Features

通常、

```typescript
const router = useRouter();
router.push("/about");
```

<p>このようにページ遷移しようとすると、遷移するまでにロードの時間がかかります。</p>
<p>これが`next/link`(Link)コンポーネントでページ遷移する場合、リンクがビューポートに入った時点で自動でリンク先を prefetch するようになっています。（`prefetch={false}`にしていない限り）</p>
<p>しかし、`router.push`を使った場合は自動 prefetch がされないため、すぐにページ遷移されないのです。</p>

これを解消するのが`next-router-prefetch`です！

# Installation

```bash
yarn add @dc7290/next-router-prefetch # npm i @dc7290/next-router-prefetch
```

# Usage

# Note

# Author

dc7290
dhkh.cba0927@gmail.com

# License

"next-router-prefetch" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).
