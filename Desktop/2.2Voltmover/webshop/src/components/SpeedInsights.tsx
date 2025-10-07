"use client";

import { useEffect } from "react";

// Performance monitoring component
export default function SpeedInsights() {
  useEffect(() => {
    // Report Web Vitals
    if (typeof window !== "undefined" && "performance" in window) {
      // Core Web Vitals
      const reportWebVitals = (metric: any) => {
        console.log(metric);
        // You can send to analytics here
      };

      // Observe performance
      if ("PerformanceObserver" in window) {
        try {
          // LCP - Largest Contentful Paint
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            reportWebVitals({
              name: "LCP",
              value: lastEntry.startTime,
              rating: lastEntry.startTime < 2500 ? "good" : lastEntry.startTime < 4000 ? "needs-improvement" : "poor"
            });
          });
          lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });

          // FID - First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              reportWebVitals({
                name: "FID",
                value: entry.processingStart - entry.startTime,
                rating: entry.processingStart - entry.startTime < 100 ? "good" : entry.processingStart - entry.startTime < 300 ? "needs-improvement" : "poor"
              });
            });
          });
          fidObserver.observe({ type: "first-input", buffered: true });

          // CLS - Cumulative Layout Shift
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries() as any[]) {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            }
            reportWebVitals({
              name: "CLS",
              value: clsValue,
              rating: clsValue < 0.1 ? "good" : clsValue < 0.25 ? "needs-improvement" : "poor"
            });
          });
          clsObserver.observe({ type: "layout-shift", buffered: true });
        } catch (e) {
          console.error("Performance monitoring error:", e);
        }
      }
    }
  }, []);

  return null;
}
