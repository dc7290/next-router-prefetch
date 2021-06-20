import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { prepareUrlAs } from "./lib/prepareUrlAs";
export function useRouterPrefetch(url, observe, nextRouterPrefetchOptions) {
    if (observe === void 0) { observe = true; }
    var router = useRouter();
    var handleRouterPush = useCallback(function (event) {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        router.push(url, nextRouterPrefetchOptions === null || nextRouterPrefetchOptions === void 0 ? void 0 : nextRouterPrefetchOptions.as, nextRouterPrefetchOptions === null || nextRouterPrefetchOptions === void 0 ? void 0 : nextRouterPrefetchOptions.options);
    }, []);
    var prefetchTarget = useRef(null);
    var prefetchLink = function () {
        if (typeof url === "string") {
            return {
                prefetchUrl: url,
            };
        }
        else {
            var _a = prepareUrlAs(router, url, nextRouterPrefetchOptions === null || nextRouterPrefetchOptions === void 0 ? void 0 : nextRouterPrefetchOptions.as), prefetchUrl = _a.url, prefetchAs = _a.as;
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
        if (observe) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        prefetch();
                    }
                });
            }, nextRouterPrefetchOptions === null || nextRouterPrefetchOptions === void 0 ? void 0 : nextRouterPrefetchOptions.intersectionObserverOptions);
            if (prefetchTarget.current) {
                observer.observe(prefetchTarget.current);
            }
        }
        else {
            prefetch();
        }
    }, []);
    if (observe) {
        return {
            handleRouterPush: handleRouterPush,
            prefetchTarget: prefetchTarget,
        };
    }
    else {
        return {
            handleRouterPush: handleRouterPush,
        };
    }
}
