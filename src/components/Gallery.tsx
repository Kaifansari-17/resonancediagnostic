import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/data/site";

export function Gallery() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(gallery.map((g) => g.category)))],
    [],
  );
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((v) => ((v ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") setLightbox((v) => ((v ?? 0) - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, items.length]);

  const active = lightbox === null ? null : items[lightbox];

  return (
    <>
      <div className="rd-gallery-filters" role="tablist" aria-label="Gallery categories">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={filter === c}
            className={`rd-filter${filter === c ? " is-active" : ""}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="rd-gallery">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            className={`rd-gallery-item${i % 5 === 0 ? " is-tall" : ""}`}
            data-reveal="mask"
            style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
            onClick={() => setLightbox(i)}
            aria-label={`Open image: ${item.alt}`}
          >
            <img src={item.thumb} alt={item.alt} loading="lazy" decoding="async" />
            <span className="rd-gallery-cap">{item.category}</span>
          </button>
        ))}
      </div>

      {active ? (
        <div className="rd-lightbox" role="dialog" aria-modal="true" aria-label={active.alt}>
          <button
            type="button"
            className="rd-lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <button
            type="button"
            className="rd-lightbox-nav is-prev"
            aria-label="Previous image"
            onClick={() => setLightbox((v) => ((v ?? 0) - 1 + items.length) % items.length)}
          >
            <ChevronLeft size={26} />
          </button>
          <figure className="rd-lightbox-figure">
            <img src={active.src} alt={active.alt} />
            <figcaption>{active.alt}</figcaption>
          </figure>
          <button
            type="button"
            className="rd-lightbox-nav is-next"
            aria-label="Next image"
            onClick={() => setLightbox((v) => ((v ?? 0) + 1) % items.length)}
          >
            <ChevronRight size={26} />
          </button>
        </div>
      ) : null}
    </>
  );
}
