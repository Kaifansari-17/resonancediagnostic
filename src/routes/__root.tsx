import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CursorGlow } from "@/components/CursorGlow";
import { FloatingActions } from "@/components/FloatingActions";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Waveform } from "@/components/Waveform";
import { Preloader } from "@/components/Preloader";

function NotFoundComponent() {
  return (
    <div
      className="rd-section is-dark rd-texture-grid"
      style={{ display: "grid", placeItems: "center", minHeight: "70vh" }}
    >
      <div className="rd-container" style={{ textAlign: "center" }}>
        <span className="rd-eyebrow" style={{ justifyContent: "center" }}>
          404
        </span>
        <h1 className="rd-title" style={{ marginTop: "0.9rem" }}>
          Page Not Found
        </h1>
        <p className="rd-copy" style={{ marginInline: "auto", marginTop: "0.6rem" }}>
          The page you're looking for doesn't exist.
        </p>
        <Waveform
          animated
          style={{
            width: "min(280px, 60vw)",
            height: 34,
            color: "var(--rd-green-400)",
            marginInline: "auto",
            marginTop: "1.6rem",
          }}
        />
        <div style={{ marginTop: "1.8rem" }}>
          <Link to="/" className="rd-btn rd-btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div
      className="rd-section"
      style={{ display: "grid", placeItems: "center", minHeight: "70vh" }}
    >
      <div className="rd-container" style={{ textAlign: "center" }}>
        <h1 className="rd-title">This page didn't load</h1>
        <p className="rd-copy" style={{ marginInline: "auto" }}>
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div
          style={{ marginTop: "1.5rem", display: "flex", gap: "0.6rem", justifyContent: "center" }}
        >
          <button
            className="rd-btn rd-btn-primary"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <a href="/" className="rd-btn rd-btn-ghost">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Resonance Diagnostic by Kargill Healthcare" },
      {
        name: "description",
        content:
          "Resonance Diagnostic by Kargill Healthcare LLP — diagnostic services shaped by a broader scientific approach of research, documentation and validation.",
      },
      { name: "author", content: "Resonance Diagnostic by Kargill Healthcare LLP" },
      { name: "theme-color", content: "#0c5c09" },
      { property: "og:site_name", content: "Resonance Diagnostic" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:alt", content: "Resonance Diagnostic by Kargill Healthcare LLP" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <a href="#main" className="rd-skip">
        Skip to content
      </a>
      <SmoothScroll />
      <CursorGlow />
      <Navbar />
      <main id="main">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <ScrollToTop />
    </QueryClientProvider>
  );
}
