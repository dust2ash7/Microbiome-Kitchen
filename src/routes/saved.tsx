import { createFileRoute, Link } from "@tanstack/react-router";
import { RecipeCard } from "@/components/recipe-card";
import { Shell } from "@/components/shell";
import { recipes } from "@/data/recipes";
import { useKitchen } from "@/store/kitchen";
import { useKitchenReady } from "@/store/use-ready";

export const Route = createFileRoute("/saved")({
  component: SavedPage,
  head: () => ({
    meta: [{ title: "Saved recipes · Microbiome Kitchen" }],
  }),
});

function SavedPage() {
  const ready = useKitchenReady();
  const favorites = useKitchen((state) => state.favorites);
  const saved = recipes.filter((recipe) => favorites.includes(recipe.id));

  return (
    <Shell>
      <p className="text-sm font-semibold tracking-wide text-sage uppercase">Saved for later</p>
      <h1 className="mt-2 font-display text-4xl">Your recipes</h1>
      <p className="mt-3 max-w-xl text-muted">Hearts stay on this device. They are a short list, not an account.</p>

      {!ready ? <p className="mt-8 text-muted">Opening your saved recipes…</p> : null}

      {ready && saved.length === 0 ? (
        <div className="mt-8 rounded-card bg-paper p-6 ring-1 ring-line">
          <h2 className="font-display text-2xl">Nothing saved yet.</h2>
          <p className="mt-2 text-muted">Tap the heart on a recipe to keep it here.</p>
          <Link to="/" className="mt-4 inline-flex h-12 items-center rounded-full bg-sage px-5 text-sm font-semibold text-paper">
            Browse recipes
          </Link>
        </div>
      ) : null}

      {ready && saved.length > 0 ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : null}
    </Shell>
  );
}
