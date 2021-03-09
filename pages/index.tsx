import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import type { MouseEvent } from "react";
import type { NextPage } from "next";

const IndexPage: NextPage = () => {
  const router = useRouter();
  const handleClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    router.push("/about");
  };

  const prefetch = () => {
    router.prefetch("/about");
  };

  const target = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          prefetch();
        }
      });
    });
    if (target.current) {
      observer.observe(target.current);
    }
  }, []);
  return (
    <div>
      <h1>IndexPage</h1>
      <button onClick={(event) => handleClick(event)} ref={target}>
        About
      </button>
    </div>
  );
};

export default IndexPage;
