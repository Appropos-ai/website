'use client';

import Script from 'next/script';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

// Utility function to track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined event trackers for common actions
export const analytics = {
  // Track button clicks
  trackButtonClick: (buttonName: string) => {
    trackEvent('click', 'Button', buttonName);
  },

  // Track form submissions
  trackFormSubmission: (formName: string, success: boolean) => {
    trackEvent(success ? 'submit_success' : 'submit_error', 'Form', formName);
  },

  // Track navigation clicks
  trackNavigation: (destination: string) => {
    trackEvent('navigate', 'Navigation', destination);
  },

  // Track section views (for scroll tracking)
  trackSectionView: (sectionName: string) => {
    trackEvent('view', 'Section', sectionName);
  },

  // Track CTA engagement
  trackCTAClick: (ctaName: string, location: string) => {
    trackEvent('cta_click', 'CTA', `${ctaName} - ${location}`);
  },

  // Track outbound links
  trackOutboundLink: (url: string) => {
    trackEvent('click', 'Outbound Link', url);
  },
};
