import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { prepareUrlAs } from "./lib/prepareUrlAs";
export function useRouterPrefetch(prefetchRouterOptions) {
    var router = useRouter();
    var handleRouterPush = function (event) {
        event.preventDefault();
        router.push(prefetchRouterOptions.url, prefetchRouterOptions.as, prefetchRouterOptions.options);
    };
    var prefetchTarget = useRef(null);
    var prefetchLink = function () {
        if (typeof prefetchRouterOptions.url === "string") {
            return {
                url: prefetchRouterOptions.url,
            };
        }
        else {
            var _a = prepareUrlAs(router, prefetchRouterOptions.url, prefetchRouterOptions.as), url = _a.url, as = _a.as;
            return {
                url: url,
                as: as,
            };
        }
    };
    var prefetch = function () {
        router.prefetch(prefetchLink().url, prefetchLink().as);
    };
    useEffect(function () {
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
    }, []);
    return {
        handleRouterPush: handleRouterPush,
        prefetchTarget: prefetchTarget,
    };
}
