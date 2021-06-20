import { renderHook } from "@testing-library/react-hooks";
import { useRouter } from "next/router";

import { prepareUrlAs } from "./prepareUrlAs";

jest.mock("next/router", () => require("next-router-mock"));

describe("Whether `prepateUrlAs` is handling the URL correctly.", () => {
  const { result } = renderHook(() => useRouter());

  test("supports the `string`", () => {
    const { url } = prepareUrlAs(result.current, "/foo");
    expect(url).toBe("/foo");
  });

  test("supports the singular `UrlObject`", () => {
    const { url } = prepareUrlAs(result.current, {
      pathname: "/foo/[id]",
      query: {
        id: "bar",
      },
    });
    expect(url).toBe("/foo/[id]?id=bar");
  });

  test("supports the multiple `UrlObject`", () => {
    const { url } = prepareUrlAs(result.current, {
      pathname: "/foo/[id]/[number]",
      query: {
        id: "bar",
        number: 1,
      },
    });
    expect(url).toBe("/foo/[id]/[number]?id=bar&number=1");
  });
});
