/// <reference types="node" />
import type { ReactEventHandler } from "react";
import type { UrlObject } from "url";
export declare type Url = UrlObject | string;
declare type TransitionOptions = {
    shallow?: boolean;
    locale?: string | false;
    scroll?: boolean;
};
declare type RouterPrefetchOptions = {
    as?: string | UrlObject;
    options?: TransitionOptions;
    observe?: boolean;
};
export declare function useRouterPrefetch<T extends Element>(url: Url, routerPrefetchOptions?: RouterPrefetchOptions): {
    handleRouterPush: ReactEventHandler<Element>;
    prefetchTarget: import("react").MutableRefObject<T | null>;
};
export {};
