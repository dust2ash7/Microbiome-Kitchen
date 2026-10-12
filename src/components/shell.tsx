import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Heart, ShoppingBasket, UtensilsCrossed } from "lucide-react";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { useKitchen } from "@/store/kitchen";
import { useKitchenReady } from "@/store/use-ready";

const links = [
  { to: "/", label: "Recipes", icon: UtensilsCrossed, exact: true },
  { to: "/grocery", label: "Grocery", icon: ShoppingBasket, exact: false },
  { to: "/tips", label: "Learn", icon: BookOpen, exact: false },
  { to: "/saved", label: "Saved", icon: Heart, exact: false },
] as const;

export function Shell({ children, extraPad = false }: { children: ReactNode; extraPad?: boolean }) {
  const ready = useKitchenReady();
  const count = useKitchen((state) => state.items.filter((item) => !item.checked).length);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen overflow-x-clip bg-cream text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-paper focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-30 border-b border-line bg-cream/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-sage text-paper">
              <UtensilsCrossed className="size-4" aria-hidden="true" />
            </span>
            <span className="font-display text-lg leading-none">
              Microbiome
              <span className="block text-sm font-medium tracking-normal text-sage">Kitchen</span>
            </span>
          </Link>
          <Link
            to="/grocery"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-paper px-3 text-sm font-medium text-ink ring-1 ring-line"
          >
            <ShoppingBasket className="size-4 text-sage" aria-hidden="true" />
            List
            {ready && count > 0 ? (
              <span className="min-w-6 rounded-full bg-clay px-1.5 text-center text-xs font-semibold text-paper tabular-nums">
                {count}
              </span>
            ) : null}
          </Link>
        </div>
      </header>
      <main id="main" className={cn("mx-auto w-full max-w-5xl px-4 pt-6", extraPad ? "pb-72" : "pb-36")}>
        {children}
      </main>
      <nav className="nav-safe fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper" aria-label="Primary">
        <ul className="mx-auto flex max-w-5xl">
          {links.map((link) => {
            const active =
              link.to === "/"
                ? pathname === "/" || pathname.startsWith("/recipe")
                : pathname.startsWith(link.to);
            const Icon = link.icon;
            return (
              <li key={link.to} className="flex-1">
                <Link
                  to={link.to}
                  className={cn(
                    "flex h-16 flex-col items-center justify-center gap-1 text-xs font-medium",
                    active ? "text-sage" : "text-muted",
                  )}
                >
                  <Icon className="size-5" aria-hidden="true" />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Toaster position="top-center" toastOptions={{ className: "font-sans" }} />
    </div>
  );
}
