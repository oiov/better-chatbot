'use client';

import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';

/**
 * Google Analytics
 *
 * https://analytics.google.com
 * https://mksaas.com/docs/analytics#google
 * https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-analytics
 */
export default function GoogleAnalytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  const analyticsId = "G-22RPQ62H4E";
  if (!analyticsId) {
    return null;
  }

  return <NextGoogleAnalytics gaId={analyticsId} />;
}
