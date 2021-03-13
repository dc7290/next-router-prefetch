import type { NextRouter } from "next/router";
import type { Url } from "../useRouterPrefetch";
export declare function prepareUrlAs(router: NextRouter, url: Url, as?: Url): {
    url: string;
    as: string;
};
