import Script from 'next/script';

declare global {
  interface Window {
    gtag: any;
  }
}

export const logPageview = (path: string) => {
  window.gtag &&
    window.gtag('event', 'page_view', {
      page_path: path,
      send_to: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    });
};

export const logEvent = (action: string, params: {}) => {
  window.gtag && window.gtag('event', action, params);
};

const script = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
  send_page_view: false
});
`;

const GA = () => {
  return (
    <>
      <Script
        id="ga-library"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script id="ga-setting">{script}</Script>
    </>
  );
};

export default GA;
