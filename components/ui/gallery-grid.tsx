"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronsLeft, ChevronsRight } from "lucide-react";

interface GalleryGridProps {
  images: string[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const show = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, next, open, prev]);

  useEffect(() => {
    if (!open) return;
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [open]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-3">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => show(i)}
            className="image-frame h-40 w-full transition cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.2)]"
            aria-label={`Open image ${i + 1}`}
          >
            <div
              className="absolute inset-0 rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
            <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-slate-900/30 via-primary/20 to-transparent" />
            <div className="absolute left-3 top-3 h-8 w-8 rotate-6 rounded-xl bg-white/15 backdrop-blur" />
            <div className="absolute right-4 bottom-3 h-14 w-16 -rotate-6 rounded-2xl bg-amber-400/20 blur-lg" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="presentation"
          >
            <button
              aria-label="Close gallery"
              className="absolute cursor-pointer right-6 top-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              onClick={close}
            >
              <X size={20} />
            </button>
            <div
              className="relative flex w-full max-w-5xl flex-col items-center gap-4 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full overflow-hidden rounded-3xl bg-surface shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
                <motion.div
                  key={images[index]}
                  className="relative h-[60vh] min-h-[360px] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${images[index]})` }}
                  initial={{ opacity: 0.4, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.4, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-linear-to-tr from-black/25 via-transparent to-transparent" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button
                    aria-label="Previous image"
                    onClick={prev}
                    className="rounded-full cursor-pointer bg-white/15 p-2 text-white backdrop-blur transition hover:bg-white/25"
                  >
                    <ChevronsLeft size={22} />
                  </button>
                  <button
                    aria-label="Next image"
                    onClick={next}
                    className="rounded-full cursor-pointer bg-white/15 p-2 text-white backdrop-blur transition hover:bg-white/25"
                  >
                    <ChevronsRight size={22} />
                  </button>
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                {index + 1} / {images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
