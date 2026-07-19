import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useMotionValue, Variants } from 'motion/react';
import { ChevronLeft, ChevronRight, Search, MousePointer2 } from 'lucide-react';

interface EBookGalleryProps {
  images: string[];
  currentIndex: number;
  onPageChange: (index: number) => void;
  maxScale?: number;
}

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
  }),
  center: { 
    x: 0, 
    opacity: 1, 
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 500, damping: 40, mass: 0.5 },
      opacity: { duration: 0.15 },
      scale: { duration: 0.2, ease: "easeOut" }
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring", stiffness: 500, damping: 40, mass: 0.5 },
      opacity: { duration: 0.1 },
      scale: { duration: 0.15 }
    }
  }),
};

const isViewerControl = (target: EventTarget | null) =>
  target instanceof Element && Boolean(target.closest('button, input, [data-ebook-control]'));

export const EBookGallery = ({ images, currentIndex, onPageChange, maxScale = 100 }: EBookGalleryProps) => {
  const [[page, direction], setPage] = useState([currentIndex, 0]);
  const [zoom, setZoom] = useState(1);
  const [showHint, setShowHint] = useState(true);
  const [showSwipeTutorial, setShowSwipeTutorial] = useState(true);
  const [controlsExpanded, setControlsExpanded] = useState(false);
  const tutorialControls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);
  
  // Throttle wheel pagination
  const lastWheelTime = useRef(0);
  const wheelCooldown = 150; // ms

  if (currentIndex !== page) {
    setPage([currentIndex, currentIndex > page ? 1 : -1]);
  }

  useEffect(() => {
    const timer = setTimeout(() => setShowSwipeTutorial(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showSwipeTutorial && currentIndex === 0) {
      tutorialControls.start({
        x: [0, -40, 40, 0],
        transition: { repeat: 2, duration: 1.5, ease: "easeInOut" }
      });
    }
  }, [showSwipeTutorial, currentIndex, tutorialControls]);

  const goToPage = useCallback((targetIndex: number) => {
    const next = Math.min(Math.max(targetIndex, 0), images.length - 1);
    if (next === currentIndex) return;
    if (zoom > 1) setZoom(1);
    onPageChange(next);
    setShowSwipeTutorial(false);
    setShowHint(false);
  }, [currentIndex, images.length, onPageChange, zoom]);

  const paginate = useCallback((newDirection: number) => {
    goToPage(currentIndex + newDirection);
  }, [currentIndex, goToPage]);

  const updatePageFromProgressPointer = useCallback((event: React.PointerEvent<HTMLInputElement>) => {
    if (images.length <= 1) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((event.clientX - bounds.left) / bounds.width, 0), 1);
    goToPage(Math.round(ratio * (images.length - 1)));
  }, [goToPage, images.length]);

  const handleProgressPointerDown = useCallback((event: React.PointerEvent<HTMLInputElement>) => {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePageFromProgressPointer(event);
  }, [updatePageFromProgressPointer]);

  const handleProgressPointerMove = useCallback((event: React.PointerEvent<HTMLInputElement>) => {
    if ((event.buttons & 1) === 0) return;
    updatePageFromProgressPointer(event);
  }, [updatePageFromProgressPointer]);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    if (e.ctrlKey) {
      // Zoom logic
      const delta = e.deltaY > 0 ? -0.2 : 0.2;
      setZoom(prev => Math.min(Math.max(1, prev + delta), 4));
      setShowHint(false);
    } else {
      // Pagination logic
      const now = Date.now();
      if (now - lastWheelTime.current > wheelCooldown && Math.abs(e.deltaY) > 10) {
        if (e.deltaY > 0) {
          paginate(1);
        } else {
          paginate(-1);
        }
        lastWheelTime.current = now;
      }
    }
  }, [paginate]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (container) container.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel]);

  if (!images || images.length === 0) return null;

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;
  const pageProgress = images.length > 1 ? (currentIndex / (images.length - 1)) * 100 : 100;

  const handleSurfacePointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (isViewerControl(event.target)) {
      pointerStartRef.current = null;
      return;
    }
    pointerStartRef.current = { x: event.clientX, y: event.clientY };
    containerRef.current?.focus({ preventScroll: true });
  }, []);

  const handleSurfacePointerUp = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const start = pointerStartRef.current;
    pointerStartRef.current = null;
    if (!start || isViewerControl(event.target)) return;

    const distance = Math.hypot(event.clientX - start.x, event.clientY - start.y);
    if (distance > 8) return;
    setControlsExpanded(previous => !previous);
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setControlsExpanded(false);
      return;
    }
    if (event.target instanceof HTMLInputElement) return;
    if (event.key === 'ArrowLeft' && hasPrev) {
      event.preventDefault();
      paginate(-1);
    } else if (event.key === 'ArrowRight' && hasNext) {
      event.preventDefault();
      paginate(1);
    }
  }, [hasNext, hasPrev, paginate]);

  const getDragConstraints = () => {
    if (zoom <= 1) return { left: 0, right: 0, top: 0, bottom: 0 };
    const overflowX = Math.max(0, (zoom * 800 - 800) / 2);
    const overflowY = Math.max(0, (zoom * 1000 - 1000) / 2);
    return { left: -overflowX, right: overflowX, top: -overflowY, bottom: overflowY };
  };

  return (
    <div
      ref={containerRef}
      className="ebook-viewer-shell w-full h-full relative select-none bg-white touch-none flex flex-col overflow-hidden"
      role="region"
      aria-label="기획서 뷰어"
      aria-keyshortcuts="ArrowLeft ArrowRight Escape"
      tabIndex={0}
      onPointerDown={handleSurfacePointerDown}
      onPointerUp={handleSurfacePointerUp}
      onPointerCancel={() => { pointerStartRef.current = null; }}
      onPointerLeave={() => { pointerStartRef.current = null; }}
      onKeyDown={handleKeyDown}
    >
      <div className="ebook-viewer-hud" data-ebook-control>
        <AnimatePresence initial={false} mode="wait">
          {controlsExpanded ? (
            <motion.div
              key="expanded-page-controls"
              className="ebook-viewer-toolbar"
              role="toolbar"
              aria-label="페이지 탐색"
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.98 }}
              transition={{ duration: 0.16 }}
            >
              <div className="ebook-viewer-toolbar-row">
                <button
                  type="button"
                  className="ebook-viewer-toolbar-button"
                  onClick={() => paginate(-1)}
                  disabled={!hasPrev}
                  aria-label="이전 페이지"
                  title="이전 페이지"
                >
                  <ChevronLeft aria-hidden="true" />
                </button>

                <button
                  type="button"
                  className="ebook-viewer-page-readout"
                  onClick={() => setControlsExpanded(false)}
                  aria-label={`현재 ${currentIndex + 1}페이지, 전체 ${images.length}페이지. 페이지 탐색 닫기`}
                  title="페이지 탐색 닫기"
                >
                  <strong>{currentIndex + 1}</strong>
                  <span>/</span>
                  <span>{images.length}</span>
                </button>

                <button
                  type="button"
                  className="ebook-viewer-toolbar-button"
                  onClick={() => paginate(1)}
                  disabled={!hasNext}
                  aria-label="다음 페이지"
                  title="다음 페이지"
                >
                  <ChevronRight aria-hidden="true" />
                </button>
              </div>

              <input
                className="ebook-viewer-progress"
                type="range"
                min={1}
                max={images.length}
                step={1}
                value={currentIndex + 1}
                disabled={images.length <= 1}
                onInput={event => goToPage(Number(event.currentTarget.value) - 1)}
                onPointerDown={handleProgressPointerDown}
                onPointerMove={handleProgressPointerMove}
                aria-label={`페이지 이동, 현재 ${currentIndex + 1}페이지`}
                style={{ '--ebook-progress': `${pageProgress}%` } as React.CSSProperties}
              />
            </motion.div>
          ) : (
            <motion.button
              key="collapsed-page-counter"
              type="button"
              className="ebook-viewer-page-counter"
              onClick={() => setControlsExpanded(true)}
              aria-label={`현재 ${currentIndex + 1}페이지, 전체 ${images.length}페이지. 페이지 탐색 열기`}
              title="페이지 탐색 열기"
              initial={{ opacity: 0, y: -4, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.96 }}
              transition={{ duration: 0.14 }}
            >
              <strong>{currentIndex + 1}</strong>
              <span>/</span>
              <span>{images.length}</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Zoom Indicator */}
      {zoom > 1 && (
        <div className="absolute top-6 right-6 z-50 bg-black/80 px-4 py-2 rounded-xl text-white text-xs font-black flex items-center gap-3 border border-white/10 shadow-2xl backdrop-blur-md">
          <Search className="w-4 h-4 text-[#0047BB]" />
          <span className="tracking-widest">{Math.round(zoom * 100)}%</span>
          <div className="w-px h-3 bg-white/20 mx-1" />
          <button onClick={() => setZoom(1)} className="hover:text-[#0047BB] transition-colors uppercase text-[10px] tracking-tighter">Reset</button>
        </div>
      )}

      {/* Hints & Tutorials */}
      <AnimatePresence>
        {showHint && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 px-6 py-3 bg-[#1A1A1A]/90 backdrop-blur-xl rounded-full text-white text-[10px] font-black flex items-center gap-4 border border-white/10 shadow-2xl pointer-events-none tracking-widest uppercase"
          >
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-white/10 rounded text-[9px] border border-white/10">CTRL</kbd>
              <span>+ WHEEL TO ZOOM</span>
            </div>
            <div className="w-px h-3 bg-white/20" />
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-white/10 rounded text-[9px] border border-white/10">WHEEL</kbd>
              <span>TO SLIDE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSwipeTutorial && currentIndex === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center bg-black/5"
          >
            <motion.div animate={{ x: [-100, 100, -100] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-2xl border border-white/30 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                <MousePointer2 className="w-10 h-10 text-white rotate-[-20deg] drop-shadow-lg" />
              </div>
              <span className="text-white font-black text-xs tracking-[0.4em] uppercase drop-shadow-2xl bg-[#0047BB]/80 px-6 py-2 rounded-full border border-white/20">Swipe to Navigate</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Navigation Arrows */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-8 z-30 pointer-events-none">
          <button onClick={() => paginate(-1)} disabled={!hasPrev}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl border transition-all duration-500 pointer-events-auto ${hasPrev ? 'bg-white/95 backdrop-blur-xl text-[#1A1A1A] border-black/5 hover:scale-110 active:scale-95 cursor-pointer' : 'opacity-0 pointer-events-none'}`}
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button onClick={() => paginate(1)} disabled={!hasNext}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 pointer-events-auto ${hasNext ? 'bg-[#0047BB] text-white border border-[#0047BB]/20 hover:scale-110 active:scale-95 cursor-pointer shadow-[#0047BB]/30' : 'opacity-0 pointer-events-none'}`}
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        <div className="h-full w-full flex items-center justify-center overflow-hidden relative">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="h-full w-full flex items-center justify-center absolute inset-0"
            >
              <motion.img
                animate={{ 
                  scale: zoom,
                  x: zoom <= 1.3 ? 0 : undefined,
                  y: zoom <= 1.3 ? 0 : undefined
                }}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  y: { type: "spring", stiffness: 300, damping: 30 }
                }}
                drag={zoom > 1 ? true : "x"}
                dragConstraints={getDragConstraints()}
                dragElastic={zoom > 1 ? 0.1 : 0.15}
                onDragEnd={(_, { offset, velocity }) => {
                  if (zoom <= 1.3) {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold && hasNext) paginate(1);
                    else if (swipe > swipeConfidenceThreshold && hasPrev) paginate(-1);
                  }
                  setShowHint(false);
                }}
                src={images[currentIndex]}
                alt={`기획서 ${currentIndex + 1}페이지`}
                className={`h-auto w-auto object-contain block shadow-2xl rounded-sm ${zoom > 1 ? 'cursor-move' : 'cursor-grab active:cursor-grabbing'}`}
                style={{ maxHeight: `${maxScale}%`, maxWidth: `${maxScale}%` }}
                referrerPolicy="no-referrer"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
