"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareUrlAs = void 0;
var tslib_1 = require("tslib");
var router_1 = require("next/dist/next-server/lib/router/router");
var utils_1 = require("next/dist/next-server/lib/utils");
function stripOrigin(url) {
    var origin = utils_1.getLocationOrigin();
    return url.startsWith(origin) ? url.substring(origin.length) : url;
}
function prepareUrlAs(router, url, as) {
    var _a = tslib_1.__read(router_1.resolveHref(router.pathname, url, true), 2), resolvedHref = _a[0], resolvedAs = _a[1];
    var origin = utils_1.getLocationOrigin();
    var hrefHadOrigin = resolvedHref.startsWith(origin);
    var asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
    resolvedHref = stripOrigin(resolvedHref);
    resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
    var preparedUrl = hrefHadOrigin ? resolvedHref : router_1.addBasePath(resolvedHref);
    var preparedAs = as
        ? stripOrigin(router_1.resolveHref(router.pathname, as))
        : resolvedAs || resolvedHref;
    return {
        url: preparedUrl,
        as: asHadOrigin ? preparedAs : router_1.addBasePath(preparedAs),
    };
}
exports.prepareUrlAs = prepareUrlAs;
