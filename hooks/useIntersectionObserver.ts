import { useState, useEffect, useRef, RefObject } from 'react';

// Define a custom options type that extends the standard one but includes our custom property.
interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  // Use our custom type for the options parameter.
  options: UseIntersectionObserverOptions = { threshold: 0.1, triggerOnce: true }
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Stringify options to create a stable dependency for useEffect.
  const stringifiedOptions = JSON.stringify(options);

  useEffect(() => {
    // Parse the options inside the effect.
    const parsedOptions: UseIntersectionObserverOptions = JSON.parse(stringifiedOptions);
    
    // Separate our custom `triggerOnce` property from the standard IntersectionObserver options.
    const { triggerOnce = true, ...observerOptions } = parsedOptions;
    
    // Disconnect any previous observer.
    if (observerRef.current) {
        observerRef.current.disconnect();
    }
    
    // Create the new observer.
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        // If triggerOnce is true, unobserve the element after it becomes visible.
        if (triggerOnce && ref.current) {
          observerRef.current?.unobserve(ref.current);
        }
      }
    }, observerOptions); // Pass only the standard options to the constructor.

    const { current: currentObserver } = observerRef;
    if (ref.current) {
      currentObserver.observe(ref.current);
    }

    // Cleanup function to disconnect the observer.
    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  // The effect depends on the ref and the stringified options.
  }, [ref, stringifiedOptions]);

  return isIntersecting;
}
