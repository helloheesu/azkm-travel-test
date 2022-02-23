declare global {
  interface Window {
    gtag: any;
  }
}

// log the pageview with their URL
const pageview = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
    page_path: url,
  });
};

// log specific events happening.
const event = (action: string, params: any) => {
  window.gtag('event', action, params);
};

const ga = {
  pageview,
  event,
};
export default ga;
