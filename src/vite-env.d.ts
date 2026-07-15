/// <reference types="vite/client" />

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

declare module '*.png' {
  const src: string;
  export default src;
}

export {};
