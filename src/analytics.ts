const measurementId = 'G-7XS9J9V707';
const googleAdsId = 'AW-18543484190';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

window.dataLayer = window.dataLayer || [];
window.gtag = (...args: unknown[]) => {
  window.dataLayer.push(args);
};
window.gtag('js', new Date());
window.gtag('config', measurementId);
window.gtag('config', googleAdsId);

const scriptSrc = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
  const script = document.createElement('script');
  script.async = true;
  script.src = scriptSrc;
  document.head.appendChild(script);
}

export {};
