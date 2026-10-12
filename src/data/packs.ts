import { formatIngredient } from "@/data/format";

export type StorePack =
  | { kind: "staple"; each: string; shelf: string }
  | { kind: "pack"; size: number; each: string; plural?: string; shelf: string };

/** How a named ingredient is actually sold, in the same unit the recipes use. */
const PACKS: Record<string, StorePack> = {
  "plain greek yogurt": { kind: "pack", size: 4, each: "container", plural: "containers", shelf: "32 oz tub, about 4 cups" },
  "plain cottage cheese": { kind: "pack", size: 2, each: "container", plural: "containers", shelf: "16 oz tub, about 2 cups" },
  "plain unsweetened kefir": { kind: "pack", size: 4, each: "bottle", plural: "bottles", shelf: "32 oz bottle, about 4 cups" },
  "feta cheese": { kind: "pack", size: 6, each: "container", plural: "containers", shelf: "6 oz tub" },
  blueberries: { kind: "pack", size: 2, each: "pint", plural: "pints", shelf: "1 pint is about 2 cups" },
  raspberries: { kind: "pack", size: 1.25, each: "container", plural: "containers", shelf: "6 oz container" },
  strawberries: { kind: "pack", size: 2, each: "container", plural: "containers", shelf: "1 lb clamshell" },
  "mixed berries": { kind: "pack", size: 1.25, each: "container", plural: "containers", shelf: "6 oz container" },
  "red grapes": { kind: "pack", size: 2, each: "bag", plural: "bags", shelf: "about 2 cups per small bag, or buy a bunch" },
  "hemp seeds": { kind: "pack", size: 16, each: "bag", plural: "bags", shelf: "a small bag covers many tablespoons" },
  "walnut pieces": { kind: "pack", size: 16, each: "bag", plural: "bags", shelf: "4 oz bag" },
  "raw almonds": { kind: "pack", size: 16, each: "bag", plural: "bags", shelf: "a small bag" },
  "pumpkin seeds": { kind: "pack", size: 16, each: "bag", plural: "bags", shelf: "a small bag" },
  "chia seeds": { kind: "pack", size: 16, each: "bag", plural: "bags", shelf: "a small bag covers many tablespoons" },
  broccoli: { kind: "pack", size: 4, each: "head", plural: "heads", shelf: "1 head is about 4 cups of florets" },
  "baby spinach": { kind: "pack", size: 4, each: "bag", plural: "bags", shelf: "5 oz bag, about 4 cups" },
  "mixed salad greens": { kind: "pack", size: 6, each: "clamshell", plural: "clamshells", shelf: "5 oz clamshell, about 6 cups" },
  "romaine lettuce": { kind: "pack", size: 1, each: "head", plural: "heads", shelf: "1 head" },
  "butter lettuce": { kind: "pack", size: 8, each: "head", plural: "heads", shelf: "1 head is about 8 leaves" },
  garlic: { kind: "pack", size: 10, each: "head", plural: "heads", shelf: "1 head is about 10 cloves" },
  "fresh ginger": { kind: "pack", size: 4, each: "knob", plural: "knobs", shelf: "a small hand of ginger" },
  "fresh parsley": { kind: "pack", size: 0.5, each: "bunch", plural: "bunches", shelf: "1 bunch is about ½ cup chopped" },
  "green onion": { kind: "pack", size: 1, each: "bunch", plural: "bunches", shelf: "1 bunch" },
  "snap peas": { kind: "pack", size: 2, each: "bag", plural: "bags", shelf: "8 oz bag, about 2 cups" },
  "cherry tomatoes": { kind: "pack", size: 2, each: "pint", plural: "pints", shelf: "1 pint is about 2 cups" },
  "raw sauerkraut": { kind: "pack", size: 2, each: "jar", plural: "jars", shelf: "16 oz refrigerated jar" },
  "chicken breast": { kind: "pack", size: 16, each: "lb package", plural: "lb packages", shelf: "1 lb package" },
  "boneless chicken thighs": { kind: "pack", size: 1.5, each: "package", plural: "packages", shelf: "about a 1.5 lb tray" },
  "ground turkey": { kind: "pack", size: 1, each: "lb package", plural: "lb packages", shelf: "1 lb package" },
  "fresh turkey sausage": { kind: "pack", size: 16, each: "lb package", plural: "lb packages", shelf: "1 lb package, plain if you can find it" },
  "sirloin or flank steak": { kind: "pack", size: 16, each: "lb package", plural: "lb packages", shelf: "about 1 lb" },
  "raw shrimp": { kind: "pack", size: 1, each: "lb bag", plural: "lb bags", shelf: "1 lb bag" },
  "large egg": { kind: "pack", size: 12, each: "dozen", plural: "dozen", shelf: "one dozen carton" },
  "egg whites": { kind: "pack", size: 2, each: "carton", plural: "cartons", shelf: "16 oz carton, about 2 cups" },
  "chickpea pasta": { kind: "pack", size: 8, each: "box", plural: "boxes", shelf: "8 oz box" },
  "canned tuna in water": { kind: "pack", size: 1, each: "can", plural: "cans", shelf: "5 oz can" },
  "no-salt-added black beans": { kind: "pack", size: 1, each: "can", plural: "cans", shelf: "15 oz can" },
  "canned chickpeas": { kind: "pack", size: 1, each: "can", plural: "cans", shelf: "15 oz can" },
  "no-salt-added crushed tomatoes": { kind: "pack", size: 1, each: "can", plural: "cans", shelf: "15 oz can" },
  quinoa: { kind: "pack", size: 2.5, each: "bag", plural: "bags", shelf: "1 lb bag, about 2½ cups dry" },
  "brown or green lentils": { kind: "pack", size: 2.25, each: "bag", plural: "bags", shelf: "1 lb bag" },
  "rolled oats": { kind: "pack", size: 5, each: "canister", plural: "canisters", shelf: "18 oz canister" },
  "brussels sprouts": { kind: "pack", size: 1, each: "lb bag", plural: "lb bags", shelf: "1 lb bag, or loose by the pound" },
  "russet potato": { kind: "pack", size: 1, each: "lb", plural: "lb", shelf: "loose, by the pound" },
  "yukon gold potato": { kind: "pack", size: 1, each: "lb", plural: "lb", shelf: "loose, by the pound" },
  cauliflower: { kind: "pack", size: 1, each: "head", plural: "heads", shelf: "1 head" },
  "frozen banana": { kind: "pack", size: 5, each: "bag", plural: "bags", shelf: "a small bag, or freeze ripe bananas yourself" },
  "dark chocolate 70%": { kind: "pack", size: 3.5, each: "bar", plural: "bars", shelf: "a 3.5 oz bar" },
  "almond butter": { kind: "staple", each: "jar", shelf: "One jar lasts. Buy it only if you are out." },
  honey: { kind: "staple", each: "jar", shelf: "One jar lasts. Buy it only if you are out." },
  "ground cinnamon": { kind: "staple", each: "jar", shelf: "Check the spice shelf. Buy a jar only if you are out." },
  "extra-virgin olive oil": { kind: "staple", each: "bottle", shelf: "One bottle lasts many meals. Buy it only if you are low." },
  "sweet paprika": { kind: "staple", each: "jar", shelf: "Check the spice shelf. Buy a jar only if you are out." },
  "kosher salt": { kind: "staple", each: "box", shelf: "You almost certainly have this. Buy a box only if you are out." },
  "black pepper": { kind: "staple", each: "jar", shelf: "Check the grinder. Buy one only if you are out." },
  "dried thyme": { kind: "staple", each: "jar", shelf: "Check the spice shelf. Buy a jar only if you are out." },
  "bay leaf": { kind: "staple", each: "jar", shelf: "A jar of bay leaves lasts. Buy it only if you are out." },
  "white rice miso": { kind: "staple", each: "tub", shelf: "One tub lasts. Keep it in the fridge after opening." },
  "apple cider vinegar": { kind: "staple", each: "bottle", shelf: "One bottle lasts. Buy it only if you are out." },
  "ground cumin": { kind: "staple", each: "jar", shelf: "Check the spice shelf. Buy a jar only if you are out." },
  "dried oregano": { kind: "staple", each: "jar", shelf: "Check the spice shelf. Buy a jar only if you are out." },
  "unsweetened cocoa powder": { kind: "staple", each: "tin", shelf: "One tin lasts. Buy it only if you are out." },
};

const WHOLE = new Set(["", "medium", "small", "large", "fillet", "stalk", "bunch", "head", "leaf", "can", "clove"]);

function packNoun(count: number, pack: Extract<StorePack, { kind: "pack" }>) {
  if (count <= 1.01) return pack.each;
  return pack.plural ?? (pack.each.endsWith("s") ? pack.each : `${pack.each}s`);
}

export function shopFor(
  item: { qty: number; unit: string; name: string; plural?: string },
  rounds: number,
): { buy: string; detail: string } {
  const need = Math.max(0.01, item.qty * rounds);
  const use = `Recipes use about ${formatIngredient(need, item.unit, item.name, item.plural)}`;
  const pack = PACKS[item.name.toLowerCase()];
  if (!pack) {
    const buyQty = WHOLE.has(item.unit) ? Math.ceil(need - 1e-6) : need;
    return {
      buy: formatIngredient(buyQty, item.unit, item.name, item.plural),
      detail: buyQty - need > 0.05 ? `${use}. Rounded up so you are not short.` : use,
    };
  }
  if (pack.kind === "staple") {
    return { buy: `1 ${pack.each} ${item.name}`, detail: `${pack.shelf} ${use}.` };
  }
  const count = Math.max(1, Math.ceil(need / pack.size - 1e-9));
  return {
    buy: `${count} ${packNoun(count, pack)} ${item.name}`,
    detail: `${pack.shelf}. ${use}.`,
  };
}
