export const AISLES = [
  "Produce",
  "Proteins",
  "Dairy & Fermented",
  "Nuts & Seeds",
  "Frozen",
  "Pantry",
] as const;

export type Aisle = (typeof AISLES)[number];

export type DietTag = "vegetarian" | "dairy-free" | "gluten-free";

export type MealTag = "Breakfast" | "Lunch" | "Dinner" | "Salads" | "Snacks" | "Desserts";

export type Ingredient = {
  name: string;
  plural?: string;
  qty: number;
  unit: string;
  aisle: Aisle;
  prepId?: string;
  note?: string;
};

export type Prep = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  steps: string[];
  mistakes: string[];
};

export type Step = {
  title: string;
  detail: string;
};

export type Recipe = {
  id: string;
  title: string;
  blurb: string;
  meals: MealTag[];
  fermented: boolean;
  diets: DietTag[];
  prepMin: number;
  cookMin: number;
  rest?: string;
  servings: number;
  proteinG: number;
  fiberG: number;
  micros: string[];
  gutNote: string;
  image: string;
  tools: string[];
  ingredients: Ingredient[];
  steps: Step[];
  prepIds: string[];
  simpler: string[];
  boosters: string[];
};

export const CATEGORIES = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Salads",
  "Snacks",
  "Desserts",
  "High-Protein",
  "Fermented Foods",
  "Fiber-Rich",
  "Quick Meals",
] as const;

export type Category = (typeof CATEGORIES)[number];
