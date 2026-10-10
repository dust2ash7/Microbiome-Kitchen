import { createFileRoute } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { RecipeCard } from "@/components/recipe-card";
import { Shell } from "@/components/shell";
import { categoriesOf, recipes, recipeHaystack } from "@/data/recipes";
import { CATEGORIES } from "@/data/types";
import type { DietTag } from "@/data/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Microbiome Kitchen" }],
  }),
});

const diets: { id: "any" | DietTag; label: string }[] = [
  { id: "any", label: "Any diet" },
  { id: "vegetarian", label: "Vegetarian" },
  { id: "dairy-free", label: "Dairy-free" },
  { id: "gluten-free", label: "Gluten-free" },
];

function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [time, setTime] = useState<"any" | "20" | "30">("any");
  const [protein, setProtein] = useState<"any" | "30" | "35">("any");
  const [diet, setDiet] = useState<"any" | DietTag>("any");

  const results = useMemo(() => {
    const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return recipes.filter((recipe) => {
      if (category !== "All" && !categoriesOf(recipe).includes(category)) return false;
      const active = recipe.prepMin + recipe.cookMin;
      if (time === "20" && active > 20) return false;
      if (time === "30" && active > 30) return false;
      if (protein === "30" && recipe.proteinG < 30) return false;
      if (protein === "35" && recipe.proteinG < 35) return false;
      if (diet !== "any" && !recipe.diets.includes(diet)) return false;
      if (words.length === 0) return true;
      const hay = recipeHaystack(recipe);
      return words.every((word) => hay.includes(word));
    });
  }, [query, category, time, protein, diet]);

  const filtering = query.trim() !== "" || category !== "All" || time !== "any" || protein !== "any" || diet !== "any";
  const starter = recipes.find((recipe) => recipe.id === "greek-yogurt-berry-bowl");

  return (
    <Shell>
      <section className="max-w-2xl">
        <p className="text-sm font-semibold tracking-wide text-sage uppercase">Whole foods, plain steps</p>
        <h1 className="mt-2 font-display text-4xl text-ink">Cook food that feeds your gut.</h1>
        <p className="mt-3 text-base text-muted">
          Sixteen high-protein meals made from real ingredients. Every recipe tells you how to cut the food, why it
          matters for your gut and brain, and how to drop it on a grocery list.
        </p>
      </section>

      <div className="relative mt-6">
        <Search className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search salmon, yogurt, lentil…"
          aria-label="Search recipes or ingredients"
          className="h-12 w-full rounded-full bg-paper pr-12 pl-12 text-base text-ink ring-1 ring-line outline-none placeholder:text-muted"
        />
        {query ? (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => setQuery("")}
            className="absolute top-1/2 right-2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-muted"
          >
            <X className="size-4" />
          </button>
        ) : null}
      </div>

      <div className="chip-row mt-4" role="tablist" aria-label="Categories">
        {CATEGORIES.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={category === item}
            onClick={() => setCategory(item)}
            className={cn(
              "h-10 shrink-0 rounded-full px-4 text-sm font-medium",
              category === item ? "bg-sage text-paper" : "bg-paper text-ink ring-1 ring-line",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <FilterChip active={time === "20"} onClick={() => setTime(time === "20" ? "any" : "20")}>
          20 min or less
        </FilterChip>
        <FilterChip active={time === "30"} onClick={() => setTime(time === "30" ? "any" : "30")}>
          30 min or less
        </FilterChip>
        <FilterChip active={protein === "30"} onClick={() => setProtein(protein === "30" ? "any" : "30")}>
          30g+ protein
        </FilterChip>
        <FilterChip active={protein === "35"} onClick={() => setProtein(protein === "35" ? "any" : "35")}>
          35g+ protein
        </FilterChip>
        {diets
          .filter((item) => item.id !== "any")
          .map((item) => (
            <FilterChip
              key={item.id}
              active={diet === item.id}
              onClick={() => setDiet(diet === item.id ? "any" : item.id)}
            >
              {item.label}
            </FilterChip>
          ))}
      </div>

      {!filtering && starter ? (
        <section className="mt-8">
          <h2 className="font-display text-2xl">A calm place to start</h2>
          <p className="mt-1 text-sm text-muted">No stove. Useful if you are new to cooking.</p>
          <div className="mt-4 max-w-xl">
            <RecipeCard recipe={starter} priority />
          </div>
        </section>
      ) : null}

      <section className="mt-8">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-display text-2xl">{filtering ? "Matching recipes" : "All recipes"}</h2>
          <p className="text-sm text-muted tabular-nums">{results.length} recipes</p>
        </div>
        {results.length === 0 ? (
          <div className="mt-4 rounded-card bg-paper p-6 ring-1 ring-line">
            <p className="font-display text-xl">Nothing matches that yet.</p>
            <p className="mt-2 text-muted">Try yogurt, salmon, broccoli, or clear a filter.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
                setTime("any");
                setProtein("any");
                setDiet("any");
              }}
              className="mt-4 h-11 rounded-full bg-sage px-4 text-sm font-semibold text-paper"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </section>
    </Shell>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "h-10 rounded-full px-3 text-sm font-medium",
        active ? "bg-clay text-paper" : "bg-sage-soft text-sage",
      )}
    >
      {children}
    </button>
  );
}
