import { useEffect, useState } from 'react';

interface IntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
}

const useCurrentHeading = (
  querySelector: string,
  observerOptions?: IntersectionObserverOptions
): string => {
  const [currHeading, setCurrHeading] = useState<string>('');

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length > 0) setCurrHeading(visibleEntries[0].target.id);
***REMOVED***;

    const headings = document.querySelectorAll(querySelector);
    const observer = new IntersectionObserver(callback, {
      ...observerOptions
***REMOVED***);

    headings?.forEach((element) => observer.observe(element));

    return () => headings?.forEach((element) => observer.unobserve(element));
  }, [observerOptions, querySelector]);

  return currHeading;
};

export default useCurrentHeading;
