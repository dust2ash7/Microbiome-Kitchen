import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { lessons } from "@/data/tips";

export const Route = createFileRoute("/tips")({
  component: TipsPage,
  head: () => ({
    meta: [{ title: "Beginner tips · Microbiome Kitchen" }],
  }),
});

function TipsPage() {
  return (
    <Shell>
      <p className="text-sm font-semibold tracking-wide text-sage uppercase">Beginner tips</p>
      <h1 className="mt-2 font-display text-4xl">Before you pick up the knife</h1>
      <p className="mt-3 max-w-xl text-muted">
        Six short lessons. None of them assume you have cooked much. The recipes repeat these ideas where they matter.
      </p>
      <div className="mt-6 space-y-4">
        {lessons.map((lesson, index) => (
          <article key={lesson.id} className="rounded-card bg-paper p-5 ring-1 ring-line">
            <p className="text-sm font-semibold text-clay tabular-nums">Lesson {index + 1}</p>
            <h2 className="mt-1 font-display text-2xl">{lesson.title}</h2>
            <p className="mt-2 text-muted">{lesson.summary}</p>
            <ol className="mt-4 space-y-3">
              {lesson.points.map((point, pointIndex) => (
                <li key={point} className="flex gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-sage-soft text-sm font-semibold text-sage tabular-nums">
                    {pointIndex + 1}
                  </span>
                  <p className="text-base">{point}</p>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted">
        Ready to cook?{" "}
        <Link to="/" className="font-semibold text-sage">
          Start with a recipe.
        </Link>
      </p>
    </Shell>
  );
}
