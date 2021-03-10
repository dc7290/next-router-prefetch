import {
  addBasePath,
  resolveHref,
} from "next/dist/next-server/lib/router/router";
import { getLocationOrigin } from "next/dist/next-server/lib/utils";

import type { NextRouter } from "next/router";
import type { Url } from "../usePrefetchRouter";

function stripOrigin(url: string) {
  const origin = getLocationOrigin();

  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

export function prepareUrlAs(router: NextRouter, url: Url, as?: Url) {
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);

  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;

  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as
    ? stripOrigin(resolveHref(router.pathname, as))
    : resolvedAs || resolvedHref;

  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs),
  };
}
