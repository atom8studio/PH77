const measurementId = 'G-7XS9J9V707';

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

const scriptSrc = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
  const script = document.createElement('script');
  script.async = true;
  script.src = scriptSrc;
  document.head.appendChild(script);
}

export {};
