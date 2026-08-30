import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { testCatalog, testCatalogNote, testCategories, type TestCategory } from "@/data/site";

/**
 * Client-side search + category filter over the indicative test catalogue.
 * "View Details" expands an inline panel rather than linking to a page that
 * doesn't exist yet, so nothing here promises content the site can't deliver.
 */
export function ServiceExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<TestCategory | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return testCatalog.filter((t) => {
      const matchesCategory = !category || t.category === category;
      const matchesQuery =
        !q || t.name.toLowerCase().includes(q) || t.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="rd-explorer" data-reveal>
      <div className="rd-explorer-search">
        <Search size={19} aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tests, packages or health services..."
          aria-label="Search tests, packages or health services"
        />
      </div>

      <div className="rd-explorer-chips" role="group" aria-label="Filter by health concern">
        <button
          type="button"
          className={`rd-chip-btn${category === null ? " is-active" : ""}`}
          onClick={() => setCategory(null)}
        >
          All
        </button>
        {testCategories.map((c) => (
          <button
            key={c}
            type="button"
            className={`rd-chip-btn${category === c ? " is-active" : ""}`}
            onClick={() => setCategory((cur) => (cur === c ? null : c))}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="rd-explorer-results">
        {results.length === 0 ? (
          <p className="rd-copy">No matches yet — try a different search term or category.</p>
        ) : (
          results.map((t) => {
            const open = openId === t.id;
            return (
              <div key={t.id} className="rd-explorer-item">
                <button
                  type="button"
                  className="rd-explorer-item-head"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : t.id)}
                >
                  <span>
                    <strong>{t.name}</strong>
                    <small>{t.category}</small>
                  </span>
                  <span className="rd-explorer-cta">
                    View Details{" "}
                    <ChevronDown size={16} className={open ? "is-open" : ""} aria-hidden="true" />
                  </span>
                </button>
                {open ? (
                  <div className="rd-explorer-item-body">
                    <p>{t.description}</p>
                    {t.prep ? <p className="rd-note">{t.prep}</p> : null}
                  </div>
                ) : null}
              </div>
            );
          })
        )}
      </div>

      <p className="rd-note rd-explorer-note">{testCatalogNote}</p>
    </div>
  );
}
