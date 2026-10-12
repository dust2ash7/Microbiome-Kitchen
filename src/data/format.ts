const FRACS: [number, string][] = [
  [0.25, "¼"],
  [0.33, "⅓"],
  [0.5, "½"],
  [0.67, "⅔"],
  [0.75, "¾"],
];

export function formatQty(n: number): string {
  if (!Number.isFinite(n) || n <= 0) return "0";
  const rounded = Math.round(n * 100) / 100;
  const whole = Math.floor(rounded + 1e-6);
  const frac = rounded - whole;
  const match = FRACS.find(([value]) => Math.abs(frac - value) < 0.05);
  if (whole === 0 && match) return match[1];
  if (match) return `${whole} ${match[1]}`;
  if (frac < 0.05) return String(whole);
  const one = Math.round(rounded * 10) / 10;
  return String(one);
}

const UNIT_PLURAL: Record<string, string> = {
  cup: "cups",
  clove: "cloves",
  fillet: "fillets",
  stalk: "stalks",
  egg: "eggs",
  large: "large",
  medium: "medium",
  small: "small",
  bunch: "bunches",
  slice: "slices",
  breast: "breasts",
  pepper: "peppers",
  lemon: "lemons",
  avocado: "avocados",
  carrot: "carrots",
  onion: "onions",
  sprig: "sprigs",
  head: "heads",
  leaf: "leaves",
  pinch: "pinches",
  tbsp: "tbsp",
  tsp: "tsp",
  oz: "oz",
  lb: "lb",
};

export function pluralUnit(unit: string, qty: number): string {
  if (!unit) return "";
  if (qty <= 1.01) return unit;
  return UNIT_PLURAL[unit] ?? (unit.endsWith("s") ? unit : `${unit}s`);
}

const SIZE_UNITS = new Set(["large", "medium", "small"]);

export function formatIngredient(qty: number, unit: string, name: string, plural?: string): string {
  const amount = formatQty(qty);
  const noun = qty > 1.01 && plural ? plural : name;
  if (!unit) return `${amount} ${noun}`;
  if (SIZE_UNITS.has(unit)) return `${amount} ${unit} ${noun}`;
  return `${amount} ${pluralUnit(unit, qty)} ${noun}`;
}

export function roundCook(n: number, unit: string): number {
  if (n <= 0) return 0;
  if (unit === "tsp" || unit === "tbsp" || unit === "cup" || unit === "lb") {
    return Math.round(n * 4) / 4;
  }
  if (unit === "oz") return Math.max(1, Math.round(n));
  return Math.round(n * 2) / 2;
}

export function qtyStep(unit: string): number {
  if (unit === "tsp" || unit === "tbsp" || unit === "cup" || unit === "lb") return 0.25;
  if (unit === "oz") return 1;
  return 0.5;
}

export function activeMinutes(prepMin: number, cookMin: number): number {
  return prepMin + cookMin;
}
