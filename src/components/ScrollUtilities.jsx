import { useEffect, useState } from 'react';

export default function ScrollUtilities() {
  const [scrollState, setScrollState] = useState({ progress: 0, showBackToTop: false });

  useEffect(() => {
    let animationFrame = 0;

    function updateScrollState() {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          scrollableHeight > 0
            ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100))
            : 0;

        setScrollState({ progress, showBackToTop: window.scrollY > 450 });
      });
    }

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  function returnToTop() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ width: `${scrollState.progress}%` }} />
      </div>
      {scrollState.showBackToTop && (
        <button
          className="back-to-top"
          type="button"
          aria-label="Retour en haut"
          onClick={returnToTop}
        >
          <span aria-hidden="true">↑</span>
        </button>
      )}
    </>
  );
}
