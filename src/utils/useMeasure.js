import { useState, useCallback } from "react";

// Custom hook to measure an element's size
function useMeasure() {
  const [rect, setRect] = useState({ width: 0, height: 0 });
  const ref = useCallback((node) => {
    if (node !== null) {
      const resizeObserver = new ResizeObserver((entries) => {
        if (entries[0]) {
          const { width, height } = entries[0].contentRect;
          setRect({ width, height });
        }
      });

      resizeObserver.observe(node);

      // Cleanup on unmount
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  return [ref, rect];
}

export default useMeasure;
