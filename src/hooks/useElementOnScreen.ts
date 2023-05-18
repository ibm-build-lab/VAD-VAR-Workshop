import { MutableRefObject, useEffect, useRef, useState } from 'react';

export interface IntersectionObserverOptions {
  root?: any;
  rootMargin?: string;
  threshold?: number | number[];
}

const useElementOnScreen = (options: IntersectionObserverOptions | void, defaultValue = false) => {
  const containerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(defaultValue);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const { isIntersecting } = entries[entries.length - 1];
    setVisible(isIntersecting);
  };

  useEffect(() => {
    const container = containerRef.current;

    const observer = new IntersectionObserver(callbackFunction, {
      threshold: 0,
      ...options
***REMOVED*** as IntersectionObserverOptions);

    if (container) observer.observe(container);

    return () => {
      observer.disconnect();
***REMOVED***;
  }, [options, containerRef]);

  return [containerRef, visible] as [MutableRefObject<HTMLElement>, boolean];
};

export default useElementOnScreen;
