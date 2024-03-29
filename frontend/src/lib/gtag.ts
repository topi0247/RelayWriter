declare global {
  interface Window {
    gtag: any;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: any) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
