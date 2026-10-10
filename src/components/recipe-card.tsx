import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { categoriesOf } from "@/data/recipes";
import type { Recipe } from "@/data/types";
import { publicAsset } from "@/lib/public-asset";
import { cn } from "@/lib/utils";
import { useKitchen } from "@/store/kitchen";

export function RecipeCard({ recipe, priority = false }: { recipe: Recipe; priority?: boolean }) {
  const favorite = useKitchen((state) => state.favorites.includes(recipe.id));
  const toggleFavorite = useKitchen((state) => state.toggleFavorite);
  const meal = recipe.meals[0];
  const minutes = recipe.prepMin + recipe.cookMin;

  return (
    <article className="relative overflow-hidden rounded-card bg-paper ring-1 ring-line">
      <button
        type="button"
        aria-pressed={favorite}
        aria-label={favorite ? `Remove ${recipe.title} from saved` : `Save ${recipe.title}`}
        onClick={() => toggleFavorite(recipe.id)}
        className="absolute top-3 right-3 z-10 flex size-11 items-center justify-center rounded-full bg-paper/95 text-ink shadow-sm ring-1 ring-line"
      >
        <Heart className={cn("size-5", favorite ? "fill-clay text-clay" : "text-ink")} />
      </button>
      <Link to="/recipe/$id" params={{ id: recipe.id }} className="block">
        <img
          src={publicAsset(recipe.image)}
          alt={recipe.title}
          loading={priority ? "eager" : "lazy"}
          className="aspect-dish w-full object-cover"
        />
        <div className="space-y-2 p-4">
          <p className="text-xs font-semibold tracking-wide text-clay uppercase">{meal}</p>
          <h2 className="font-display text-xl text-ink">{recipe.title}</h2>
          <p className="line-clamp-2 text-sm text-muted">{recipe.blurb}</p>
          <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted tabular-nums">
            <span>{minutes} min</span>
            <span>{recipe.proteinG}g protein</span>
            <span>{recipe.fiberG}g fiber</span>
          </p>
          <p className="sr-only">{categoriesOf(recipe).join(", ")}</p>
        </div>
      </Link>
    </article>
  );
}
