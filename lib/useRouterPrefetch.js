"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouterPrefetch = void 0;
var react_1 = require("react");
var router_1 = require("next/router");
var prepareUrlAs_1 = require("./lib/prepareUrlAs");
function useRouterPrefetch(url, observe, nextRouterOptions) {
    if (observe === void 0) { observe = true; }
    var router = router_1.useRouter();
    var handleRouterPush = react_1.useCallback(function (event) {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        router.push(url, nextRouterOptions === null || nextRouterOptions === void 0 ? void 0 : nextRouterOptions.as, nextRouterOptions === null || nextRouterOptions === void 0 ? void 0 : nextRouterOptions.options);
    }, []);
    var prefetchTarget = react_1.useRef(null);
    var prefetchLink = function () {
        if (typeof url === "string") {
            return {
                prefetchUrl: url,
            };
        }
        else {
            var _a = prepareUrlAs_1.prepareUrlAs(router, url, nextRouterOptions === null || nextRouterOptions === void 0 ? void 0 : nextRouterOptions.as), prefetchUrl = _a.url, prefetchAs = _a.as;
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
        if (observe) {
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
exports.useRouterPrefetch = useRouterPrefetch;
