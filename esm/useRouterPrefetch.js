import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { prepareUrlAs } from "./lib/prepareUrlAs";
export function useRouterPrefetch(url, routerPrefetchOptions) {
    if (routerPrefetchOptions === void 0) { routerPrefetchOptions = {
        observe: true,
    }; }
    var router = useRouter();
    var handleRouterPush = function (event) {
        event.preventDefault();
        router.push(url, routerPrefetchOptions.as, routerPrefetchOptions.options);
    };
    var prefetchTarget = useRef(null);
    var prefetchLink = function () {
        if (typeof url === "string") {
            return {
                prefetchUrl: url,
            };
        }
        else {
            var _a = prepareUrlAs(router, url, routerPrefetchOptions.as), prefetchUrl = _a.url, prefetchAs = _a.as;
            return {
                prefetchUrl: prefetchUrl,
                prefetchAs: prefetchAs,
            };
        }
    };
    var prefetch = function () {
        router.prefetch(prefetchLink().prefetchUrl, prefetchLink().prefetchAs);
    };
    useEffect(function () {
        if (routerPrefetchOptions.observe) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        prefetch();
                    }
                });
            });
            if (prefetchTarget.current) {
                observer.observe(prefetchTarget.current);
            }
        }
        else {
            prefetch();
        }
    }, []);
    return {
        handleRouterPush: handleRouterPush,
        prefetchTarget: prefetchTarget,
    };
}
