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

type NextRouterOptions = {
  as?: string | UrlObject;
  options?: TransitionOptions;
};

export function useRouterPrefetch<T extends Element>(
  url: Url,
  observe?: true,
  nextRouterOptions?: NextRouterOptions
): {
  handleRouterPush: (
    event?: SyntheticEvent<Element, Event> | undefined
  ) => void;
  prefetchTarget: MutableRefObject<T | null>;
};

export function useRouterPrefetch(
  url: Url,
  observe?: false,
  nextRouterOptions?: NextRouterOptions
): {
  handleRouterPush: (
    event?: SyntheticEvent<Element, Event> | undefined
  ) => void;
};

export function useRouterPrefetch<T extends Element>(
  url: Url,
  observe: boolean = true,
  nextRouterOptions?: NextRouterOptions
) {
  const router = useRouter();

  const handleRouterPush = useCallback(
    (event?: SyntheticEvent<Element, Event>) => {
      event?.preventDefault();
      router.push(url, nextRouterOptions?.as, nextRouterOptions?.options);
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
        nextRouterOptions?.as
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
      });
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
