import { inject } from '@vercel/analytics';

function initAnalytics() {
  inject({
    mode: 'auto',
    debug: true
  });
}

export default initAnalytics;
