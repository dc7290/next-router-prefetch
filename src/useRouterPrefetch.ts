import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { prepareUrlAs } from "./lib/prepareUrlAs";

import type { ReactEventHandler } from "react";
import type { UrlObject } from "url";

export declare type Url = UrlObject | string;

type TransitionOptions = {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
};

export type PrefetchRouterOptions = {
  url: Url;
  as?: string | UrlObject | undefined;
  options?: TransitionOptions | undefined;
};

export function useRouterPrefetch<T extends Element>(
  prefetchRouterOptions: PrefetchRouterOptions
) {
  const router = useRouter();

  const handleRouterPush: ReactEventHandler = (event) => {
    event.preventDefault();
    router.push(
      prefetchRouterOptions.url,
      prefetchRouterOptions.as,
      prefetchRouterOptions.options
    );
  };

  const prefetchTarget = useRef<T | null>(null);
  const prefetchLink = () => {
    if (typeof prefetchRouterOptions.url === "string") {
      return {
        url: prefetchRouterOptions.url,
      };
    } else {
      const { url, as } = prepareUrlAs(
        router,
        prefetchRouterOptions.url,
        prefetchRouterOptions.as
      );
      return {
        url,
        as,
      };
    }
  };
  const prefetch = () => {
    router.prefetch(prefetchLink().url, prefetchLink().as);
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          prefetch();
        }
      });
    });
    if (prefetchTarget.current) {
      observer.observe(prefetchTarget.current);
    }
  }, []);

  return {
    handleRouterPush,
    prefetchTarget,
  };
}
