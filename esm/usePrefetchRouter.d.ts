/// <reference types="node" />
import type { ReactEventHandler } from "react";
import type { UrlObject } from "url";
export declare type Url = UrlObject | string;
declare type TransitionOptions = {
    shallow?: boolean;
    locale?: string | false;
    scroll?: boolean;
};
export declare type PrefetchRouterOptions = {
    url: Url;
    as?: string | UrlObject | undefined;
    options?: TransitionOptions | undefined;
};
export declare function useRouterPrefetch<T extends Element>(prefetchRouterOptions: PrefetchRouterOptions): {
    handleRouterPush: ReactEventHandler<Element>;
    prefetchTarget: import("react").MutableRefObject<T | null>;
};
export {};
