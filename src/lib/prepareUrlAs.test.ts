import { renderHook } from "@testing-library/react-hooks";
import { useRouter } from "next/router";

import { prepareUrlAs } from "./prepareUrlAs";

jest.mock("next/router", () => require("next-router-mock"));

describe("Whether `prepateUrlAs` is handling the URL correctly.", () => {
  const { result } = renderHook(() => useRouter());

  test("supports the `string`", () => {
    const { url, as } = prepareUrlAs(result.current, "/foo");
    expect(url).toBe("/foo");
    expect(as).toBe("/foo");
  });

  test("supports the singular `UrlObject`", () => {
    const { url, as } = prepareUrlAs(result.current, {
      pathname: "/foo/[id]",
      query: {
        id: "bar",
      },
    });
    expect(url).toBe("/foo/[id]?id=bar");
    expect(as).toBe("/foo/bar");
  });

  test("supports the multiple `UrlObject`", () => {
    const { url, as } = prepareUrlAs(result.current, {
      pathname: "/foo/[id]/[number]",
      query: {
        id: "bar",
        number: 1,
      },
    });
    expect(url).toBe("/foo/[id]/[number]?id=bar&number=1");
    expect(as).toBe("/foo/bar/1");
  });
});
