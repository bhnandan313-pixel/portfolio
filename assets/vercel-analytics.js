let AnalyticsComponent = null;

async function initAnalytics() {
  try {
    const analyticsModule = await import('@vercel/analytics/next');
    AnalyticsComponent = analyticsModule.Analytics;
  } catch (error) {
    console.warn('Vercel Analytics could not be loaded:', error);
    return null;
  }

  if (typeof AnalyticsComponent === 'function') {
    return AnalyticsComponent();
  }

  return null;
}

export default initAnalytics;
