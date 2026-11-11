import { useEffect, useRef, useState, type RefObject } from 'react';

export interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | Document | null;
  rootMargin?: string;
  triggerOnce?: boolean;
  freezeOnceVisible?: boolean;
  initialIsIntersecting?: boolean;
}

export type IntersectionObserverResult<T extends HTMLElement = HTMLElement> = [
  RefObject<T | null>,
  boolean,
  IntersectionObserverEntry | null
] & {
  ref: RefObject<T | null>;
  isIntersecting: boolean;
  isVisible: boolean;
  entry: IntersectionObserverEntry | null;
};

/**
 * Custom React hook that monitors when a DOM element enters or exits the viewport
 * using the browser's native IntersectionObserver API.
 *
 * Supports both array destructuring:
 *   const [ref, isVisible] = useIntersectionObserver();
 * and object destructuring:
 *   const { ref, isVisible, isIntersecting } = useIntersectionObserver();
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: UseIntersectionObserverOptions = {}
): IntersectionObserverResult<T> {
  const {
    threshold = 0.15,
    root = null,
    rootMargin = '0px 0px -40px 0px',
    triggerOnce = true,
    freezeOnceVisible = true,
    initialIsIntersecting = false,
  } = options;

  const ref = useRef<T | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(initialIsIntersecting);

  const shouldFreeze = triggerOnce || freezeOnceVisible;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If already intersected and configured to freeze/trigger once, avoid re-observing
    if (shouldFreeze && isIntersecting) return;

    // Fallback for environments lacking IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([observerEntry]) => {
        setEntry(observerEntry);
        const visible = observerEntry.isIntersecting;
        if (visible) {
          setIsIntersecting(true);
          if (shouldFreeze) {
            observer.unobserve(node);
          }
        } else if (!shouldFreeze) {
          setIsIntersecting(false);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, shouldFreeze, isIntersecting]);

  const result = [ref, isIntersecting, entry] as IntersectionObserverResult<T>;
  result.ref = ref;
  result.isIntersecting = isIntersecting;
  result.isVisible = isIntersecting;
  result.entry = entry;

  return result;
}

export default useIntersectionObserver;
