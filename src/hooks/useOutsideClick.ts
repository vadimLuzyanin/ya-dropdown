import { useEffect } from "react";

export function useOutsideClick(
  elements: (HTMLElement | null)[],
  callback: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const targetElement = event.target as Node;
      const isClickInside = elements.some((el) => el?.contains(targetElement));
      if (!isClickInside) {
        callback();
      }
    };
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [elements]);
}
