import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import type { MouseEvent } from "react";

function usePrefetchRouter<T extends Element>(url: string) {
  const router = useRouter();

  const handleRouterPush = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    router.push("/about");
  };

  const prefetchTarget = useRef<T | null>(null);
  const prefetch = () => {
    router.prefetch(url);
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

export default usePrefetchRouter;
