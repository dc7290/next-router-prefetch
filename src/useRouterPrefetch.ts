import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { prepareUrlAs } from "./lib/prepareUrlAs";

import type { ReactEventHandler } from "react";
import type { UrlObject } from "url";

export type Url = UrlObject | string;

type TransitionOptions = {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
};

type RouterPrefetchOptions = {
  as?: string | UrlObject;
  options?: TransitionOptions;
  observe?: boolean;
};

export function useRouterPrefetch<T extends Element>(
  url: Url,
  routerPrefetchOptions: RouterPrefetchOptions = {
    observe: true,
  }
) {
  const router = useRouter();

  const handleRouterPush: ReactEventHandler = (event) => {
    event.preventDefault();
    router.push(url, routerPrefetchOptions.as, routerPrefetchOptions.options);
  };

  const prefetchTarget = useRef<T | null>(null);
  const prefetchLink = () => {
    if (typeof url === "string") {
      return {
        prefetchUrl: url,
      };
    } else {
      const { url: prefetchUrl, as: prefetchAs } = prepareUrlAs(
        router,
        url,
        routerPrefetchOptions.as
      );
      return {
        prefetchUrl,
        prefetchAs,
      };
    }
  };
  const prefetch = () => {
    router.prefetch(prefetchLink().prefetchUrl, prefetchLink().prefetchAs);
  };
  useEffect(() => {
    if (routerPrefetchOptions.observe) {
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
    } else {
      prefetch();
    }
  }, []);

  return {
    handleRouterPush,
    prefetchTarget,
  };
}
