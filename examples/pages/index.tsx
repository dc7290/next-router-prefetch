import type { NextPage } from 'next';
import { usePrefetchRouter } from 'next-router-prefetch';

import type { PrefetchRouterOptions } from 'next-router-prefetch';

const options: PrefetchRouterOptions = {
  url: '/about',
};

const IndexPage: NextPage = () => {
  const {
    handleRouterPush,
    prefetchTarget,
  } = usePrefetchRouter<HTMLButtonElement>(options);
  return (
    <div>
      <h1>IndexPage</h1>
      <button onClick={(event) => handleRouterPush(event)} ref={prefetchTarget}>
        About
      </button>
    </div>
  );
};

export default IndexPage;
