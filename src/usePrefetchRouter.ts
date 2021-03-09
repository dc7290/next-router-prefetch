import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { UrlObject } from "url";

declare type Url = UrlObject | string;

type TransitionOptions = {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
};

type RouterOptions = {
  url: Url;
  as?: string | UrlObject | undefined;
  options?: TransitionOptions | undefined;
};

export function usePrefetchRouter<T extends Element>(
  routerOptions: RouterOptions
) {
  const router = useRouter();

  const handleRouterPush = (event: Event) => {
    event.preventDefault();
    router.push(routerOptions.url, routerOptions.as, routerOptions.options);
  };

  const prefetchTarget = useRef<T | null>(null);
  const prefetch = () => {
    router.prefetch();
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
