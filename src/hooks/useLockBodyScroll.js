import { useLayoutEffect } from 'react';

/**
 * Disables scroll on <body> while component is mounted.
 */
export function useLockBodyScroll() {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
      document.documentElement.style.overflow = 'visible';
    }
  }, []);
}