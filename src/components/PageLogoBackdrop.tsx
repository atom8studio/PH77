import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';

const MAX_OPACITY = 0.2;
const FADE_DISTANCE = 360;
const OPACITY_CLASSES = ['opacity-0', 'opacity-5', 'opacity-10', 'opacity-15', 'opacity-20'] as const;

export default function PageLogoBackdrop() {
  const [opacityLevel, setOpacityLevel] = useState(4);

  useEffect(() => {
    const updateOpacity = () => {
      const nextOpacity = Math.max(0, MAX_OPACITY * (1 - window.scrollY / FADE_DISTANCE));
      setOpacityLevel(Math.round(nextOpacity / 0.05));
    };

    updateOpacity();
    window.addEventListener('scroll', updateOpacity, { passive: true });
    window.addEventListener('resize', updateOpacity);

    return () => {
      window.removeEventListener('scroll', updateOpacity);
      window.removeEventListener('resize', updateOpacity);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-x-0 top-0 -z-10 flex justify-center pt-24 sm:pt-28 lg:pt-32 transition-opacity duration-150 ${OPACITY_CLASSES[opacityLevel]}`}
    >
      <img
        src={logo}
        alt=""
        className="h-[240px] w-auto max-w-[90vw] select-none object-contain sm:h-[320px] lg:h-[420px]"
        draggable="false"
      />
    </div>
  );
}
