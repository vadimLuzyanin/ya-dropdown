import { useCallback, useEffect, useMemo, useState } from "react";

export function useObserver(observerCallback: IntersectionObserverCallback) {
  const [element, setElement] = useState<HTMLElement | null>(null);

  const elementRef = useCallback((element: HTMLElement | null) => {
    setElement(element);
  }, []);

  const observer = useMemo(
    () => new IntersectionObserver(observerCallback, { threshold: [0, 1] }),
    [observerCallback]
  );

  useEffect(() => {
    return () => {
      observer.disconnect();
    };
  }, [observer]);

  useEffect(() => {
    if (element) {
      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }
  }, [element]);

  return { element, elementRef };
}
