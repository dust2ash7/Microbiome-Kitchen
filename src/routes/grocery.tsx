import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Share2, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Shell } from "@/components/shell";
import { shopFor } from "@/data/packs";
import { AISLES } from "@/data/types";
import { shareText } from "@/lib/share";
import { cn } from "@/lib/utils";
import { groceryText, useKitchen } from "@/store/kitchen";
import { useKitchenReady } from "@/store/use-ready";

export const Route = createFileRoute("/grocery")({
  component: GroceryPage,
  head: () => ({
    meta: [{ title: "Grocery list · Microbiome Kitchen" }],
  }),
});

function GroceryPage() {
  const ready = useKitchenReady();
  const items = useKitchen((state) => state.items);
  const toggleItem = useKitchen((state) => state.toggleItem);
  const bumpItem = useKitchen((state) => state.bumpItem);
  const clearItems = useKitchen((state) => state.clearItems);
  const rounds = useKitchen((state) => state.rounds ?? 1);
  const setRounds = useKitchen((state) => state.setRounds);
  const [confirmClear, setConfirmClear] = useState(false);

  const unchecked = items.filter((item) => !item.checked);
  const checked = items.filter((item) => item.checked);

  async function onShare() {
    const result = await shareText(groceryText(items, rounds));
    if (result === "copied") toast.success("List copied. Paste it into a message or note.");
    if (result === "shared") toast.success("List ready to send.");
    if (result === "failed") toast.error("Could not share. Try again in a moment.");
  }

  return (
    <Shell>
      <p className="text-sm font-semibold tracking-wide text-sage uppercase">Shop without the scroll</p>
      <h1 className="mt-2 font-display text-4xl">Grocery list</h1>
      <p className="mt-3 max-w-xl text-muted">
        Ingredients from every recipe you add land here, grouped by aisle. Matching foods combine, then the list
        rounds up to a normal package — a tub, a bunch, a pound — instead of a teaspoon of salt.
      </p>

      {!ready ? <p className="mt-8 text-muted">Opening your list…</p> : null}

      {ready && items.length === 0 ? (
        <div className="mt-8 rounded-card bg-paper p-6 ring-1 ring-line">
          <h2 className="font-display text-2xl">Your list is empty.</h2>
          <p className="mt-2 text-muted">Open a recipe and tap Add to grocery list. Add as many meals as you want — matching ingredients combine.</p>
          <Link to="/" className="mt-4 inline-flex h-12 items-center rounded-full bg-sage px-5 text-sm font-semibold text-paper">
            Browse recipes
          </Link>
        </div>
      ) : null}

      {ready && items.length > 0 ? (
        <>
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onShare}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-sage px-4 text-sm font-semibold text-paper"
            >
              <Share2 className="size-4" aria-hidden="true" />
              Share list
            </button>
            {confirmClear ? (
              <button
                type="button"
                onClick={() => {
                  clearItems();
                  setConfirmClear(false);
                  toast.success("List cleared");
                }}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-clay px-4 text-sm font-semibold text-paper"
              >
                <Trash2 className="size-4" aria-hidden="true" />
                Confirm clear
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setConfirmClear(true)}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-paper px-4 text-sm font-semibold text-ink ring-1 ring-line"
              >
                <Trash2 className="size-4" aria-hidden="true" />
                Clear list
              </button>
            )}
          </div>
          <p className="mt-4 text-sm text-muted tabular-nums">
            {new Set(items.flatMap((item) => item.sources.map((source) => source.id))).size} recipes · {unchecked.length}{" "}
            still to buy
            {checked.length > 0 ? ` · ${checked.length} in the cart` : ""}
          </p>

          <div className="mt-4 rounded-card bg-paper p-4 ring-1 ring-line">
            <p className="text-sm font-semibold text-ink">Enough for more than one meal</p>
            <p className="mt-1 text-sm text-muted">
              Once uses the servings you chose on each recipe. Enough for 2 or 3 buys packages to cook every meal on this list that many times.
            </p>
            <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="How many times to cook this list">
              {(
                [
                  [1, "Once"],
                  [2, "Enough for 2"],
                  [3, "Enough for 3"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={rounds === value}
                  onClick={() => setRounds(value)}
                  className={cn(
                    "h-11 rounded-full px-4 text-sm font-semibold",
                    rounds === value ? "bg-sage text-paper" : "bg-cream text-ink ring-1 ring-line",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <ItemGroups title="Still to buy" items={unchecked} empty="Everything is checked. Nice work." toggleItem={toggleItem} bumpItem={bumpItem} rounds={rounds} />
          {checked.length > 0 ? (
            <ItemGroups title="In the cart" items={checked} empty="" toggleItem={toggleItem} bumpItem={bumpItem} rounds={rounds} dim />
          ) : null}
        </>
      ) : null}
    </Shell>
  );
}

function ItemGroups({
  title,
  items,
  empty,
  toggleItem,
  bumpItem,
  rounds,
  dim = false,
}: {
  title: string;
  items: ReturnType<typeof useKitchen.getState>["items"];
  empty: string;
  toggleItem: (key: string) => void;
  bumpItem: (key: string, direction: 1 | -1) => void;
  rounds: number;
  dim?: boolean;
}) {
  if (items.length === 0 && !empty) return null;
  return (
    <section className={cn("mt-8", dim && "opacity-80")}>
      <h2 className="font-display text-2xl">{title}</h2>
      {items.length === 0 ? <p className="mt-2 text-muted">{empty}</p> : null}
      <div className="mt-3 space-y-6">
        {AISLES.map((aisle) => {
          const group = items.filter((item) => item.aisle === aisle);
          if (group.length === 0) return null;
          return (
            <div key={aisle}>
              <h3 className="text-xs font-semibold tracking-wide text-sage uppercase">{aisle}</h3>
              <ul className="mt-2 divide-y divide-line rounded-card bg-paper ring-1 ring-line">
                {group.map((item) => {
                  const shop = shopFor(item, rounds);
                  return (
                    <li key={item.key} className="flex items-center gap-2 px-2 py-2">
                      <button
                        type="button"
                        aria-pressed={item.checked}
                        aria-label={item.checked ? `Mark ${item.name} as still needed` : `Mark ${item.name} as in the cart`}
                        onClick={() => toggleItem(item.key)}
                        className="flex size-11 shrink-0 items-center justify-center"
                      >
                        <span
                          className={cn(
                            "flex size-7 items-center justify-center rounded-full border",
                            item.checked ? "border-sage bg-sage" : "border-line",
                          )}
                        >
                          {item.checked ? <span className="size-2.5 rounded-full bg-paper" /> : null}
                        </span>
                      </button>
                      <div className="min-w-0 flex-1">
                        <p className={cn("text-base font-medium", item.checked && "text-muted line-through")}>{shop.buy}</p>
                        <p className="text-sm text-muted">{shop.detail}</p>
                        <p className="truncate text-sm text-muted">{item.sources.map((source) => source.title).join(", ")}</p>
                      </div>
                      <div className="flex shrink-0 items-center">
                        <button
                          type="button"
                          aria-label={`Decrease ${item.name}`}
                          onClick={() => bumpItem(item.key, -1)}
                          className="flex size-11 items-center justify-center rounded-full"
                        >
                          <Minus className="size-4" />
                        </button>
                        <button
                          type="button"
                          aria-label={`Increase ${item.name}`}
                          onClick={() => bumpItem(item.key, 1)}
                          className="flex size-11 items-center justify-center rounded-full"
                        >
                          <Plus className="size-4" />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
