import { create } from "zustand";
import { persist } from "zustand/middleware";
import { roundCook } from "@/data/format";
import { shopFor } from "@/data/packs";
import type { Aisle, Recipe } from "@/data/types";
import { AISLES } from "@/data/types";

export type GrocerySource = {
  id: string;
  title: string;
};

export type GroceryItem = {
  key: string;
  name: string;
  plural?: string;
  qty: number;
  unit: string;
  aisle: Aisle;
  note?: string;
  checked: boolean;
  sources: GrocerySource[];
};

type KitchenState = {
  favorites: string[];
  items: GroceryItem[];
  toggleFavorite: (id: string) => void;
  addRecipe: (recipe: Recipe, servings: number) => void;
  toggleItem: (key: string) => void;
  bumpItem: (key: string, direction: 1 | -1) => void;
  clearItems: () => void;
  rounds: number;
  setRounds: (rounds: number) => void;
};

function itemKey(name: string, unit: string, aisle: Aisle) {
  return `${aisle}|${unit}|${name.toLowerCase()}`;
}

function stepFor(unit: string) {
  if (unit === "tsp" || unit === "tbsp" || unit === "cup" || unit === "lb") return 0.25;
  if (unit === "oz") return 1;
  return 0.5;
}

export function groceryText(items: GroceryItem[], rounds = 1) {
  const lines = ["Microbiome Kitchen — grocery list"];
  if (rounds > 1) lines.push(`Cook each meal on this list ${rounds} times.`);
  lines.push("");
  const groups = [
    { heading: "Still to buy", items: items.filter((item) => !item.checked) },
    { heading: "Already in the cart", items: items.filter((item) => item.checked) },
  ];
  for (const group of groups) {
    if (group.items.length === 0) continue;
    lines.push(group.heading);
    for (const aisle of AISLES) {
      const inAisle = group.items.filter((item) => item.aisle === aisle);
      if (inAisle.length === 0) continue;
      lines.push(aisle);
      for (const item of inAisle) {
        const mark = item.checked ? "[x]" : "[ ]";
        const shop = shopFor(item, rounds);
        const from = item.sources.map((source) => source.title).join(", ");
        lines.push(`${mark} ${shop.buy}${from ? ` — ${from}` : ""}`);
        lines.push(`    ${shop.detail}`);
      }
      lines.push("");
    }
  }
  return lines.join("\n").trim();
}

export const useKitchen = create<KitchenState>()(
  persist(
    (set) => ({
      favorites: [],
      items: [],
      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((favorite) => favorite !== id)
            : [...state.favorites, id],
        })),
      addRecipe: (recipe, servings) => {
        const factor = servings / recipe.servings;
        set((state) => {
          const items = state.items.map((item) => ({ ...item, sources: [...item.sources] }));
          for (const ingredient of recipe.ingredients) {
            const qty = roundCook(ingredient.qty * factor, ingredient.unit);
            if (qty <= 0) continue;
            const key = itemKey(ingredient.name, ingredient.unit, ingredient.aisle);
            const existing = items.find((item) => item.key === key);
            if (existing) {
              existing.qty = roundCook(existing.qty + qty, ingredient.unit);
              if (!existing.sources.some((source) => source.id === recipe.id)) {
                existing.sources.push({ id: recipe.id, title: recipe.title });
              }
            } else {
              items.push({
                key,
                name: ingredient.name,
                plural: ingredient.plural,
                qty,
                unit: ingredient.unit,
                aisle: ingredient.aisle,
                note: ingredient.note,
                checked: false,
                sources: [{ id: recipe.id, title: recipe.title }],
              });
            }
          }
          return { items };
        });
      },
      toggleItem: (key) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.key === key ? { ...item, checked: !item.checked } : item,
          ),
        })),
      bumpItem: (key, direction) =>
        set((state) => ({
          items: state.items.flatMap((item) => {
            if (item.key !== key) return [item];
            const qty = roundCook(item.qty + direction * stepFor(item.unit), item.unit);
            if (qty <= 0) return [];
            return [{ ...item, qty }];
          }),
        })),
      clearItems: () => set({ items: [] }),
      rounds: 1,
      setRounds: (rounds) => set({ rounds: Math.min(3, Math.max(1, Math.round(rounds))) }),
    }),
    {
      name: "microbiome-kitchen-v1",
      skipHydration: true,
    },
  ),
);
