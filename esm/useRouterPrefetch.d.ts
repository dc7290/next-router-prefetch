/// <reference types="node" />
import type { MutableRefObject, SyntheticEvent } from "react";
import type { UrlObject } from "url";
export declare type Url = UrlObject | string;
declare type TransitionOptions = {
    shallow?: boolean;
    locale?: string | false;
    scroll?: boolean;
};
declare type NextRouterOptions = {
    as?: string | UrlObject;
    options?: TransitionOptions;
};
export declare function useRouterPrefetch<T extends Element>(url: Url, observe?: true, nextRouterOptions?: NextRouterOptions): {
    handleRouterPush: (event?: SyntheticEvent<Element, Event> | undefined) => void;
    prefetchTarget: MutableRefObject<T | null>;
};
export declare function useRouterPrefetch(url: Url, observe?: false, nextRouterOptions?: NextRouterOptions): {
    handleRouterPush: (event?: SyntheticEvent<Element, Event> | undefined) => void;
};
export {};
