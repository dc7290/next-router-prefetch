import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { prepareUrlAs } from "./lib/prepareUrlAs";

import type { MutableRefObject, SyntheticEvent } from "react";
import type { UrlObject } from "url";

export type Url = UrlObject | string;

type TransitionOptions = {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
};

type NextRouterPrefetchOptions = {
  as?: string | UrlObject;
  options?: TransitionOptions;
  intersectionObserverOptions?: IntersectionObserverInit;
};

export function useRouterPrefetch<T extends HTMLElement>(
  url: Url,
  observe?: true,
  nextRouterPrefetchOptions?: NextRouterPrefetchOptions
): {
  handleRouterPush: (event?: SyntheticEvent<T, Event>) => void;
  prefetchTarget: MutableRefObject<T | null>;
};

export function useRouterPrefetch(
  url: Url,
  observe?: false,
  nextRouterPrefetchOptions?: NextRouterPrefetchOptions
): {
  handleRouterPush: (event?: SyntheticEvent<Element, Event>) => void;
};

export function useRouterPrefetch<T extends Element>(
  url: Url,
  observe: boolean = true,
  nextRouterPrefetchOptions?: NextRouterPrefetchOptions
) {
  const router = useRouter();

  const handleRouterPush = useCallback(
    (event?: SyntheticEvent<Element, Event>) => {
      event?.preventDefault();
      router.push(
        url,
        nextRouterPrefetchOptions?.as,
        nextRouterPrefetchOptions?.options
      );
    },
    []
  );

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
        nextRouterPrefetchOptions?.as
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
    if (observe) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            prefetch();
          }
        });
      }, nextRouterPrefetchOptions?.intersectionObserverOptions);
      if (prefetchTarget.current) {
        observer.observe(prefetchTarget.current);
      }
    } else {
      prefetch();
    }
  }, []);

  if (observe) {
    return {
      handleRouterPush,
      prefetchTarget,
    };
  } else {
    return {
      handleRouterPush,
    };
  }
}
