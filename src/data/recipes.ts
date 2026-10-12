import type { Aisle, Ingredient, Recipe } from "@/data/types";
import { moreRecipes } from "@/data/more-recipes";

function ing(
  name: string,
  qty: number,
  unit: string,
  aisle: Aisle,
  extra?: Partial<Pick<Ingredient, "plural" | "prepId" | "note">>,
): Ingredient {
  return { name, qty, unit, aisle, ...extra };
}

export const recipes: Recipe[] = [
  {
    id: "greek-yogurt-berry-bowl",
    title: "Greek Yogurt Berry Power Bowl",
    blurb: "Thick yogurt, berries, and seeds. Ten minutes, one bowl, no stove.",
    meals: ["Breakfast", "Snacks"],
    fermented: true,
    diets: ["vegetarian", "gluten-free"],
    prepMin: 8,
    cookMin: 0,
    servings: 1,
    proteinG: 28,
    fiberG: 6,
    micros: ["Live cultures", "Polyphenols", "Calcium"],
    gutNote:
      "Plain Greek yogurt still has live cultures, which help keep a gut community diverse. The color in berries is polyphenols — plant compounds your microbes can turn into signals that travel the gut-brain axis, the nerve and chemical line between your gut and your brain. Hemp and berries also bring prebiotic fiber, which is simply food for beneficial bacteria.",
    image: "/dishes/greek-yogurt-berry-bowl.jpg",
    tools: ["A bowl", "A spoon", "A cutting board and knife for the strawberries and walnuts"],
    ingredients: [
      ing("plain Greek yogurt", 1, "cup", "Dairy & Fermented"),
      ing("blueberries", 0.25, "cup", "Produce", { prepId: "wash-berries" }),
      ing("raspberries", 0.25, "cup", "Produce", { prepId: "wash-berries" }),
      ing("strawberries", 0.25, "cup", "Produce", { prepId: "wash-berries", note: "hulled and sliced" }),
      ing("hemp seeds", 2, "tbsp", "Nuts & Seeds"),
      ing("walnut pieces", 1, "tbsp", "Nuts & Seeds", { prepId: "chop-nuts" }),
      ing("honey", 1, "tsp", "Pantry"),
      ing("ground cinnamon", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["wash-berries", "chop-nuts"],
    steps: [
      {
        title: "Set the bowl and wash the fruit",
        detail:
          "Put the yogurt in a wide bowl so you can see the toppings. Rinse the berries in a colander right before you use them, then pat them dry on a towel. Wet berries make the yogurt watery.",
      },
      {
        title: "Hull and slice the strawberries",
        detail:
          "Cut out the green cap. Slice the berry into pieces about the thickness of a coin. Leave blueberries and raspberries whole unless they are very large.",
      },
      {
        title: "Chop the walnuts",
        detail:
          "A rough chop is enough. Pieces about the size of a pea give you crunch without turning into dust. If your walnuts taste bitter or smell like paint, they are old — skip them.",
      },
      {
        title: "Assemble and eat",
        detail:
          "Scatter the berries, hemp seeds, and walnuts over the yogurt. Drizzle the honey and dust the cinnamon. Eat it cold. If you want it tomorrow, keep the toppings separate so the nuts stay crisp.",
      },
    ],
    simpler: [
      "No knife needed: use blueberries only, and leave the walnuts in halves.",
      "Frozen berries are fine. Thaw a handful in the bowl for five minutes, then drain the liquid so the yogurt stays thick.",
    ],
    boosters: [
      "A pinch of orange zest on top brightens the berries.",
      "Stir in a spoon of plain kefir if you want a looser, tangier bowl with another fermented food.",
    ],
  },
  {
    id: "sheet-pan-salmon",
    title: "Sheet-Pan Salmon with Roasted Broccoli and Sweet Potato",
    blurb: "One pan, even pieces, and a lemon finish. A full dinner for two.",
    meals: ["Dinner"],
    fermented: false,
    diets: ["dairy-free", "gluten-free"],
    prepMin: 15,
    cookMin: 22,
    servings: 2,
    proteinG: 36,
    fiberG: 8,
    micros: ["Omega-3s", "Vitamin A", "Vitamin C"],
    gutNote:
      "Salmon’s omega-3 fats are one of the better-studied links between food and a calmer inflammatory tone, which matters for the gut lining and the gut-brain axis. Broccoli and sweet potato bring different fibers, and a mix of fibers feeds a wider set of bacteria than one vegetable alone. Leaving the sweet-potato skin on adds more of that fiber.",
    image: "/dishes/sheet-pan-salmon.jpg",
    tools: ["A large sheet pan", "Parchment paper if you have it", "A sharp knife and board", "Tongs or a spatula"],
    ingredients: [
      ing("salmon fillet", 2, "fillet", "Proteins", { note: "about 6 oz each, skin on or off" }),
      ing("broccoli", 4, "cup", "Produce", { prepId: "broccoli-florets", note: "bite-size florets and peeled stem" }),
      ing("sweet potato", 1, "large", "Produce", { plural: "sweet potatoes", prepId: "cube-sweet-potato" }),
      ing("extra-virgin olive oil", 1.5, "tbsp", "Pantry"),
      ing("garlic", 2, "clove", "Produce", { prepId: "mince-garlic" }),
      ing("lemon", 1, "", "Produce", { plural: "lemons", prepId: "lemon" }),
      ing("sweet paprika", 0.5, "tsp", "Pantry"),
      ing("kosher salt", 0.75, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["cube-sweet-potato", "broccoli-florets", "mince-garlic", "lemon"],
    steps: [
      {
        title: "Heat the oven and cut the vegetables",
        detail:
          "Set the oven to 425°F and move a rack to the middle. Cube the sweet potato and cut the broccoli while it heats. Pat the vegetables dry so they roast instead of steam. Line the pan if you want an easier cleanup.",
      },
      {
        title: "Season the pan",
        detail:
          "Toss the sweet potato and broccoli with the olive oil, minced garlic, paprika, salt, and pepper. Spread them in one layer. Crowded vegetables steam. Use two pans if you have to.",
      },
      {
        title: "Roast the vegetables first",
        detail:
          "Roast for 12 minutes. Sweet potato takes longer than salmon, so it gets a head start. The broccoli should be bright and just starting to brown at the edges.",
      },
      {
        title: "Add the salmon",
        detail:
          "Push the vegetables aside and lay the salmon on the pan. Sprinkle it with a pinch more salt and pepper. Roast 8 to 12 minutes more. It is done when the thickest part flakes when you twist a fork, and the center is just opaque. If you have a thermometer, 125 to 130°F is moist. Pull it before it looks dry.",
      },
      {
        title: "Finish with lemon",
        detail:
          "Squeeze half the lemon over the pan. Taste a potato. If it wants salt, add a pinch. Serve the salmon with a pile of vegetables. The second lemon half is for the table.",
      },
    ],
    simpler: [
      "Buy pre-cut broccoli florets. Still cube the sweet potato yourself so the pieces match.",
      "If the salmon is done before the potato, take the fish off and give the potato five more minutes.",
    ],
    boosters: [
      "Scatter chopped parsley on at the end.",
      "A spoon of plain yogurt on the side adds a fermented contrast if you eat dairy.",
    ],
  },
  {
    id: "lentil-shepherds-pie",
    title: "Lentil and Vegetable Shepherd’s Pie",
    blurb: "A high-protein lentil filling under a yogurt mashed-potato cap. Real dinner, four servings.",
    meals: ["Dinner"],
    fermented: true,
    diets: ["vegetarian", "gluten-free"],
    prepMin: 25,
    cookMin: 45,
    servings: 4,
    proteinG: 28,
    fiberG: 12,
    micros: ["Folate", "Iron", "Potassium"],
    gutNote:
      "Lentils are one of the most reliable prebiotic foods: their fiber and resistant starch reach the colon and feed bacteria that produce short-chain fatty acids. Those acids help maintain the gut lining, which is part of how the gut talks to the brain. The potato topping uses yogurt instead of cream, so you also get a little fermented dairy.",
    image: "/dishes/lentil-shepherds-pie.jpg",
    tools: ["A medium pot", "A wide skillet or second pot", "A baking dish about 8 by 8 inches", "A knife and board", "A potato masher or fork"],
    ingredients: [
      ing("brown or green lentils", 1.5, "cup", "Pantry", { prepId: "rinse-lentils", note: "dry, not red lentils" }),
      ing("russet potato", 1.5, "lb", "Produce", { prepId: "cube-potato" }),
      ing("plain Greek yogurt", 0.5, "cup", "Dairy & Fermented"),
      ing("large egg", 2, "", "Proteins", { plural: "large eggs" }),
      ing("yellow onion", 1, "medium", "Produce", { plural: "yellow onions", prepId: "dice-onion" }),
      ing("carrot", 2, "medium", "Produce", { plural: "carrots", prepId: "dice-carrot" }),
      ing("celery", 2, "stalk", "Produce", { prepId: "dice-celery" }),
      ing("garlic", 3, "clove", "Produce", { prepId: "mince-garlic" }),
      ing("ripe tomato", 2, "medium", "Produce", { plural: "ripe tomatoes", prepId: "dice-tomato" }),
      ing("extra-virgin olive oil", 2, "tbsp", "Pantry"),
      ing("dried thyme", 1, "tsp", "Pantry"),
      ing("bay leaf", 1, "", "Pantry", { plural: "bay leaves" }),
      ing("kosher salt", 1.5, "tsp", "Pantry"),
      ing("black pepper", 0.5, "tsp", "Pantry"),
    ],
    prepIds: ["rinse-lentils", "dice-onion", "dice-carrot", "dice-celery", "mince-garlic", "dice-tomato", "cube-potato"],
    steps: [
      {
        title: "Simmer the lentils",
        detail:
          "Rinse the lentils and pick out any stones. Put them in a pot with the bay leaf and water to cover by two inches. Bring to a simmer and cook until tender, about 20 minutes. They should be soft but not mush. Drain them and discard the bay leaf.",
      },
      {
        title: "Start the potatoes",
        detail:
          "Cube the potatoes, cover them with cold water, and add a pinch of salt. Simmer until a fork slides in easily, about 15 minutes. Drain well and let them sit in the hot pot for a minute so steam leaves.",
      },
      {
        title: "Soften the vegetables",
        detail:
          "Warm the olive oil in a wide pan over medium heat. Add the onion, carrot, and celery with half the salt. Cook, stirring every minute or so, until the onion is soft and sweet, about 8 minutes. If the pan looks dry, add a spoon of water instead of more oil.",
      },
      {
        title: "Build the filling",
        detail:
          "Add the garlic and thyme. Stir for 30 seconds, until you can smell them. Add the diced tomato and cook until it collapses, about 4 minutes. Stir in the lentils, the eggs, the rest of the salt, and the pepper. The eggs raise the protein and help the filling set. Cook one more minute. Taste. It should be savory, not bland.",
      },
      {
        title: "Mash and assemble",
        detail:
          "Mash the potatoes with the yogurt and a pinch of salt. Stir until creamy. Spoon the lentil filling into the baking dish and spread the potatoes on top. Drag a fork across the surface so there are ridges to brown.",
      },
      {
        title: "Bake",
        detail:
          "Heat the oven to 400°F. Bake on the middle rack until the edges bubble and the top is golden in spots, about 20 minutes. Rest 5 minutes before you scoop. It keeps in the fridge for three days.",
      },
    ],
    simpler: [
      "Skip peeling the potatoes. The skins mash into a rustic topping and add fiber.",
      "No fresh tomatoes? Use one cup of crushed tomatoes whose only ingredient is tomatoes.",
    ],
    boosters: [
      "A handful of chopped parsley stirred in at the end.",
      "A spoon of whole-grain mustard in the potato mash, if you like a sharper flavor.",
    ],
  },
  {
    id: "chicken-stir-fry",
    title: "Chicken and Vegetable Stir-Fry with Ginger-Garlic Sauce",
    blurb: "A light sauce from ginger, garlic, lemon, and miso. No bottled stir-fry sauce.",
    meals: ["Dinner", "Lunch"],
    fermented: true,
    diets: ["dairy-free", "gluten-free"],
    prepMin: 15,
    cookMin: 12,
    servings: 2,
    proteinG: 36,
    fiberG: 7,
    micros: ["Vitamin C", "Gingerols", "Live cultures from miso"],
    gutNote:
      "A pile of different plants in one pan — broccoli, pepper, snap peas, carrot — gives your microbes more kinds of fiber than a single side vegetable. Miso is a fermented soybean paste; a small spoon adds savoriness and live-food tradition without a long ingredient list. Ginger and garlic are aromatic plants, used here for flavor, not as a supplement.",
    image: "/dishes/chicken-stir-fry.jpg",
    tools: ["A large skillet", "A knife and board", "A small bowl for the sauce", "Tongs"],
    ingredients: [
      ing("chicken breast", 12, "oz", "Proteins", { prepId: "cut-chicken" }),
      ing("broccoli", 3, "cup", "Produce", { prepId: "broccoli-florets" }),
      ing("bell pepper", 1, "", "Produce", { plural: "bell peppers", prepId: "dice-pepper" }),
      ing("snap peas", 1, "cup", "Produce"),
      ing("carrot", 1, "medium", "Produce", { plural: "carrots", prepId: "dice-carrot", note: "sliced into thin coins" }),
      ing("garlic", 3, "clove", "Produce", { prepId: "mince-garlic" }),
      ing("fresh ginger", 1, "tbsp", "Produce", { prepId: "slice-ginger", note: "minced" }),
      ing("white rice miso", 1, "tsp", "Pantry", { note: "rice miso keeps this gluten-free" }),
      ing("lemon", 0.5, "", "Produce", { plural: "lemons", prepId: "lemon" }),
      ing("apple cider vinegar", 1, "tbsp", "Pantry"),
      ing("honey", 1, "tsp", "Pantry"),
      ing("extra-virgin olive oil", 1.5, "tbsp", "Pantry"),
      ing("kosher salt", 0.5, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["cut-chicken", "broccoli-florets", "dice-pepper", "dice-carrot", "mince-garlic", "slice-ginger", "lemon"],
    steps: [
      {
        title: "Cut everything before the pan is hot",
        detail:
          "Slice the chicken, cut the vegetables, and mince the garlic and ginger. A stir-fry moves fast. If you stop to chop, the food in the pan burns. Wash the board and your hands after the raw chicken.",
      },
      {
        title: "Stir the sauce",
        detail:
          "In a small bowl, stir the miso with the lemon juice until it dissolves. Add the vinegar and honey. Set it by the stove. This replaces bottled sauce.",
      },
      {
        title: "Sear the chicken",
        detail:
          "Pat the chicken dry. Warm 1 tablespoon of oil in a large skillet over medium-high until it shimmers. Add the chicken in one layer with a pinch of salt and pepper. Leave it for 2 minutes so it browns, then stir and cook until no longer pink, about 3 minutes more. Move it to a plate.",
      },
      {
        title: "Cook the vegetables",
        detail:
          "Add the rest of the oil. Cook the carrot and broccoli for 3 minutes, stirring once or twice. Add the pepper and snap peas. Cook 2 minutes. They should be crisp-tender, not soft. A tablespoon of water and a lid for 30 seconds helps if the broccoli is still raw in the middle.",
      },
      {
        title: "Garlic, ginger, then sauce",
        detail:
          "Clear a bare spot in the pan. Add the garlic and ginger and stir them for 30 seconds, until fragrant. Return the chicken and any juices. Pour in the sauce and toss for 30 seconds. Taste. Add a pinch of salt if it needs it. Eat right away.",
      },
    ],
    simpler: [
      "Skip the miso. The lemon, vinegar, honey, garlic, and ginger still make a sauce. Add a pinch more salt.",
      "Use one vegetable you like if the full mix is too much chopping. Broccoli alone is a complete dinner with the chicken.",
    ],
    boosters: [
      "A handful of chopped cilantro or green onion at the end.",
      "A teaspoon of sesame seeds for crunch. They are a whole seed, not a sauce.",
    ],
  },
  {
    id: "egg-veggie-scramble",
    title: "Egg and Veggie Scramble with Avocado",
    blurb: "Soft eggs, spinach, tomato, and avocado. A breakfast you can cook half-awake.",
    meals: ["Breakfast"],
    fermented: true,
    diets: ["vegetarian", "gluten-free"],
    prepMin: 8,
    cookMin: 8,
    servings: 1,
    proteinG: 26,
    fiberG: 7,
    micros: ["Choline", "Folate", "Potassium"],
    gutNote:
      "Eggs and cottage cheese make this filling without a protein powder. Spinach and avocado add fiber and potassium, and the avocado’s fat helps you absorb some of the plant nutrients in the greens. Cottage cheese is a cultured dairy food, in the same family as yogurt.",
    image: "/dishes/egg-veggie-scramble.jpg",
    tools: ["A nonstick or well-seasoned skillet", "A spatula", "A knife and board"],
    ingredients: [
      ing("large egg", 3, "", "Proteins", { plural: "large eggs" }),
      ing("plain cottage cheese", 0.25, "cup", "Dairy & Fermented"),
      ing("baby spinach", 2, "cup", "Produce", { prepId: "chop-spinach" }),
      ing("ripe tomato", 0.5, "medium", "Produce", { plural: "ripe tomatoes", prepId: "dice-tomato" }),
      ing("avocado", 0.5, "", "Produce", { plural: "avocados", prepId: "slice-avocado" }),
      ing("extra-virgin olive oil", 1, "tsp", "Pantry"),
      ing("lemon", 0.25, "", "Produce", { plural: "lemons", prepId: "lemon" }),
      ing("kosher salt", 0.25, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["chop-spinach", "dice-tomato", "slice-avocado", "lemon"],
    steps: [
      {
        title: "Beat the eggs with the cottage cheese",
        detail:
          "Crack the eggs into a bowl. Add the cottage cheese, a pinch of salt, and the pepper. Beat with a fork until the yolks are broken and the cheese is in small curds. The cheese keeps the eggs tender and adds protein.",
      },
      {
        title: "Wilt the spinach",
        detail:
          "Warm the oil in a skillet over medium heat. Add the spinach and a pinch of salt. Stir until it collapses, about a minute. If a puddle of water appears, pour it off. Squeeze is better than boiling the eggs later.",
      },
      {
        title: "Scramble low and slow",
        detail:
          "Turn the heat to medium-low. Pour in the eggs. Let them sit 10 seconds, then push them gently from the edge toward the center with a spatula. Keep doing that. When they look mostly set but still glossy, about 2 to 3 minutes, take the pan off the heat. They finish cooking with leftover heat. Dry, browned eggs were left on too long.",
      },
      {
        title: "Tomato, avocado, lemon",
        detail:
          "Fold in the tomato off the heat so it warms but does not flood the eggs. Slice the avocado with a spoon for the pit — do not stab it — and set it beside the eggs. A squeeze of lemon on the avocado keeps the color and brightens the plate.",
      },
    ],
    simpler: [
      "Skip the tomato if you are short on time. Spinach and avocado are enough vegetables.",
      "No cottage cheese? The eggs still work. You will get a little less protein.",
    ],
    boosters: [
      "A few leaves of chopped dill or parsley.",
      "Chili flakes if you want heat. Add them to the eggs before cooking.",
    ],
  },
  {
    id: "turkey-quinoa-peppers",
    title: "Turkey and Quinoa Stuffed Bell Peppers",
    blurb: "Peppers as edible bowls. Turkey, quinoa, and zucchini, baked until the tops brown.",
    meals: ["Dinner", "Lunch"],
    fermented: false,
    diets: ["dairy-free", "gluten-free"],
    prepMin: 20,
    cookMin: 35,
    servings: 4,
    proteinG: 30,
    fiberG: 8,
    micros: ["Vitamin C", "Magnesium", "Iron"],
    gutNote:
      "Quinoa is a whole seed with fiber that survives cooking, and the peppers and zucchini add more plant variety. A wider mix of plants across the week is one of the simpler findings in microbiome research: different fibers feed different bacteria. Turkey keeps the meal high in protein so you stay full.",
    image: "/dishes/turkey-quinoa-peppers.jpg",
    tools: ["A small pot with a lid", "A skillet", "A baking dish", "A knife and board", "A fine mesh strainer"],
    ingredients: [
      ing("bell pepper", 4, "", "Produce", { plural: "bell peppers", prepId: "halve-pepper" }),
      ing("ground turkey", 1, "lb", "Proteins", { note: "93% lean if you can find it" }),
      ing("quinoa", 0.75, "cup", "Pantry", { prepId: "rinse-quinoa", note: "dry" }),
      ing("zucchini", 1, "medium", "Produce", { plural: "zucchini", prepId: "dice-zucchini" }),
      ing("yellow onion", 1, "small", "Produce", { plural: "yellow onions", prepId: "dice-onion" }),
      ing("garlic", 2, "clove", "Produce", { prepId: "mince-garlic" }),
      ing("extra-virgin olive oil", 1, "tbsp", "Pantry"),
      ing("ground cumin", 1, "tsp", "Pantry"),
      ing("sweet paprika", 1, "tsp", "Pantry"),
      ing("dried oregano", 1, "tsp", "Pantry"),
      ing("kosher salt", 1, "tsp", "Pantry"),
      ing("black pepper", 0.5, "tsp", "Pantry"),
      ing("fresh parsley", 0.5, "cup", "Produce", { prepId: "chop-herbs", note: "leaves, chopped" }),
      ing("lemon", 0.5, "", "Produce", { plural: "lemons", prepId: "lemon" }),
    ],
    prepIds: ["halve-pepper", "rinse-quinoa", "dice-zucchini", "dice-onion", "mince-garlic", "chop-herbs", "lemon"],
    steps: [
      {
        title: "Cook the quinoa",
        detail:
          "Rinse the quinoa in a fine strainer until the water runs less cloudy. Put it in a pot with 1 ½ cups water and a pinch of salt. Bring to a simmer, cover, and cook 15 minutes. Take it off the heat and leave the lid on for 5 minutes, then fluff with a fork. You can start chopping while it cooks.",
      },
      {
        title: "Prep the peppers",
        detail:
          "Heat the oven to 400°F. Halve the peppers and pull out the seeds. Set them cut side up in a baking dish. If they wobble, shave a tiny sliver off the bottom without cutting a hole.",
      },
      {
        title: "Cook the filling",
        detail:
          "Warm the oil in a skillet over medium heat. Soften the onion for 4 minutes. Add the turkey, salt, pepper, cumin, paprika, and oregano. Break the meat up with a spoon and cook until no longer pink, about 6 minutes. Add the zucchini and garlic and cook 2 minutes more. Stir in the quinoa, parsley, and lemon juice. Taste and fix the salt now. You will not be stirring it after it bakes.",
      },
      {
        title: "Fill and bake",
        detail:
          "Spoon the filling into the pepper halves and mound it slightly. Pour a few tablespoons of water into the bottom of the dish so the peppers steam a little. Bake until the peppers are tender when you pierce them with a knife and the tops are lightly browned, about 25 minutes.",
      },
      {
        title: "Rest, then eat",
        detail:
          "Wait 5 minutes. The filling settles. Leftover halves keep for three days and reheat well covered, in a 350°F oven or a skillet with a lid.",
      },
    ],
    simpler: [
      "Use two large peppers instead of four small ones if that is what the store has. The filling amount stays the same.",
      "Buy microwave quinoa pouches only if the ingredient list is just quinoa. Rinsing and simmering is the version that teaches the skill.",
    ],
    boosters: [
      "A spoon of plain yogurt on each pepper if you eat dairy.",
      "A pinch more cumin and a little extra lemon if you like it brighter.",
    ],
  },
  {
    id: "kefir-overnight-oats",
    title: "Kefir Overnight Oats with Nuts and Berries",
    blurb: "Stir it at night. Breakfast is already done, cold, and tangy.",
    meals: ["Breakfast"],
    fermented: true,
    diets: ["vegetarian", "gluten-free"],
    prepMin: 10,
    cookMin: 0,
    rest: "Overnight, at least 6 hours",
    servings: 1,
    proteinG: 26,
    fiberG: 11,
    micros: ["Live cultures", "Beta-glucan", "Polyphenols"],
    gutNote:
      "Oats contain beta-glucan, a soluble fiber that feeds beneficial bacteria and slows digestion so you stay full. Kefir is fermented milk with a wider mix of cultures than most yogurts. Together with berries, this is a simple way to get fiber, polyphenols, and a fermented food in the same bowl. Use certified gluten-free oats if you avoid gluten.",
    image: "/dishes/kefir-overnight-oats.jpg",
    tools: ["A jar or bowl with a lid", "A spoon"],
    ingredients: [
      ing("rolled oats", 0.5, "cup", "Pantry", { note: "not steel-cut; certified gluten-free if needed" }),
      ing("plain unsweetened kefir", 0.75, "cup", "Dairy & Fermented"),
      ing("plain Greek yogurt", 0.5, "cup", "Dairy & Fermented"),
      ing("chia seeds", 1, "tbsp", "Nuts & Seeds"),
      ing("mixed berries", 0.5, "cup", "Produce", { prepId: "wash-berries" }),
      ing("raw almonds", 1, "tbsp", "Nuts & Seeds", { prepId: "chop-nuts", note: "chopped" }),
      ing("ground cinnamon", 0.25, "tsp", "Pantry"),
      ing("honey", 1, "tsp", "Pantry"),
    ],
    prepIds: ["wash-berries", "chop-nuts"],
    steps: [
      {
        title: "Stir the base",
        detail:
          "In a jar, stir the oats, kefir, yogurt, chia, cinnamon, and honey. The chia and oats both drink liquid. It should look soupy tonight. It will be thick in the morning. Scrape the sides so dry oats do not hide.",
      },
      {
        title: "Refrigerate",
        detail:
          "Cover and refrigerate at least 6 hours, and up to two nights. Do not leave it on the counter. Kefir is already cultured; the fridge keeps it in the range you want.",
      },
      {
        title: "Check the texture",
        detail:
          "In the morning, stir. If it is stiffer than you like, splash in a little more kefir. If it is thin, you measured light on the oats — it is still good to eat, just more like a drinkable bowl.",
      },
      {
        title: "Add the fruit and nuts",
        detail:
          "Rinse and dry the berries. Chop the almonds. Put them on top just before you eat so they stay fresh and crunchy. The honey is already in the base; add another drop only if you want it sweeter.",
      },
    ],
    simpler: [
      "Make two jars on Sunday. Breakfast is then grab-and-go for two mornings.",
      "No kefir this week? Use all Greek yogurt and add a splash of milk so the oats can soften.",
    ],
    boosters: [
      "A tablespoon of pumpkin seeds on top.",
      "Lemon zest stirred in at night makes the berries taste brighter.",
    ],
  },
  {
    id: "grilled-chicken-salad",
    title: "Grilled Chicken Salad with Fermented Vegetables",
    blurb: "Warm chicken, a big pile of greens, and sauerkraut for something sour and alive.",
    meals: ["Lunch", "Dinner"],
    fermented: true,
    diets: ["dairy-free", "gluten-free"],
    prepMin: 15,
    cookMin: 12,
    servings: 2,
    proteinG: 36,
    fiberG: 6,
    micros: ["Vitamin K", "Live cultures", "Vitamin C"],
    gutNote:
      "Sauerkraut is cabbage fermented with salt. Unpasteurized, from the fridge, it still contains live cultures. The greens, cucumber, and tomato add fiber and polyphenols, and the olive oil helps you absorb them. This is a straight example of the pattern in this app: protein, plants, a fermented food, and a simple fat.",
    image: "/dishes/grilled-chicken-salad.jpg",
    tools: ["A skillet or grill pan", "A large bowl", "A knife and board", "Tongs"],
    ingredients: [
      ing("chicken breast", 12, "oz", "Proteins", { prepId: "cut-chicken", note: "or two smaller breasts, left whole" }),
      ing("mixed salad greens", 6, "cup", "Produce"),
      ing("raw sauerkraut", 1, "cup", "Dairy & Fermented", { note: "from the refrigerator case, drained" }),
      ing("cucumber", 1, "medium", "Produce", { plural: "cucumbers", prepId: "slice-cucumber" }),
      ing("cherry tomatoes", 1, "cup", "Produce"),
      ing("red onion", 0.25, "small", "Produce", { plural: "red onions", prepId: "dice-onion", note: "thinly sliced" }),
      ing("extra-virgin olive oil", 2, "tbsp", "Pantry"),
      ing("lemon", 1, "", "Produce", { plural: "lemons", prepId: "lemon" }),
      ing("dried oregano", 0.5, "tsp", "Pantry"),
      ing("kosher salt", 0.5, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["cut-chicken", "slice-cucumber", "dice-onion", "lemon"],
    steps: [
      {
        title: "Season the chicken",
        detail:
          "Pat the chicken dry. Rub it with 1 teaspoon of the oil, half the salt, the pepper, and the oregano. If the breast is thicker than your thumb, slice it in half horizontally so it cooks through without drying.",
      },
      {
        title: "Cook the chicken",
        detail:
          "Heat a skillet over medium-high. Add a teaspoon of oil. Lay the chicken in and leave it for 4 minutes without moving it, so a light crust forms. Flip and cook another 4 to 6 minutes. Cut into the thickest part: it should be opaque, not shiny or pink. Rest it on a plate for 3 minutes, then slice across the grain.",
      },
      {
        title: "Make the dressing in the bowl",
        detail:
          "In a large bowl, stir the rest of the olive oil with the juice of half the lemon and a pinch of salt. Add the greens, cucumber, tomatoes, and onion. Toss with your hands or tongs until the leaves shine. Taste a leaf. Add more lemon if it tastes flat.",
      },
      {
        title: "Add chicken and sauerkraut",
        detail:
          "Put the salad on plates. Lay the chicken on top. Add the sauerkraut in a small pile so you can taste it on its own — it is salty and sour, and tossing it through the whole salad can overwhelm the greens. Drain it so you are not pouring brine on the leaves.",
      },
    ],
    simpler: [
      "No skillet confidence yet? Bake the seasoned chicken at 400°F for about 18 minutes, until opaque in the center.",
      "Skip the onion if raw onion is too sharp. The salad still works.",
    ],
    boosters: [
      "A few walnut pieces for crunch and fat.",
      "Chopped dill or parsley over the top.",
    ],
  },
  {
    id: "cottage-cheese-bowl",
    title: "Cottage Cheese Power Bowl with Berries, Nuts, and Seeds",
    blurb: "A cold, high-protein snack that takes less time than making coffee.",
    meals: ["Breakfast", "Snacks"],
    fermented: true,
    diets: ["vegetarian", "gluten-free"],
    prepMin: 5,
    cookMin: 0,
    servings: 1,
    proteinG: 30,
    fiberG: 5,
    micros: ["Calcium", "Polyphenols", "Magnesium"],
    gutNote:
      "Cottage cheese is a cultured cheese, so it sits with yogurt and kefir as a fermented dairy food, and a full cup is genuinely high in protein. Berries add polyphenols. Pumpkin seeds and walnuts add minerals and a little fiber. It is not a fiber monster — pair it later in the day with a vegetable-heavy dinner if you want more plants.",
    image: "/dishes/cottage-cheese-bowl.jpg",
    tools: ["A bowl", "A spoon", "A knife if you are chopping nuts"],
    ingredients: [
      ing("plain cottage cheese", 1, "cup", "Dairy & Fermented"),
      ing("blueberries", 0.25, "cup", "Produce", { prepId: "wash-berries" }),
      ing("raspberries", 0.25, "cup", "Produce", { prepId: "wash-berries" }),
      ing("pumpkin seeds", 2, "tbsp", "Nuts & Seeds"),
      ing("walnut pieces", 1, "tbsp", "Nuts & Seeds", { prepId: "chop-nuts" }),
      ing("ground cinnamon", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["wash-berries", "chop-nuts"],
    steps: [
      {
        title: "Spoon the cottage cheese",
        detail:
          "Use a full cup. Low-fat and whole-milk both work. If the tub says fruit-on-the-bottom or has added sugar in the ingredients, pick a different one. You want milk, cream, salt, and cultures.",
      },
      {
        title: "Rinse and top",
        detail:
          "Rinse the berries and pat them dry. Chop the walnuts roughly. Scatter berries, pumpkin seeds, and walnuts over the cheese. Dust with cinnamon. Eat cold.",
      },
    ],
    simpler: [
      "Keep a jar of pumpkin seeds and a pint of berries in the house and this becomes a default snack.",
      "If berries are out of season, frozen ones thawed and drained are fine.",
    ],
    boosters: [
      "A teaspoon of honey if you want it sweeter.",
      "A few slices of ripe pear when you have one. That also bumps the fiber.",
    ],
  },
  {
    id: "baked-cod-asparagus",
    title: "Baked Cod with Asparagus, Lemon, and Garlic",
    blurb: "A gentle fish dinner. The oven does the work while you trim the asparagus.",
    meals: ["Dinner"],
    fermented: false,
    diets: ["dairy-free", "gluten-free"],
    prepMin: 10,
    cookMin: 15,
    servings: 2,
    proteinG: 32,
    fiberG: 4,
    micros: ["Iodine", "Vitamin K", "Selenium"],
    gutNote:
      "White fish like cod is a lean protein that is easy to digest, which helps on days when a heavy meal does not sound good. Asparagus contains inulin, a type of prebiotic fiber, in modest amounts — useful, not magical. Garlic and lemon keep the dish flavorful without a creamy sauce.",
    image: "/dishes/baked-cod-asparagus.jpg",
    tools: ["A sheet pan", "Parchment if you have it", "A knife and board"],
    ingredients: [
      ing("cod fillet", 2, "fillet", "Proteins", { note: "about 6 oz each" }),
      ing("asparagus", 1, "bunch", "Produce", { prepId: "trim-asparagus" }),
      ing("garlic", 2, "clove", "Produce", { prepId: "mince-garlic" }),
      ing("lemon", 1, "", "Produce", { plural: "lemons", prepId: "lemon" }),
      ing("extra-virgin olive oil", 1, "tbsp", "Pantry"),
      ing("fresh parsley", 0.25, "cup", "Produce", { prepId: "chop-herbs" }),
      ing("kosher salt", 0.5, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["trim-asparagus", "mince-garlic", "lemon", "chop-herbs"],
    steps: [
      {
        title: "Heat the oven and prep",
        detail:
          "Heat the oven to 400°F. Trim the asparagus by snapping one spear and cutting the rest to match. Mince the garlic. Pat the cod dry with a paper towel. Wet fish steams and tastes flat.",
      },
      {
        title: "Dress the pan",
        detail:
          "Toss the asparagus with most of the oil, half the salt, the pepper, and the garlic. Spread it on the pan. Lay the cod beside it. Drizzle the fish with the rest of the oil and a pinch of salt and pepper. Lay two thin lemon slices on each fillet if you like, and save the other half of the lemon to squeeze later.",
      },
      {
        title: "Bake until the fish flakes",
        detail:
          "Bake 12 to 15 minutes. Cod is done when it flakes easily and looks opaque, not glassy, in the center. Asparagus should be tender when you pierce the thick end, with a little browning. If the fish finishes first, take it off and give the asparagus a few more minutes.",
      },
      {
        title: "Lemon and parsley",
        detail:
          "Squeeze the remaining lemon over everything and scatter the parsley. Fish dries out if it sits in a hot pan, so eat it soon. Leftovers are best cold, flaked over greens, the next day.",
      },
    ],
    simpler: [
      "Any mild white fish works: haddock, pollock, or tilapia. Thinner fillets need less time. Start checking at 10 minutes.",
      "Frozen cod is fine if you thaw it overnight in the fridge and pat it very dry.",
    ],
    boosters: [
      "A few capers, rinsed, if you like a salty pop.",
      "Chili flakes on the asparagus before it bakes.",
    ],
  },
  {
    id: "turkey-meatballs-zoodles",
    title: "Turkey Meatballs with Zucchini Noodles and Tomato Sauce",
    blurb: "Meatballs bound with zucchini instead of breadcrumbs, and a tomato sauce you cook yourself.",
    meals: ["Dinner"],
    fermented: false,
    diets: ["dairy-free", "gluten-free"],
    prepMin: 20,
    cookMin: 25,
    servings: 4,
    proteinG: 28,
    fiberG: 4,
    micros: ["Lycopene", "Vitamin B12", "Potassium"],
    gutNote:
      "Cooking tomatoes makes lycopene easier to absorb, especially with olive oil. Zucchini ribbons stand in for pasta so the plate stays vegetable-heavy, though they are lighter on fiber than beans or lentils. Turkey keeps the protein high. This is a weeknight plate, not a fiber challenge — the lentil pie covers that job.",
    image: "/dishes/turkey-meatballs-zoodles.jpg",
    tools: ["A large skillet with a lid", "A baking sheet", "A vegetable peeler", "A knife and board", "A mixing bowl"],
    ingredients: [
      ing("ground turkey", 1.25, "lb", "Proteins"),
      ing("zucchini", 3, "medium", "Produce", { plural: "zucchini", prepId: "zucchini-ribbons", note: "two for ribbons, one grated for the meatballs" }),
      ing("large egg", 1, "", "Proteins", { plural: "large eggs" }),
      ing("yellow onion", 0.5, "small", "Produce", { plural: "yellow onions", prepId: "dice-onion", note: "minced very fine" }),
      ing("garlic", 3, "clove", "Produce", { prepId: "mince-garlic" }),
      ing("ripe tomato", 4, "medium", "Produce", { plural: "ripe tomatoes", prepId: "dice-tomato" }),
      ing("extra-virgin olive oil", 2, "tbsp", "Pantry"),
      ing("dried oregano", 1, "tsp", "Pantry"),
      ing("kosher salt", 1.25, "tsp", "Pantry"),
      ing("black pepper", 0.5, "tsp", "Pantry"),
      ing("fresh parsley", 0.25, "cup", "Produce", { prepId: "chop-herbs" }),
    ],
    prepIds: ["zucchini-ribbons", "dice-zucchini", "dice-onion", "mince-garlic", "dice-tomato", "chop-herbs"],
    steps: [
      {
        title: "Heat the oven and grate one zucchini",
        detail:
          "Heat the oven to 425°F. Grate one zucchini on the large holes of a box grater, or dice it very small and chop it finer. Wrap the shreds in a clean towel and squeeze hard over the sink. You will get a surprising amount of water. That water is why meatballs fall apart if you skip the squeeze.",
      },
      {
        title: "Mix and shape",
        detail:
          "In a bowl, mix the turkey, squeezed zucchini, egg, onion, one minced garlic clove, half the oregano, 1 teaspoon of salt, pepper, and parsley. Do not mash it into a paste. Roll into balls a bit bigger than a walnut, about 16. Set them on a lightly oiled sheet pan.",
      },
      {
        title: "Bake the meatballs",
        detail:
          "Bake until browned and cooked through, about 15 to 18 minutes. Cut one open. The center should be opaque, not pink. If you have a thermometer, 165°F.",
      },
      {
        title: "Make the tomato sauce",
        detail:
          "While the meatballs bake, dice the tomatoes small. Warm 1 tablespoon of oil in a skillet over medium heat. Add the remaining garlic for 30 seconds. Add the tomatoes, the rest of the salt, and the rest of the oregano. Simmer, stirring, until the tomatoes collapse into a sauce, about 10 minutes. If it looks dry, add a splash of water. Taste. Tomatoes vary. Add a pinch of salt if it tastes sharp and empty.",
      },
      {
        title: "Ribbons at the end",
        detail:
          "Peel the other two zucchini into ribbons. Add them to the sauce and toss for about 2 minutes, until they bend but are not mushy. Add the meatballs and spoon sauce over them. Rest 2 minutes and serve.",
      },
    ],
    simpler: [
      "No box grater? Mince the onion and one small zucchini as fine as you can with a knife, then squeeze them in a towel.",
      "Out-of-season tomatoes can be dull. A cup of crushed tomatoes, ingredients: tomatoes, is an honest shortcut.",
    ],
    boosters: [
      "A torn basil leaf on top if you have it.",
      "Red pepper flakes in the sauce.",
    ],
  },
  {
    id: "yogurt-chicken-salad",
    title: "Greek Yogurt Chicken Salad with Celery, Grapes, and Walnuts",
    blurb: "The deli salad, rebuilt with yogurt instead of mayonnaise. You poach the chicken.",
    meals: ["Lunch"],
    fermented: true,
    diets: ["gluten-free"],
    prepMin: 15,
    cookMin: 15,
    servings: 2,
    proteinG: 34,
    fiberG: 3,
    micros: ["Live cultures", "Vitamin B6", "Polyphenols"],
    gutNote:
      "Swapping mayonnaise for Greek yogurt keeps the creamy texture and adds protein plus live cultures. Grapes and walnuts bring polyphenols; celery brings crunch and a little fiber. It is a lighter-fiber plate, so it pairs well with a piece of fruit or a side of sauerkraut if you want more for your microbes.",
    image: "/dishes/yogurt-chicken-salad.jpg",
    tools: ["A medium pot", "A mixing bowl", "A knife and board", "A fork for shredding"],
    ingredients: [
      ing("chicken breast", 10, "oz", "Proteins", { note: "raw weight" }),
      ing("plain Greek yogurt", 0.33, "cup", "Dairy & Fermented"),
      ing("celery", 2, "stalk", "Produce", { prepId: "dice-celery" }),
      ing("red grapes", 0.5, "cup", "Produce", { note: "halved" }),
      ing("walnut pieces", 3, "tbsp", "Nuts & Seeds", { prepId: "chop-nuts" }),
      ing("lemon", 0.5, "", "Produce", { plural: "lemons", prepId: "lemon" }),
      ing("fresh dill", 1, "tbsp", "Produce", { prepId: "chop-herbs", note: "chopped, or 1 teaspoon dried" }),
      ing("kosher salt", 0.5, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
      ing("butter lettuce", 4, "leaf", "Produce", { plural: "leaves", note: "optional, for serving" }),
    ],
    prepIds: ["dice-celery", "chop-nuts", "lemon", "chop-herbs"],
    steps: [
      {
        title: "Poach the chicken",
        detail:
          "Put the chicken in a pot and cover it with cold water by an inch. Add a pinch of salt. Bring it just to a simmer — small bubbles, not a rolling boil. A hard boil makes stringy chicken. Cover, turn the heat to low, and cook 12 to 15 minutes. Cut the thickest part. It should be opaque all the way through.",
      },
      {
        title: "Cool and shred",
        detail:
          "Move the chicken to a plate. Let it sit until you can handle it, about 10 minutes. Shred it with two forks. You want pieces you can spear, not dust. Save the poaching water if you like; it is a plain broth for another day, once cooled and refrigerated.",
      },
      {
        title: "Chop the mix-ins",
        detail:
          "Dice the celery small. Halve the grapes. Chop the walnuts and the dill. Small celery pieces are what make this feel like chicken salad instead of a chunky stew.",
      },
      {
        title: "Stir and season",
        detail:
          "Mix the chicken, yogurt, celery, grapes, walnuts, dill, lemon juice, salt, and pepper. Taste. Yogurt is tangy, so you may want a pinch more salt before more lemon. Serve in lettuce leaves or on its own. It keeps two days in the fridge.",
      },
    ],
    simpler: [
      "Dried dill works if you use less: start with half a teaspoon.",
      "No grapes? Use a chopped apple for the same sweet crunch.",
    ],
    boosters: [
      "A teaspoon of whole-grain mustard in the yogurt.",
      "A small handful of extra herbs. Parsley is fine if you have no dill.",
    ],
  },
  {
    id: "spinach-feta-egg-muffins",
    title: "Spinach, Feta, and Egg Muffins",
    blurb: "A tray of portable eggs. Three muffins is a serving, and they keep for days.",
    meals: ["Breakfast"],
    fermented: true,
    diets: ["vegetarian", "gluten-free"],
    prepMin: 15,
    cookMin: 25,
    servings: 4,
    proteinG: 27,
    fiberG: 2,
    micros: ["Calcium", "Choline", "Vitamin K"],
    gutNote:
      "Feta and cottage cheese are both fermented dairy, and the eggs carry the protein so you are not hungry an hour later. Spinach adds folate and a little fiber. These are a prep-ahead breakfast: the fiber is modest, so add fruit on the side when you want more for your microbes.",
    image: "/dishes/spinach-feta-egg-muffins.jpg",
    tools: ["A 12-cup muffin tin", "A large bowl", "A whisk or fork", "A skillet", "A knife and board"],
    ingredients: [
      ing("large egg", 12, "", "Proteins", { plural: "large eggs" }),
      ing("plain cottage cheese", 1, "cup", "Dairy & Fermented"),
      ing("feta cheese", 3, "oz", "Dairy & Fermented", { note: "crumbled" }),
      ing("baby spinach", 4, "cup", "Produce", { prepId: "chop-spinach" }),
      ing("bell pepper", 1, "", "Produce", { plural: "bell peppers", prepId: "dice-pepper" }),
      ing("yellow onion", 0.5, "small", "Produce", { plural: "yellow onions", prepId: "dice-onion" }),
      ing("extra-virgin olive oil", 1, "tsp", "Pantry"),
      ing("kosher salt", 0.5, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["chop-spinach", "dice-pepper", "dice-onion"],
    steps: [
      {
        title: "Heat the oven and start the vegetables",
        detail:
          "Heat the oven to 375°F. Rub the muffin cups with a drop of oil, or use paper liners if the tin is sticky. Dice the onion and pepper. Chop the spinach.",
      },
      {
        title: "Cook the onion and wilt the spinach",
        detail:
          "Warm the teaspoon of oil in a skillet over medium heat. Soften the onion and pepper for 4 minutes. Add the spinach and stir until it wilts, about a minute. Let the mixture cool for a few minutes. Hot vegetables will scramble the eggs when you mix them.",
      },
      {
        title: "Mix the eggs",
        detail:
          "Whisk the eggs, cottage cheese, salt, and pepper until the cottage cheese is in small pieces. Stir in the feta and the cooled vegetables. The cottage cheese is why these stay moist and higher in protein than eggs alone.",
      },
      {
        title: "Bake",
        detail:
          "Divide the mixture among the 12 cups. They will be nearly full, and that is fine. Bake until the centers are set and a toothpick comes out clean, 20 to 24 minutes. They puff, then settle as they cool. Cool 5 minutes in the tin, then lift them out with a small spatula.",
      },
      {
        title: "Store",
        detail:
          "A serving is 3 muffins. Keep the rest in a covered container in the fridge for up to 3 days. Reheat one or two in a skillet over low heat, or eat them cold.",
      },
    ],
    simpler: [
      "Skip the pepper and onion. Spinach and feta alone still taste like a complete muffin.",
      "If you only have a 6-cup tin, bake in two rounds. Hold the second batch of batter in the fridge.",
    ],
    boosters: [
      "A pinch of dried oregano or dill in the eggs.",
      "Chopped cooked broccoli instead of pepper, if that is what you have.",
    ],
  },
  {
    id: "salmon-quinoa-bowl",
    title: "Salmon Avocado Quinoa Bowl with Mixed Greens",
    blurb: "Flaky salmon, quinoa, avocado, greens, and a spoon of sauerkraut.",
    meals: ["Lunch", "Dinner"],
    fermented: true,
    diets: ["dairy-free", "gluten-free"],
    prepMin: 15,
    cookMin: 15,
    servings: 2,
    proteinG: 35,
    fiberG: 9,
    micros: ["Omega-3s", "Folate", "Potassium"],
    gutNote:
      "This bowl stacks the pattern on purpose: omega-3s from salmon, fiber from quinoa and greens, polyphenols and potassium from avocado, and live cultures from a spoon of sauerkraut. Quinoa’s fiber and salmon’s fat also make the meal stay with you. Rinsing the quinoa matters — the natural coating tastes soapy if you skip it.",
    image: "/dishes/salmon-quinoa-bowl.jpg",
    tools: ["A small pot", "A sheet pan or skillet", "A fine mesh strainer", "A knife and board"],
    ingredients: [
      ing("salmon fillet", 2, "fillet", "Proteins", { note: "about 5 oz each" }),
      ing("quinoa", 0.67, "cup", "Pantry", { prepId: "rinse-quinoa", note: "dry" }),
      ing("avocado", 1, "", "Produce", { plural: "avocados", prepId: "slice-avocado" }),
      ing("mixed salad greens", 3, "cup", "Produce"),
      ing("cucumber", 0.5, "medium", "Produce", { plural: "cucumbers", prepId: "slice-cucumber" }),
      ing("raw sauerkraut", 0.5, "cup", "Dairy & Fermented", { note: "drained" }),
      ing("extra-virgin olive oil", 1, "tbsp", "Pantry"),
      ing("lemon", 1, "", "Produce", { plural: "lemons", prepId: "lemon" }),
      ing("kosher salt", 0.5, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["rinse-quinoa", "slice-avocado", "slice-cucumber", "lemon"],
    steps: [
      {
        title: "Cook the quinoa",
        detail:
          "Rinse the quinoa well in a fine strainer. Combine it with 1 ⅓ cups water and a pinch of salt. Simmer, covered, for 15 minutes. Rest off the heat, covered, for 5 minutes. Fluff with a fork. You can roast the salmon while it cooks.",
      },
      {
        title: "Roast or sear the salmon",
        detail:
          "Heat the oven to 425°F, or heat a skillet to medium-high. Pat the salmon dry, rub with a teaspoon of oil, and season with salt and pepper. Roast about 10 to 12 minutes, until it flakes. In a skillet, cook skin-side down if it has skin for 4 minutes, then flip for 2 to 3. Do not cook it until it is dry and chalky.",
      },
      {
        title: "Build the bowls",
        detail:
          "Slice the avocado with a spoon for the pit. Slice the cucumber. Put greens and quinoa in two bowls. Break the salmon into large flakes and add it. Fan the avocado and cucumber beside it. Add sauerkraut in its own spot so the brine does not soak the greens.",
      },
      {
        title: "Dress simply",
        detail:
          "Drizzle the remaining olive oil and squeeze lemon over the bowl. Taste the quinoa. Add a pinch of salt if it needs it. Eat while the salmon is warm and the greens are cold.",
      },
    ],
    simpler: [
      "Use leftover salmon from the sheet-pan recipe if you have it. The bowl comes together in the time it takes the quinoa to cook.",
      "No sauerkraut? The bowl is still a full meal. Add it next time.",
    ],
    boosters: [
      "A sprinkle of hemp seeds on the avocado.",
      "Chopped herbs — dill is especially good with salmon.",
    ],
  },
  {
    id: "beef-broccoli",
    title: "Lean Beef and Broccoli with Garlic and Ginger",
    blurb: "Thin slices of steak, a lot of broccoli, and the same simple sauce as the chicken stir-fry.",
    meals: ["Dinner"],
    fermented: true,
    diets: ["dairy-free", "gluten-free"],
    prepMin: 15,
    cookMin: 12,
    servings: 2,
    proteinG: 38,
    fiberG: 6,
    micros: ["Iron", "Vitamin C", "Zinc"],
    gutNote:
      "Beef is here for protein, iron, and zinc. The large amount of broccoli is the microbiome part: its fiber and sulfur-containing compounds are among the better-studied plant foods for feeding beneficial bacteria. Vitamin C from the broccoli and lemon also helps you absorb the iron in the meat. The miso keeps a fermented food in the sauce.",
    image: "/dishes/beef-broccoli.jpg",
    tools: ["A large skillet", "A knife and board", "A small bowl", "Tongs"],
    ingredients: [
      ing("sirloin or flank steak", 12, "oz", "Proteins", { prepId: "slice-beef" }),
      ing("broccoli", 4, "cup", "Produce", { prepId: "broccoli-florets" }),
      ing("garlic", 3, "clove", "Produce", { prepId: "mince-garlic" }),
      ing("fresh ginger", 1, "tbsp", "Produce", { prepId: "slice-ginger", note: "minced" }),
      ing("white rice miso", 1, "tsp", "Pantry", { note: "rice miso keeps this gluten-free" }),
      ing("lemon", 0.5, "", "Produce", { plural: "lemons", prepId: "lemon" }),
      ing("apple cider vinegar", 1, "tbsp", "Pantry"),
      ing("honey", 1, "tsp", "Pantry"),
      ing("extra-virgin olive oil", 1.5, "tbsp", "Pantry"),
      ing("kosher salt", 0.5, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["slice-beef", "broccoli-florets", "mince-garlic", "slice-ginger", "lemon"],
    steps: [
      {
        title: "Slice the beef across the grain",
        detail:
          "If the steak is soft, freeze it for 15 minutes so it slices cleanly. Find the lines in the meat and cut across them into strips about ¼ inch thick. Pat the strips dry. Cut the broccoli into even florets and slice the peeled stem.",
      },
      {
        title: "Mix the sauce",
        detail:
          "Stir the miso with the lemon juice until smooth. Add the vinegar and honey. Mince the garlic and ginger. Put the sauce and the aromatics next to the stove.",
      },
      {
        title: "Sear the beef in two batches",
        detail:
          "Heat 1 tablespoon of oil over medium-high until it shimmers. Add half the beef in one layer. Leave it 1 minute, then toss and cook about 1 minute more. It should be browned outside and still a little pink inside if you like it tender. Move it to a plate and repeat with the rest. Crowding the pan boils the meat.",
      },
      {
        title: "Broccoli, then everything back in",
        detail:
          "Add the remaining oil and the broccoli with a pinch of salt. Cook 3 minutes, stirring once. Add 2 tablespoons of water, cover for 1 minute, then uncover. The broccoli should be bright and just tender. Add garlic and ginger and stir 30 seconds. Return the beef and the sauce. Toss 30 seconds. Taste, and add salt only if it needs it.",
      },
    ],
    simpler: [
      "Skip the miso and add an extra pinch of salt. Lemon, vinegar, garlic, and ginger still carry the dish.",
      "A bag of pre-cut broccoli florets saves the knife work. Add a minute of cooking if the pieces are large.",
    ],
    boosters: [
      "A sliced green onion on top.",
      "A small pinch of red pepper flakes with the garlic.",
    ],
  },
  {
    id: "kefir-chia-pudding",
    title: "Kefir Chia Pudding with Berries and Almonds",
    blurb: "Stir, wait, and you have a cold breakfast with a serious amount of fiber.",
    meals: ["Breakfast", "Snacks"],
    fermented: true,
    diets: ["vegetarian", "gluten-free"],
    prepMin: 10,
    cookMin: 0,
    rest: "At least 4 hours, or overnight",
    servings: 1,
    proteinG: 26,
    fiberG: 12,
    micros: ["Live cultures", "Omega-3s from chia", "Polyphenols"],
    gutNote:
      "Chia seeds hold a lot of soluble fiber. That fiber forms a gel, slows digestion, and gives gut bacteria something to ferment into short-chain fatty acids. Kefir and yogurt bring live cultures, and the berries add polyphenols. It is one of the highest-fiber plates in this app, with enough protein to work as breakfast rather than a sweet snack.",
    image: "/dishes/kefir-chia-pudding.jpg",
    tools: ["A jar or bowl", "A spoon"],
    ingredients: [
      ing("chia seeds", 3, "tbsp", "Nuts & Seeds"),
      ing("plain unsweetened kefir", 1, "cup", "Dairy & Fermented"),
      ing("plain Greek yogurt", 0.5, "cup", "Dairy & Fermented"),
      ing("mixed berries", 0.5, "cup", "Produce", { prepId: "wash-berries" }),
      ing("raw almonds", 1, "tbsp", "Nuts & Seeds", { prepId: "chop-nuts", note: "chopped or sliced" }),
      ing("ground cinnamon", 0.25, "tsp", "Pantry"),
      ing("honey", 1, "tsp", "Pantry"),
    ],
    prepIds: ["wash-berries", "chop-nuts"],
    steps: [
      {
        title: "Stir the chia into the kefir",
        detail:
          "Put the chia, kefir, cinnamon, and honey in a jar. Stir for a full 30 seconds, until you cannot see dry clumps. Wait 5 minutes and stir again. That second stir is what stops a clump of dry seeds at the bottom.",
      },
      {
        title: "Chill",
        detail:
          "Cover and refrigerate at least 4 hours, or overnight. The seeds will swell and the mixture will look like a soft pudding. If it is still runny after 4 hours, stir in another teaspoon of chia and wait 30 minutes.",
      },
      {
        title: "Top and eat",
        detail:
          "Spoon the yogurt on top, or stir it through if you want it tangier and higher in protein all the way down. Rinse the berries, chop the almonds, and add them just before eating. The pudding keeps two days in the fridge. Add fruit the day you eat it.",
      },
    ],
    simpler: [
      "No kefir? Use 1 cup of milk you already drink, plus the yogurt. You lose some of the cultures, not the fiber.",
      "Make it in a regular drinking glass if you do not have a jar. Cover it with a small plate.",
    ],
    boosters: [
      "Lemon zest stirred in with the chia.",
      "A tablespoon of hemp seeds on top for more protein.",
    ],
  },
  ...moreRecipes,
];

export function getRecipe(id: string) {
  return recipes.find((recipe) => recipe.id === id);
}

export function categoriesOf(recipe: Recipe): string[] {
  const categories: string[] = [...recipe.meals];
  if (recipe.proteinG >= 25) categories.push("High-Protein");
  if (recipe.fermented) categories.push("Fermented Foods");
  if (recipe.fiberG >= 6) categories.push("Fiber-Rich");
  if (!recipe.rest && recipe.prepMin + recipe.cookMin <= 30) categories.push("Quick Meals");
  return categories;
}

export function recipeHaystack(recipe: Recipe) {
  return [
    recipe.title,
    recipe.blurb,
    recipe.gutNote,
    ...categoriesOf(recipe),
    ...recipe.ingredients.map((ingredient) => ingredient.name),
  ]
    .join(" ")
    .toLowerCase();
}
