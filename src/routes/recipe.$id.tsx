import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Heart, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Shell } from "@/components/shell";
import { formatIngredient } from "@/data/format";
import { getPrep } from "@/data/preps";
import { categoriesOf, getRecipe } from "@/data/recipes";
import type { Recipe } from "@/data/types";
import { publicAsset } from "@/lib/public-asset";
import { cn } from "@/lib/utils";
import { useKitchen } from "@/store/kitchen";

export const Route = createFileRoute("/recipe/$id")({
  loader: ({ params }) => ({ recipe: getRecipe(params.id) ?? null }),
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData?.recipe
          ? `${loaderData.recipe.title} · Microbiome Kitchen`
          : "Recipe · Microbiome Kitchen",
      },
    ],
  }),
  component: RecipePage,
});

function RecipePage() {
  const { recipe } = Route.useLoaderData();
  if (!recipe) {
    return (
      <Shell>
        <h1 className="font-display text-3xl">That recipe is not here.</h1>
        <Link to="/" className="mt-4 inline-flex h-11 items-center text-sage">
          Back to recipes
        </Link>
      </Shell>
    );
  }

  return <RecipeDetail key={recipe.id} recipe={recipe} />;
}

function RecipeDetail({ recipe }: { recipe: Recipe }) {
  const [servings, setServings] = useState(recipe.servings);
  const [packed, setPacked] = useState<string[]>([]);
  const [openPrep, setOpenPrep] = useState<string | null>(recipe.prepIds[0] ?? null);
  const favorite = useKitchen((state) => state.favorites.includes(recipe.id));
  const toggleFavorite = useKitchen((state) => state.toggleFavorite);
  const addRecipe = useKitchen((state) => state.addRecipe);
  const factor = servings / recipe.servings;
  const preps = recipe.prepIds.map((id) => getPrep(id)).filter((prep) => prep != null);
  const minutes = recipe.prepMin + recipe.cookMin;

  function addToList() {
    addRecipe(recipe, servings);
    toast.success(`Added ${servings} serving${servings === 1 ? "" : "s"} to your grocery list`);
  }

  return (
    <Shell extraPad>
      <Link to="/" className="inline-flex h-11 items-center gap-2 text-sm font-medium text-sage">
        <ArrowLeft className="size-4" aria-hidden="true" />
        All recipes
      </Link>

      <img src={publicAsset(recipe.image)} alt={recipe.title} className="aspect-dish mt-3 w-full rounded-card object-cover" />

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold tracking-wide text-clay uppercase">{recipe.meals.join(" · ")}</p>
          <h1 className="mt-1 font-display text-4xl">{recipe.title}</h1>
        </div>
        <button
          type="button"
          aria-pressed={favorite}
          aria-label={favorite ? "Remove from saved" : "Save recipe"}
          onClick={() => toggleFavorite(recipe.id)}
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-paper ring-1 ring-line"
        >
          <Heart className={cn("size-5", favorite ? "fill-clay text-clay" : "text-ink")} />
        </button>
      </div>
      <p className="mt-3 max-w-2xl text-base text-muted">{recipe.blurb}</p>

      <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Prep" value={`${recipe.prepMin} min`} />
        <Stat label="Cook" value={recipe.cookMin === 0 ? "No cook" : `${recipe.cookMin} min`} />
        <Stat label="Protein" value={`${recipe.proteinG}g`} hint="per serving" />
        <Stat label="Fiber" value={`${recipe.fiberG}g`} hint="per serving" />
      </dl>
      {recipe.rest ? <p className="mt-3 text-sm text-muted">Rest: {recipe.rest}. Hands-on time is {minutes} minutes.</p> : null}

      <section className="mt-6 rounded-card bg-sage-soft p-5">
        <h2 className="font-display text-2xl text-sage">Why this is good for your gut-brain</h2>
        <p className="mt-2 text-base text-ink">{recipe.gutNote}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {recipe.micros.map((micro) => (
            <li key={micro} className="rounded-full bg-paper px-3 py-1 text-sm text-sage">
              {micro}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <div className="flex items-end justify-between gap-3">
          <h2 className="font-display text-2xl">Ingredients</h2>
          <p className="text-sm text-muted">Tap what you have set out</p>
        </div>
        <p className="mt-2 text-sm text-muted">
          Amounts below match {servings} serving{servings === 1 ? "" : "s"}. Each serving is still about {recipe.proteinG}g
          protein and {recipe.fiberG}g fiber. Salt amounts assume kosher salt — if you use table salt, use half.
        </p>
        <ul className="mt-4 divide-y divide-line rounded-card bg-paper ring-1 ring-line">
          {recipe.ingredients.map((ingredient) => {
            const label = formatIngredient(ingredient.qty * factor, ingredient.unit, ingredient.name, ingredient.plural);
            const on = packed.includes(label + ingredient.name);
            const key = label + ingredient.name;
            return (
              <li key={ingredient.name + ingredient.unit}>
                <button
                  type="button"
                  onClick={() =>
                    setPacked((current) => (current.includes(key) ? current.filter((item) => item !== key) : [...current, key]))
                  }
                  className="flex min-h-14 w-full items-start gap-3 px-3 py-3 text-left"
                >
                  <span
                    className={cn(
                      "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border",
                      on ? "border-sage bg-sage text-paper" : "border-line bg-cream",
                    )}
                    aria-hidden="true"
                  >
                    {on ? <Check className="size-4" /> : null}
                  </span>
                  <span>
                    <span className={cn("block text-base", on && "text-muted line-through")}>{label}</span>
                    {ingredient.note ? <span className="block text-sm text-muted">{ingredient.note}</span> : null}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mt-3 text-sm text-muted">Protein and fiber are estimates for teaching, not a medical plan.</p>
      </section>

      {preps.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-display text-2xl">How to cut and prepare</h2>
          <p className="mt-2 text-muted">Open a card before you start chopping. The picture shows the shape you are aiming for.</p>
          <div className="mt-4 space-y-3">
            {preps.map((prep) => {
              const open = openPrep === prep.id;
              return (
                <article key={prep.id} className="overflow-hidden rounded-card bg-paper ring-1 ring-line">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenPrep(open ? null : prep.id)}
                    className="flex min-h-14 w-full items-center justify-between gap-3 px-4 py-3 text-left"
                  >
                    <span className="font-display text-xl">{prep.title}</span>
                    <span className="text-sm font-medium text-sage">{open ? "Hide" : "Show"}</span>
                  </button>
                  {open ? (
                    <div className="space-y-4 px-4 pb-5">
                      <img src={publicAsset(prep.image)} alt={prep.imageAlt} className="aspect-prep w-full rounded-2xl object-cover" />
                      <ol className="space-y-3">
                        {prep.steps.map((step, index) => (
                          <li key={step} className="flex gap-3">
                            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-sage-soft text-sm font-semibold text-sage tabular-nums">
                              {index + 1}
                            </span>
                            <p className="text-base">{step}</p>
                          </li>
                        ))}
                      </ol>
                      <div className="rounded-2xl bg-clay-soft p-4">
                        <h3 className="font-display text-lg text-clay">Common mistakes</h3>
                        <ul className="mt-2 space-y-2">
                          {prep.mistakes.map((mistake) => (
                            <li key={mistake} className="text-sm text-ink">
                              {mistake}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>
      ) : null}

      <section className="mt-8">
        <h2 className="font-display text-2xl">Cook it</h2>
        <p className="mt-2 text-sm text-muted">You will need: {recipe.tools.join(", ")}.</p>
        <ol className="mt-4 space-y-4">
          {recipe.steps.map((step, index) => (
            <li key={step.title} className="rounded-card bg-paper p-4 ring-1 ring-line">
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sage text-base font-semibold text-paper tabular-nums">
                  {index + 1}
                </span>
                <h3 className="font-display text-xl">{step.title}</h3>
              </div>
              <p className="mt-3 text-base leading-relaxed">{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <section className="rounded-card bg-paper p-5 ring-1 ring-line">
          <h2 className="font-display text-xl">Make it simpler</h2>
          <ul className="mt-3 space-y-2">
            {recipe.simpler.map((tip) => (
              <li key={tip} className="text-sm text-muted">
                {tip}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-card bg-paper p-5 ring-1 ring-line">
          <h2 className="font-display text-xl">Flavor boosters</h2>
          <ul className="mt-3 space-y-2">
            {recipe.boosters.map((tip) => (
              <li key={tip} className="text-sm text-muted">
                {tip}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted">Boosters stay off the grocery list unless you add them yourself.</p>
        </section>
      </div>

      <p className="mt-6 text-sm text-muted">{categoriesOf(recipe).join(" · ")}</p>

      <div className="above-nav nav-safe fixed inset-x-0 z-20 border-t border-line bg-paper">
        <div className="mx-auto max-w-5xl px-4 py-3">
          <div className="mb-2 flex gap-2" role="group" aria-label="Scale this recipe for more people">
            {[2, 4].map((count) => (
              <button
                key={count}
                type="button"
                aria-pressed={servings === count}
                onClick={() => setServings(count)}
                className={cn(
                  "h-10 flex-1 rounded-full px-3 text-sm font-semibold",
                  servings === count ? "bg-sage text-paper" : "bg-cream text-ink ring-1 ring-line",
                )}
              >
                Enough for {count}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-full bg-cream ring-1 ring-line">
              <button
                type="button"
                aria-label="Fewer servings"
                onClick={() => setServings((value) => Math.max(1, value - 1))}
                className="flex size-11 items-center justify-center"
              >
                <Minus className="size-4" />
              </button>
              <span className="min-w-16 text-center text-sm font-semibold tabular-nums">
                {servings} {servings === 1 ? "serving" : "servings"}
              </span>
              <button
                type="button"
                aria-label="More servings"
                onClick={() => setServings((value) => Math.min(12, value + 1))}
                className="flex size-11 items-center justify-center"
              >
                <Plus className="size-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={addToList}
              className="h-12 flex-1 rounded-full bg-sage px-4 text-sm font-semibold text-paper"
            >
              Add to grocery list
            </button>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-2xl bg-paper px-3 py-3 ring-1 ring-line">
      <dt className="text-xs font-semibold tracking-wide text-muted uppercase">{label}</dt>
      <dd className="mt-1 font-display text-2xl tabular-nums">{value}</dd>
      {hint ? <p className="text-xs text-muted">{hint}</p> : null}
    </div>
  );
}
