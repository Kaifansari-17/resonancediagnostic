import { useRef, useState } from "react";
import { Plus } from "lucide-react";

type Item = { q: string; a: string };

/** Premium accordion — one open at a time, smooth height animation. */
export function FAQ({ items, idPrefix = "faq" }: { items: Item[]; idPrefix?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  return (
    <div className="rd-faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const btnId = `${idPrefix}-btn-${i}`;
        return (
          <div key={item.q} className={`rd-faq-item${isOpen ? " is-open" : ""}`} data-reveal>
            <h3>
              <button
                type="button"
                id={btnId}
                className="rd-faq-btn"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span className="rd-faq-icon" aria-hidden="true">
                  <Plus size={18} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="rd-faq-panel"
              ref={(el) => {
                refs.current[i] = el;
              }}
              style={{ height: isOpen ? (refs.current[i]?.scrollHeight ?? "auto") : 0 }}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
