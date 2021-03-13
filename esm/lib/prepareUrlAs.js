import { __read } from "tslib";
import { addBasePath, resolveHref, } from "next/dist/next-server/lib/router/router";
import { getLocationOrigin } from "next/dist/next-server/lib/utils";
function stripOrigin(url) {
    var origin = getLocationOrigin();
    return url.startsWith(origin) ? url.substring(origin.length) : url;
}
export function prepareUrlAs(router, url, as) {
    var _a = __read(resolveHref(router.pathname, url, true), 2), resolvedHref = _a[0], resolvedAs = _a[1];
    var origin = getLocationOrigin();
    var hrefHadOrigin = resolvedHref.startsWith(origin);
    var asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
    resolvedHref = stripOrigin(resolvedHref);
    resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
    var preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
    var preparedAs = as
        ? stripOrigin(resolveHref(router.pathname, as))
        : resolvedAs || resolvedHref;
    return {
        url: preparedUrl,
        as: asHadOrigin ? preparedAs : addBasePath(preparedAs),
    };
}
