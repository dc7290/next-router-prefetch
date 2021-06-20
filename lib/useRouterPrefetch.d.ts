/// <reference types="node" />
import type { MutableRefObject, SyntheticEvent } from "react";
import type { UrlObject } from "url";
export declare type Url = UrlObject | string;
declare type TransitionOptions = {
    shallow?: boolean;
    locale?: string | false;
    scroll?: boolean;
};
declare type NextRouterPrefetchOptions = {
    as?: string | UrlObject;
    options?: TransitionOptions;
    intersectionObserverOptions?: IntersectionObserverInit;
};
export declare function useRouterPrefetch<T extends HTMLElement>(url: Url, observe?: true, nextRouterPrefetchOptions?: NextRouterPrefetchOptions): {
    handleRouterPush: (event?: SyntheticEvent<T, Event>) => void;
    prefetchTarget: MutableRefObject<T | null>;
};
export declare function useRouterPrefetch(url: Url, observe?: false, nextRouterPrefetchOptions?: NextRouterPrefetchOptions): {
    handleRouterPush: (event?: SyntheticEvent<Element, Event>) => void;
};
export {};
