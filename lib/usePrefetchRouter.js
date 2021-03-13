"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrefetchRouter = void 0;
var react_1 = require("react");
var router_1 = require("next/router");
var prepareUrlAs_1 = require("./lib/prepareUrlAs");
function usePrefetchRouter(prefetchRouterOptions) {
    var router = router_1.useRouter();
    var handleRouterPush = function (event) {
        event.preventDefault();
        router.push(prefetchRouterOptions.url, prefetchRouterOptions.as, prefetchRouterOptions.options);
    };
    var prefetchTarget = react_1.useRef(null);
    var prefetchLink = function () {
        if (typeof prefetchRouterOptions.url === "string") {
            return {
                url: prefetchRouterOptions.url,
            };
        }
        else {
            var _a = prepareUrlAs_1.prepareUrlAs(router, prefetchRouterOptions.url, prefetchRouterOptions.as), url = _a.url, as = _a.as;
            return {
                url: url,
                as: as,
            };
        }
    };
    var prefetch = function () {
        router.prefetch(prefetchLink().url, prefetchLink().as);
    };
    react_1.useEffect(function () {
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
exports.usePrefetchRouter = usePrefetchRouter;
