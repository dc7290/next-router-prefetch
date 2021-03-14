"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouterPrefetch = void 0;
var react_1 = require("react");
var router_1 = require("next/router");
var prepareUrlAs_1 = require("./lib/prepareUrlAs");
function useRouterPrefetch(url, routerPrefetchOptions) {
    if (routerPrefetchOptions === void 0) { routerPrefetchOptions = {
        observe: true,
    }; }
    var router = router_1.useRouter();
    var handleRouterPush = function (event) {
        event.preventDefault();
        router.push(url, routerPrefetchOptions.as, routerPrefetchOptions.options);
    };
    var prefetchTarget = react_1.useRef(null);
    var prefetchLink = function () {
        if (typeof url === "string") {
            return {
                prefetchUrl: url,
            };
        }
        else {
            var _a = prepareUrlAs_1.prepareUrlAs(router, url, routerPrefetchOptions.as), prefetchUrl = _a.url, prefetchAs = _a.as;
            return {
                prefetchUrl: prefetchUrl,
                prefetchAs: prefetchAs,
            };
        }
    };
    var prefetch = function () {
        router.prefetch(prefetchLink().prefetchUrl, prefetchLink().prefetchAs);
    };
    react_1.useEffect(function () {
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
exports.useRouterPrefetch = useRouterPrefetch;
