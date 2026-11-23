import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ value, duration = 1.8 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Parse value string (e.g., "15+", "4.9★", "18,000+", "100%")
    const stringVal = String(value);
    const numericMatch = stringVal.match(/[\d,.]+/);
    if (!numericMatch) {
      setDisplayValue(stringVal);
      return;
    }

    const rawNumStr = numericMatch[0].replace(/,/g, '');
    const isFloat = rawNumStr.includes('.');
    const targetNum = parseFloat(rawNumStr);
    const prefix = stringVal.slice(0, numericMatch.index);
    const suffix = stringVal.slice(numericMatch.index + numericMatch[0].length);

    let startTimestamp = null;
    let animationFrameId = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = targetNum * easedProgress;

      let formatted;
      if (isFloat) {
        formatted = currentVal.toFixed(1);
      } else {
        formatted = Math.floor(currentVal).toLocaleString();
      }

      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(stringVal);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}
