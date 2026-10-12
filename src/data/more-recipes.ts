import type { Aisle, Ingredient, Recipe } from "@/data/types";

function ing(
  name: string,
  qty: number,
  unit: string,
  aisle: Aisle,
  extra?: Partial<Pick<Ingredient, "plural" | "prepId" | "note">>,
): Ingredient {
  return { name, qty, unit, aisle, ...extra };
}

export const moreRecipes: Recipe[] = [
  {
    id: "pasta-chicken-salad",
    title: "High-Protein Pasta Salad with Chicken and Olive Oil",
    blurb: "Chickpea pasta, warm chicken, and raw vegetables in a lemon dressing. A lunch that stays in the fridge.",
    meals: ["Salads", "Lunch"],
    fermented: false,
    diets: ["dairy-free", "gluten-free"],
    prepMin: 20,
    cookMin: 15,
    servings: 4,
    proteinG: 36,
    fiberG: 7,
    micros: ["Fiber", "Olive oil", "Vitamin C"],
    gutNote:
      "Chickpea pasta brings more fiber than white pasta, and that fiber is food for gut bacteria. The chicken is there so the bowl is actually filling. Olive oil helps you absorb the plant nutrients in the peppers and tomatoes. This is a make-ahead lunch: the vegetables stay crisp if you keep the dressing nearby and toss it the day you eat it.",
    image: "/dishes/pasta-chicken-salad.jpg",
    tools: ["A pot", "A skillet", "A large bowl", "A knife and board", "A colander"],
    ingredients: [
      ing("chickpea pasta", 8, "oz", "Pantry"),
      ing("chicken breast", 16, "oz", "Proteins", { prepId: "cut-chicken", note: "cut into bite-size pieces" }),
      ing("cherry tomatoes", 1, "cup", "Produce", { prepId: "dice-tomato", note: "halved" }),
      ing("cucumber", 1, "medium", "Produce", { plural: "cucumbers", prepId: "slice-cucumber" }),
      ing("bell pepper", 1, "", "Produce", { plural: "bell peppers", prepId: "dice-pepper" }),
      ing("yellow onion", 0.5, "small", "Produce", { plural: "yellow onions", prepId: "dice-onion", note: "or less if raw onion is strong for you" }),
      ing("garlic", 1, "clove", "Produce", { prepId: "mince-garlic" }),
      ing("fresh parsley", 0.25, "cup", "Produce", { prepId: "chop-herbs" }),
      ing("extra-virgin olive oil", 3, "tbsp", "Pantry"),
      ing("lemon", 1, "", "Produce", { plural: "lemons", prepId: "lemon" }),
      ing("dried oregano", 1, "tsp", "Pantry"),
      ing("kosher salt", 1, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["cut-chicken", "dice-pepper", "slice-cucumber", "dice-tomato", "dice-onion", "mince-garlic", "lemon", "chop-herbs"],
    steps: [
      {
        title: "Boil the pasta",
        detail:
          "Fill a pot with water, salt it until it tastes like the sea, and bring it to a boil. Add the chickpea pasta and cook until just tender, usually 7 to 9 minutes. Check the box, then taste a piece. Drain it and rinse briefly with cool water so the pieces do not glue together. Shake the colander dry.",
      },
      {
        title: "Cook the chicken",
        detail:
          "Pat the chicken dry and season it with half the salt and the pepper. Warm 1 tablespoon of the olive oil in a skillet over medium heat. Cook the chicken in one layer, turning once, until the center is no longer pink and the pieces feel firm, about 6 minutes. If you have a thermometer, 165°F is done. Rest it on a plate.",
      },
      {
        title: "Cut the vegetables and mix the dressing",
        detail:
          "Halve the tomatoes, dice the pepper and onion, and cut the cucumber into half-moons. Mince the garlic and chop the parsley. In the large bowl, stir the rest of the olive oil with the lemon juice, garlic, oregano, and the rest of the salt. Taste the dressing on a cucumber slice before you add the pasta. It should be bright, not harsh.",
      },
      {
        title: "Toss and cool",
        detail:
          "Add the pasta, chicken, and vegetables to the dressing. Toss until everything shines. Eat it warm, or chill it for 30 minutes if you like a cold salad. It keeps 3 days in a covered container. If it looks dry the next day, add a spoon of olive oil and a squeeze of lemon, not more salt first.",
      },
    ],
    simpler: [
      "Use leftover cooked chicken and skip the skillet. The pasta and vegetables are the only work.",
      "No chickpea pasta? Any short pasta you already have works. You lose some of the fiber, not the method.",
    ],
    boosters: [
      "A spoon of plain Greek yogurt stirred into the dressing makes it creamier and adds a fermented food.",
      "Torn basil instead of parsley, if you have it.",
    ],
  },
  {
    id: "classic-chicken-salad",
    title: "Classic Chicken Salad with Yogurt, Celery, Grapes, and Walnuts",
    blurb: "Cool chicken salad in lettuce cups. Yogurt instead of mayo, so it stays tangy and light.",
    meals: ["Salads", "Lunch"],
    fermented: true,
    diets: ["gluten-free"],
    prepMin: 15,
    cookMin: 18,
    servings: 4,
    proteinG: 32,
    fiberG: 2,
    micros: ["Live cultures", "Protein", "Potassium"],
    gutNote:
      "Plain Greek yogurt stands in for mayonnaise. It is a fermented food, so you get live cultures along with the protein. Grapes and celery are mostly water and crunch, not a fiber powerhouse — pair this with a piece of fruit later in the day if you want more for your microbes. The walnuts add a little fat so the meal is satisfying.",
    image: "/dishes/classic-chicken-salad.jpg",
    tools: ["A saucepan", "A mixing bowl", "A knife and board", "A fork"],
    ingredients: [
      ing("chicken breast", 16, "oz", "Proteins", { prepId: "cut-chicken" }),
      ing("plain Greek yogurt", 0.5, "cup", "Dairy & Fermented"),
      ing("celery", 3, "stalk", "Produce", { prepId: "dice-celery" }),
      ing("red grapes", 1, "cup", "Produce", { note: "halved" }),
      ing("walnut pieces", 3, "tbsp", "Nuts & Seeds", { prepId: "chop-nuts" }),
      ing("butter lettuce", 8, "leaf", "Produce"),
      ing("lemon", 1, "", "Produce", { plural: "lemons", prepId: "lemon" }),
      ing("honey", 1, "tsp", "Pantry"),
      ing("kosher salt", 0.75, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["cut-chicken", "dice-celery", "chop-nuts", "lemon"],
    steps: [
      {
        title: "Poach the chicken",
        detail:
          "Put the chicken in a saucepan and cover it with cold water by an inch. Add a pinch of the salt. Bring it just to a simmer, then turn the heat down so the water barely shivers. Cook 12 to 15 minutes, until the thickest part is 165°F and no longer pink. Do not let it boil hard or the meat turns dry and stringy.",
      },
      {
        title: "Cool and shred",
        detail:
          "Move the chicken to a plate. Let it sit until you can handle it, about 10 minutes. Shred it with two forks into pieces you can spear. Warm chicken melts the yogurt and makes the salad watery, so wait until it is just warm, not hot.",
      },
      {
        title: "Mix the salad",
        detail:
          "Dice the celery small. Halve the grapes. Chop the walnuts if they are in big halves. Stir the yogurt, lemon juice, honey, remaining salt, and pepper in a bowl. Fold in the chicken, celery, grapes, and walnuts. Taste. It should be creamy, a little sweet, and salty enough that the lettuce does not taste like water.",
      },
      {
        title: "Spoon into lettuce cups",
        detail:
          "Separate the butter lettuce into cups and rinse them. Pat them dry or the salad slides off. Spoon the chicken salad into the leaves. Eat the same day for the best crunch. The salad itself keeps 3 days in a covered container. Fill the leaves when you eat.",
      },
    ],
    simpler: [
      "Skip the stove and use leftover cooked chicken. Shred it and start at the mixing step.",
      "No grapes? A chopped apple gives the same sweet crunch.",
    ],
    boosters: [
      "A pinch of dried dill in the yogurt.",
      "A few extra walnut pieces on top so the first bite is crunchy.",
    ],
  },
  {
    id: "tuna-yogurt-salad",
    title: "Tuna Salad with Greek Yogurt, Celery, Onion, and Lemon",
    blurb: "A fast tuna salad held together with yogurt. Eat it in lettuce or in a bowl.",
    meals: ["Salads", "Lunch"],
    fermented: true,
    diets: ["gluten-free"],
    prepMin: 15,
    cookMin: 0,
    servings: 2,
    proteinG: 28,
    fiberG: 2,
    micros: ["Live cultures", "Protein", "Omega-3s"],
    gutNote:
      "Canned tuna is a simple protein, and the fat in tuna is one of the omega-3s linked with a calmer inflammatory tone. Greek yogurt replaces mayo and brings live cultures. Onion and celery add crunch more than fiber, so this is a light meal. Add a piece of fruit or a handful of beans on the side when you want more for your gut bacteria.",
    image: "/dishes/tuna-yogurt-salad.jpg",
    tools: ["A bowl", "A fork", "A knife and board", "A can opener"],
    ingredients: [
      ing("canned tuna in water", 2, "can", "Proteins", { prepId: "flake-tuna" }),
      ing("plain Greek yogurt", 0.5, "cup", "Dairy & Fermented"),
      ing("celery", 2, "stalk", "Produce", { prepId: "dice-celery" }),
      ing("yellow onion", 0.25, "small", "Produce", { plural: "yellow onions", prepId: "dice-onion", note: "minced very small" }),
      ing("butter lettuce", 4, "leaf", "Produce", { note: "or eat it from a bowl" }),
      ing("lemon", 1, "", "Produce", { plural: "lemons", prepId: "lemon" }),
      ing("kosher salt", 0.25, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["flake-tuna", "dice-celery", "dice-onion", "lemon"],
    steps: [
      {
        title: "Drain and flake the tuna",
        detail:
          "Open the cans and press the water out. Tip the tuna into a sieve if it still looks wet. Flake it with a fork into large pieces. Leave some chunks. Tuna that is mashed into a paste tastes like cat food and hides the celery.",
      },
      {
        title: "Cut the crunch",
        detail:
          "Dice the celery into pieces about the size of a pea. Mince the onion smaller than the celery so you get flavor without a big raw bite. If raw onion bothers you, rinse the mince under cold water and pat it dry. That takes some of the bite out.",
      },
      {
        title: "Fold in the yogurt",
        detail:
          "Stir the yogurt, lemon juice, salt, and pepper in the bowl first. Then fold in the tuna, celery, and onion. Taste a flake. Canned tuna is already salty, so you may not need the salt at all. Stop when it holds together on a spoon and still looks like tuna, not a dip.",
      },
      {
        title: "Serve in lettuce or a bowl",
        detail:
          "Rinse and dry the lettuce. Spoon the salad into the leaves, or into a bowl if you would rather eat it with a fork. It is best the day you mix it. Tomorrow it is still safe in the fridge, just wetter — stir in a spoon of yogurt if it has pooled.",
      },
    ],
    simpler: [
      "Skip the onion. Celery and lemon are enough if chopping onion makes you cry or you just do not like it raw.",
      "No lettuce? Eat it beside sliced cucumber. Same meal, one less thing to wash.",
    ],
    boosters: [
      "A few chopped walnuts on top.",
      "Chopped dill or parsley, a small handful, if you have a bunch already.",
    ],
  },
  {
    id: "warm-potato-salad",
    title: "Warm Potato Salad with Eggs, Olive Oil, and Green Onions",
    blurb: "A warm potato salad dressed with vinegar and oil, not mayo. Eggs make it a meal.",
    meals: ["Salads", "Lunch"],
    fermented: false,
    diets: ["vegetarian", "dairy-free", "gluten-free"],
    prepMin: 15,
    cookMin: 25,
    servings: 4,
    proteinG: 9,
    fiberG: 4,
    micros: ["Potassium", "Resistant starch", "Choline"],
    gutNote:
      "Potatoes that are cooked and then cooled a little form resistant starch, a kind of carbohydrate that reaches the colon and feeds bacteria. You do not need them ice-cold for that to start. The eggs add some protein, but this is not a high-protein plate on its own. Serve it next to chicken or fish when you want to stay full, and enjoy it as the plant side when you do not.",
    image: "/dishes/warm-potato-salad.jpg",
    tools: ["A pot", "A saucepan for the eggs", "A large bowl", "A knife and board"],
    ingredients: [
      ing("yukon gold potato", 1.5, "lb", "Produce", { prepId: "cube-potato", note: "cut into bite-size chunks, peel on" }),
      ing("large egg", 6, "", "Proteins", { plural: "large eggs", prepId: "hard-boil-egg" }),
      ing("green onion", 1, "bunch", "Produce", { plural: "green onions", prepId: "slice-scallion" }),
      ing("fresh parsley", 0.25, "cup", "Produce", { prepId: "chop-herbs" }),
      ing("extra-virgin olive oil", 2, "tbsp", "Pantry"),
      ing("apple cider vinegar", 1, "tbsp", "Pantry"),
      ing("kosher salt", 1, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["cube-potato", "hard-boil-egg", "slice-scallion", "chop-herbs"],
    steps: [
      {
        title: "Boil the eggs and start the potatoes",
        detail:
          "Hard-boil the eggs first so they can cool while the potatoes cook. Cube the potatoes into pieces about the size of a walnut, leave the peel on, and cover them with cold water. Add a pinch of salt. Bring to a simmer and cook until a fork slides in with no crunch in the center, about 12 minutes. Do not let them fall apart.",
      },
      {
        title: "Drain while they are warm",
        detail:
          "Drain the potatoes and let them steam in the pot for a minute. Warm potatoes drink up dressing. Cold ones stay bland in the middle. If a few edges break, that is fine. A pot of mashed potato is not.",
      },
      {
        title: "Dress and fold",
        detail:
          "In the bowl, stir the olive oil, vinegar, salt, and pepper. Add the warm potatoes and toss gently with a big spoon. Slice the green onions, using both white and green, and chop the parsley. Fold those in. Peel the eggs, cut them into quarters, and set them on top so they do not turn into crumbs.",
      },
      {
        title: "Taste and rest a few minutes",
        detail:
          "Taste a potato. If it is flat, add a pinch of salt or a few drops more vinegar. Let the salad sit 5 minutes so the dressing soaks in, then eat it warm. It is still good cold the next day. The eggs keep 3 days in the fridge with the potatoes.",
      },
    ],
    simpler: [
      "No parsley? Green onions alone are enough herbs.",
      "If peeling hot eggs frustrates you, cool them longer in the water. The shell comes off easier.",
    ],
    boosters: [
      "A small spoon of Dijon mustard in the dressing, if you already have a jar.",
      "Serve it beside a piece of baked salmon when you want more protein.",
    ],
  },
  {
    id: "quinoa-chickpea-salad",
    title: "Quinoa and Chickpea Salad with Cucumber, Tomato, and Feta",
    blurb: "A big plant bowl. Chickpeas and quinoa carry the protein. Feta carries the salt.",
    meals: ["Salads", "Lunch"],
    fermented: true,
    diets: ["vegetarian", "gluten-free"],
    prepMin: 15,
    cookMin: 15,
    servings: 2,
    proteinG: 30,
    fiberG: 12,
    micros: ["Fiber", "Folate", "Calcium"],
    gutNote:
      "Chickpeas and quinoa are both high in fiber that gut bacteria can ferment into short-chain fatty acids. Those acids help keep the gut lining in good shape, which is part of how the gut and brain stay in conversation. Feta is a fermented cheese, so a little goes on top for salt and tang instead of a heavy dressing. Rinse the quinoa or it will taste soapy.",
    image: "/dishes/quinoa-chickpea-salad.jpg",
    tools: ["A small pot", "A sieve", "A large bowl", "A knife and board"],
    ingredients: [
      ing("quinoa", 1, "cup", "Pantry", { prepId: "rinse-quinoa", note: "dry" }),
      ing("canned chickpeas", 2, "can", "Pantry", { note: "drained and rinsed" }),
      ing("cucumber", 1, "medium", "Produce", { plural: "cucumbers", prepId: "slice-cucumber" }),
      ing("ripe tomato", 2, "medium", "Produce", { plural: "ripe tomatoes", prepId: "dice-tomato" }),
      ing("feta cheese", 3, "oz", "Dairy & Fermented", { note: "crumbled" }),
      ing("fresh parsley", 0.25, "cup", "Produce", { prepId: "chop-herbs" }),
      ing("lemon", 1, "", "Produce", { plural: "lemons", prepId: "lemon" }),
      ing("extra-virgin olive oil", 2, "tbsp", "Pantry"),
      ing("kosher salt", 0.75, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["rinse-quinoa", "slice-cucumber", "dice-tomato", "chop-herbs", "lemon"],
    steps: [
      {
        title: "Rinse and cook the quinoa",
        detail:
          "Put the quinoa in a sieve and rinse it under cold water until the water runs mostly clear. That cloudy coating tastes bitter if you skip this. Combine the quinoa with 2 cups of water and a pinch of salt in a pot. Bring it to a boil, then cover, turn the heat to low, and cook 15 minutes. Take it off the heat and leave the lid on for 5 minutes. Fluff with a fork.",
      },
      {
        title: "Drain the chickpeas and cut the salad",
        detail:
          "Pour the chickpeas into the sieve, rinse them, and shake them dry. Dice the tomatoes and cucumber into pieces you can eat in one bite. Chop the parsley. If the tomatoes are very juicy, let them sit in the bowl and pour off a little liquid so the salad does not get soupy.",
      },
      {
        title: "Dress it while the quinoa is warm",
        detail:
          "Stir the olive oil, lemon juice, salt, and pepper into the warm quinoa. Warm grains take the dressing better than cold ones. Fold in the chickpeas, cucumber, tomato, and parsley. Taste. Lemon should be obvious. Salt should make the tomato taste sweeter.",
      },
      {
        title: "Crumble the feta and serve",
        detail:
          "Crumble the feta over the top instead of stirring it all in. You want pockets of salt. Eat it warm or chilled. It keeps 3 days. Add the feta the day you eat a leftover portion so it does not turn soft and chalky.",
      },
    ],
    simpler: [
      "Use leftover cooked quinoa. You still rinse it the day you cook it.",
      "No feta? A pinch more salt and the lemon still make a complete salad. You lose the fermented dairy.",
    ],
    boosters: [
      "A handful of chopped cucumber pickle or a spoon of sauerkraut on the side.",
      "Toasted pumpkin seeds for crunch.",
    ],
  },
  {
    id: "chicken-cobb-salad",
    title: "Grilled Chicken Cobb Salad with Avocado and Eggs",
    blurb: "Rows of chicken, egg, avocado, and tomato on romaine, with a lemon-oil dressing.",
    meals: ["Salads", "Dinner"],
    fermented: false,
    diets: ["dairy-free", "gluten-free"],
    prepMin: 15,
    cookMin: 12,
    servings: 2,
    proteinG: 38,
    fiberG: 7,
    micros: ["Protein", "Potassium", "Folate"],
    gutNote:
      "This plate is protein plus a lot of plants: lettuce, tomato, cucumber, and avocado. Avocado’s fat helps you absorb some of the nutrients in the greens. There is no bacon here on purpose — the chicken and eggs already make it filling, and you skip the processed meat. Fiber is decent because of the avocado and the vegetables, not because of a special powder.",
    image: "/dishes/chicken-cobb-salad.jpg",
    tools: ["A skillet or grill pan", "A large bowl or platter", "A knife and board"],
    ingredients: [
      ing("romaine lettuce", 1, "head", "Produce", { note: "chopped" }),
      ing("chicken breast", 12, "oz", "Proteins", { prepId: "cut-chicken" }),
      ing("large egg", 2, "", "Proteins", { plural: "large eggs", prepId: "hard-boil-egg" }),
      ing("avocado", 1, "", "Produce", { plural: "avocados", prepId: "slice-avocado" }),
      ing("cherry tomatoes", 1, "cup", "Produce", { prepId: "dice-tomato", note: "halved" }),
      ing("cucumber", 0.5, "medium", "Produce", { plural: "cucumbers", prepId: "slice-cucumber" }),
      ing("extra-virgin olive oil", 2, "tbsp", "Pantry"),
      ing("lemon", 1, "", "Produce", { plural: "lemons", prepId: "lemon" }),
      ing("kosher salt", 0.5, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["cut-chicken", "hard-boil-egg", "slice-avocado", "dice-tomato", "slice-cucumber", "lemon"],
    steps: [
      {
        title: "Boil the eggs and cook the chicken",
        detail:
          "Start the eggs so they can cool while you cook. Pat the chicken dry, season it with half the salt and the pepper, and rub it with 1 teaspoon of the oil. Cook it in a skillet over medium heat, about 5 to 6 minutes per side, until the center is 165°F and no longer pink. Rest 5 minutes, then slice it across the grain.",
      },
      {
        title: "Chop the salad",
        detail:
          "Chop the romaine, wash it, and spin or pat it dry. Wet lettuce dilutes the dressing. Halve the tomatoes. Slice the cucumber. Peel and slice the eggs once they are cool. Cut the avocado with a spoon for the pit, then slice it. Squeeze a little lemon on the avocado so it stays green.",
      },
      {
        title: "Make the dressing",
        detail:
          "Stir the rest of the olive oil with the remaining lemon juice and the rest of the salt. Taste it. Cobb dressing should be sharp enough that you can taste it on a plain leaf. Add more lemon if it tastes like plain oil.",
      },
      {
        title: "Line it up and eat",
        detail:
          "Put the romaine on a platter. Lay the chicken, eggs, avocado, tomatoes, and cucumber in rows so you can see each thing. Spoon the dressing over the top just before you eat. Tossing it early makes the avocado mushy and the lettuce tired.",
      },
    ],
    simpler: [
      "Use leftover chicken and you only have to boil the eggs.",
      "No romaine? Any salad greens work. A head of lettuce just gives you more crunch.",
    ],
    boosters: [
      "A few walnut pieces scattered on the avocado.",
      "Crumbled feta if you want a salty, fermented note. It is not in the base recipe.",
    ],
  },
  {
    id: "salmon-avocado-salad",
    title: "Salmon and Avocado Salad with Lemon",
    blurb: "Warm salmon on a pile of greens, with avocado and a simple lemon dressing.",
    meals: ["Salads", "Dinner"],
    fermented: false,
    diets: ["dairy-free", "gluten-free"],
    prepMin: 10,
    cookMin: 12,
    servings: 2,
    proteinG: 36,
    fiberG: 6,
    micros: ["Omega-3s", "Potassium", "Folate"],
    gutNote:
      "Salmon’s omega-3 fats are one of the clearer food links to a calmer inflammatory tone, which matters for the gut lining. The greens and avocado add fiber and potassium. Lemon and olive oil are the whole dressing — no sweet bottled sauce. This is a weeknight plate: one pan, one bowl, done.",
    image: "/dishes/salmon-avocado-salad.jpg",
    tools: ["A skillet", "A large bowl", "A knife and board", "Tongs"],
    ingredients: [
      ing("salmon fillet", 2, "fillet", "Proteins", { note: "about 6 oz each" }),
      ing("mixed salad greens", 6, "cup", "Produce"),
      ing("avocado", 1, "", "Produce", { plural: "avocados", prepId: "slice-avocado" }),
      ing("cucumber", 0.5, "medium", "Produce", { plural: "cucumbers", prepId: "slice-cucumber" }),
      ing("lemon", 1, "", "Produce", { plural: "lemons", prepId: "lemon" }),
      ing("extra-virgin olive oil", 1.5, "tbsp", "Pantry"),
      ing("kosher salt", 0.5, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["slice-avocado", "slice-cucumber", "lemon"],
    steps: [
      {
        title: "Season and cook the salmon",
        detail:
          "Pat the salmon dry. Wet fish will not brown. Salt and pepper both sides. Warm 1 teaspoon of the oil in a skillet over medium heat. Lay the salmon in, skin side down if it has skin. Cook 4 to 5 minutes, flip once, and cook until the center flakes and is just opaque, usually another 3 to 4 minutes. Pull it before it looks dry. 125 to 130°F in the thickest part is moist.",
      },
      {
        title: "Dress the greens",
        detail:
          "In the bowl, stir the rest of the oil with the juice of half the lemon and a pinch of salt. Add the greens and cucumber and toss until the leaves shine. Taste a leaf. Add more lemon if it tastes flat.",
      },
      {
        title: "Slice the avocado",
        detail:
          "Cut the avocado in half around the pit and twist. Scoop the pit out with a spoon, not a knife. Slice the flesh in the skin and scoop it onto the salad. A squeeze of the remaining lemon keeps the color.",
      },
      {
        title: "Break the salmon over the top",
        detail:
          "Set the salmon on the greens and break it into large flakes with the side of a fork. Leave the skin behind if you do not want to eat it. Serve right away so the greens stay cool and the fish stays warm. The other lemon half is for the table.",
      },
    ],
    simpler: [
      "Canned salmon works in a pinch. Drain it, flake it, and skip the skillet. The salad is still a meal.",
      "Buy the greens already washed. You still dry them if the box looks wet.",
    ],
    boosters: [
      "A spoon of sauerkraut on the side for a fermented crunch.",
      "A few pumpkin seeds on the avocado.",
    ],
  },
  {
    id: "chicken-thighs-brussels",
    title: "Baked Chicken Thighs with Brussels Sprouts and Sweet Potato",
    blurb: "One pan. Thighs stay juicy while the sprouts and sweet potato brown.",
    meals: ["Dinner"],
    fermented: false,
    diets: ["dairy-free", "gluten-free"],
    prepMin: 15,
    cookMin: 35,
    servings: 4,
    proteinG: 32,
    fiberG: 7,
    micros: ["Vitamin A", "Vitamin C", "Vitamin K"],
    gutNote:
      "Sweet potato and Brussels sprouts bring two different fibers, and a mix of fibers feeds a wider set of bacteria than one vegetable alone. Leaving the sweet-potato skin on keeps more of that fiber. Chicken thighs are harder to dry out than breasts, which helps if you are new to roasting. Olive oil is the fat that helps the vegetables brown and helps you absorb their nutrients.",
    image: "/dishes/chicken-thighs-brussels.jpg",
    tools: ["A large sheet pan", "Parchment paper if you have it", "A knife and board", "Tongs"],
    ingredients: [
      ing("boneless chicken thighs", 1.5, "lb", "Proteins"),
      ing("brussels sprouts", 1, "lb", "Produce", { prepId: "halve-brussels" }),
      ing("sweet potato", 2, "large", "Produce", { plural: "sweet potatoes", prepId: "cube-sweet-potato" }),
      ing("garlic", 2, "clove", "Produce", { prepId: "mince-garlic" }),
      ing("extra-virgin olive oil", 2, "tbsp", "Pantry"),
      ing("sweet paprika", 1, "tsp", "Pantry"),
      ing("kosher salt", 1, "tsp", "Pantry"),
      ing("black pepper", 0.5, "tsp", "Pantry"),
    ],
    prepIds: ["halve-brussels", "cube-sweet-potato", "mince-garlic"],
    steps: [
      {
        title: "Heat the oven and cut the vegetables",
        detail:
          "Set the oven to 425°F with a rack in the middle. Halve the Brussels sprouts and cube the sweet potato into pieces about the size of a walnut. Pat both dry. Mince the garlic. Line the pan if you want an easier cleanup.",
      },
      {
        title: "Season everything on the pan",
        detail:
          "Put the vegetables and the thighs on the pan. Drizzle the oil, then sprinkle the garlic, paprika, salt, and pepper. Toss the vegetables with your hands and rub the thighs so they are coated. Spread it all in one layer. Pile-ups steam instead of roast. Use two pans if the food is touching a lot.",
      },
      {
        title: "Roast",
        detail:
          "Roast 30 to 35 minutes. Stir the vegetables once halfway so the undersides brown. Thighs are done at 175°F in the thickest part, or when the juices run clear and the meat is no longer pink. Sprouts should be tender in the center with dark edges. Sweet potato should take a fork with no hard center.",
      },
      {
        title: "Rest and serve",
        detail:
          "Let the pan sit 5 minutes. The thighs stay juicier if you do not cut them immediately. Taste a potato. Add a pinch of salt if it needs it. Serve a thigh with a pile of both vegetables.",
      },
    ],
    simpler: [
      "Buy the sprouts already halved if the bag looks fresh. Still dry them.",
      "If the thighs finish before the potato, move the meat to a plate and give the vegetables 5 more minutes.",
    ],
    boosters: [
      "A squeeze of lemon over the pan at the end.",
      "Chopped parsley, if you have a bunch open.",
    ],
  },
  {
    id: "turkey-black-bean-chili",
    title: "Turkey and Black Bean Chili",
    blurb: "A pot of turkey, beans, and tomatoes. Yogurt on top instead of sour cream from a mix.",
    meals: ["Dinner"],
    fermented: true,
    diets: ["gluten-free"],
    prepMin: 15,
    cookMin: 35,
    servings: 4,
    proteinG: 32,
    fiberG: 12,
    micros: ["Fiber", "Iron", "Live cultures"],
    gutNote:
      "Black beans are one of the easiest prebiotic foods: their fiber reaches the colon and feeds bacteria that make short-chain fatty acids. Those acids help the gut lining. The turkey keeps the bowl high in protein so a high-fiber meal still fills you up. A spoon of plain yogurt at the end adds live cultures and cools the heat. If beans bother your stomach, start with one can and add the second next time.",
    image: "/dishes/turkey-black-bean-chili.jpg",
    tools: ["A heavy pot", "A knife and board", "A wooden spoon", "A can opener"],
    ingredients: [
      ing("ground turkey", 1, "lb", "Proteins"),
      ing("no-salt-added black beans", 2, "can", "Pantry", { note: "drained and rinsed" }),
      ing("no-salt-added crushed tomatoes", 1, "can", "Pantry"),
      ing("yellow onion", 1, "medium", "Produce", { plural: "yellow onions", prepId: "dice-onion" }),
      ing("bell pepper", 2, "", "Produce", { plural: "bell peppers", prepId: "dice-pepper" }),
      ing("garlic", 3, "clove", "Produce", { prepId: "mince-garlic" }),
      ing("plain Greek yogurt", 0.5, "cup", "Dairy & Fermented", { note: "to spoon on at the end" }),
      ing("extra-virgin olive oil", 1, "tbsp", "Pantry"),
      ing("ground cumin", 2, "tsp", "Pantry"),
      ing("sweet paprika", 1, "tsp", "Pantry"),
      ing("dried oregano", 1, "tsp", "Pantry"),
      ing("bay leaf", 1, "", "Pantry", { plural: "bay leaves" }),
      ing("kosher salt", 1, "tsp", "Pantry"),
      ing("black pepper", 0.5, "tsp", "Pantry"),
    ],
    prepIds: ["dice-onion", "dice-pepper", "mince-garlic"],
    steps: [
      {
        title: "Soften the onion and pepper",
        detail:
          "Warm the oil in a heavy pot over medium heat. Add the onion and pepper with half the salt. Cook, stirring every minute, until the onion is soft and sweet, about 8 minutes. If the pot looks dry, add a spoon of water instead of more oil.",
      },
      {
        title: "Brown the turkey and bloom the spices",
        detail:
          "Add the turkey. Break it up with the spoon and cook until it is no longer pink, about 6 minutes. Add the garlic, cumin, paprika, oregano, and pepper. Stir for 30 seconds, until you can smell the spices. That short toast is what keeps chili from tasting like raw powder.",
      },
      {
        title: "Simmer",
        detail:
          "Stir in the tomatoes, beans, bay leaf, and the rest of the salt. Bring it to a simmer, then turn it down so it blips gently. Cook uncovered for 20 minutes, stirring now and then, until it looks thick enough to sit on a spoon. If it sticks, turn the heat down and add a splash of water. Fish out the bay leaf.",
      },
      {
        title: "Taste and top",
        detail:
          "Taste. It should be savory and a little sweet from the pepper, not salty like a canned chili. Ladle it into bowls and add a spoon of cold yogurt. The chili keeps 4 days in the fridge, or freeze it without the yogurt.",
      },
    ],
    simpler: [
      "Use one bell pepper if that is what you have. The pot still works.",
      "No yogurt? Eat it plain. You lose the cool topping, not the meal.",
    ],
    boosters: [
      "A squeeze of lemon in the bowl wakes up the beans.",
      "Chopped green onion on the yogurt.",
    ],
  },
  {
    id: "chicken-fajita-bowls",
    title: "Sheet-Pan Chicken Fajita Bowls with Peppers and Onions",
    blurb: "Fajita chicken and peppers over cauliflower rice. No tortillas, same dinner.",
    meals: ["Dinner"],
    fermented: false,
    diets: ["dairy-free", "gluten-free"],
    prepMin: 20,
    cookMin: 25,
    servings: 4,
    proteinG: 30,
    fiberG: 6,
    micros: ["Vitamin C", "Protein", "Choline"],
    gutNote:
      "Peppers and onions are the plant half of a fajita, and cauliflower rice adds another vegetable instead of a refined tortilla. This is still a high-protein plate because of the chicken. Cauliflower is lower in fiber than beans, so it will not bother most people who are new to high-fiber meals. A spoon of yogurt on top is a good fermented add-on if you eat dairy — it is listed with the boosters, not required.",
    image: "/dishes/chicken-fajita-bowls.jpg",
    tools: ["A large sheet pan", "A wide skillet", "A knife and board", "A box grater or just the knife"],
    ingredients: [
      ing("chicken breast", 16, "oz", "Proteins", { prepId: "cut-chicken", note: "cut into strips" }),
      ing("bell pepper", 3, "", "Produce", { plural: "bell peppers", prepId: "halve-pepper", note: "sliced" }),
      ing("yellow onion", 2, "medium", "Produce", { plural: "yellow onions", prepId: "dice-onion", note: "sliced, not diced" }),
      ing("cauliflower", 1, "head", "Produce", { prepId: "rice-cauliflower" }),
      ing("garlic", 2, "clove", "Produce", { prepId: "mince-garlic" }),
      ing("lemon", 1, "", "Produce", { plural: "lemons", prepId: "lemon" }),
      ing("extra-virgin olive oil", 2, "tbsp", "Pantry"),
      ing("ground cumin", 1, "tsp", "Pantry"),
      ing("sweet paprika", 1, "tsp", "Pantry"),
      ing("dried oregano", 0.5, "tsp", "Pantry"),
      ing("kosher salt", 1, "tsp", "Pantry"),
      ing("black pepper", 0.5, "tsp", "Pantry"),
    ],
    prepIds: ["cut-chicken", "halve-pepper", "dice-onion", "rice-cauliflower", "mince-garlic", "lemon"],
    steps: [
      {
        title: "Heat the oven and slice",
        detail:
          "Set the oven to 425°F. Slice the peppers and onions into strips about the width of a pencil. Cut the chicken into strips. Turn the cauliflower into rice and set it aside for the skillet. Crowding the sheet pan is the main way this meal steams, so use two pans if you need to.",
      },
      {
        title: "Season the sheet pan",
        detail:
          "Toss the chicken, peppers, and onions with the oil, garlic, cumin, paprika, oregano, salt, and pepper. Spread them in one layer. The chicken should touch the pan, not sit on a bed of onions.",
      },
      {
        title: "Roast, then cook the cauliflower",
        detail:
          "Roast 20 to 25 minutes, stirring once, until the chicken is 165°F and the peppers are soft with a few dark edges. While that cooks, warm a wide skillet over medium-high heat. Add the cauliflower rice with a pinch of salt. Cook, stirring, until it is tender and the pan looks dry, about 6 minutes. If it steams and puddles, turn the heat up and spread it out.",
      },
      {
        title: "Bowl it",
        detail:
          "Put cauliflower rice in bowls. Pile the chicken and peppers on top. Squeeze the lemon over everything. Taste a pepper. Add a pinch of salt if the spices taste dusty rather than warm.",
      },
    ],
    simpler: [
      "Skip the cauliflower and serve the sheet-pan mixture over leftover quinoa or just as it is.",
      "Buy pre-sliced peppers if you are short on time. Still slice the onion so the pieces match.",
    ],
    boosters: [
      "A spoon of plain Greek yogurt and a few green onions on each bowl.",
      "A pinch more cumin on the cauliflower while it cooks.",
    ],
  },
  {
    id: "lemon-shrimp-zoodles",
    title: "Lemon Garlic Shrimp with Zucchini Noodles",
    blurb: "Fast shrimp in a lemon-garlic pan sauce, tossed with zucchini ribbons.",
    meals: ["Dinner"],
    fermented: false,
    diets: ["dairy-free", "gluten-free"],
    prepMin: 15,
    cookMin: 10,
    servings: 2,
    proteinG: 34,
    fiberG: 4,
    micros: ["Protein", "Iodine", "Vitamin C"],
    gutNote:
      "Shrimp is a lean protein, and zucchini stands in for pasta so the meal is mostly protein and vegetables. Zucchini is not a fiber giant, so this is a lighter dinner. The garlic and lemon are for flavor, not a cure. Cook the shrimp just until they turn pink. Overcooked shrimp curl into tight rings and taste like rubber.",
    image: "/dishes/lemon-shrimp-zoodles.jpg",
    tools: ["A wide skillet", "A knife and board or a peeler", "Tongs"],
    ingredients: [
      ing("raw shrimp", 1, "lb", "Proteins", { prepId: "peel-shrimp", note: "peeled and deveined" }),
      ing("zucchini", 3, "medium", "Produce", { plural: "zucchini", prepId: "zucchini-ribbons" }),
      ing("garlic", 3, "clove", "Produce", { prepId: "mince-garlic" }),
      ing("lemon", 1, "", "Produce", { plural: "lemons", prepId: "lemon" }),
      ing("fresh parsley", 0.25, "cup", "Produce", { prepId: "chop-herbs" }),
      ing("extra-virgin olive oil", 1.5, "tbsp", "Pantry"),
      ing("kosher salt", 0.5, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["peel-shrimp", "zucchini-ribbons", "mince-garlic", "lemon", "chop-herbs"],
    steps: [
      {
        title: "Peel the shrimp and cut the zucchini",
        detail:
          "Peel and devein the shrimp if they are not already done. Pat them very dry and season with half the salt. Peel the zucchini into ribbons. Mince the garlic and chop the parsley. Wet shrimp is the reason this dish boils instead of sears.",
      },
      {
        title: "Sear the shrimp",
        detail:
          "Warm 1 tablespoon of the oil in a wide skillet over medium-high heat. Add the shrimp in one layer. Cook about 1 minute per side, until they turn pink and curl into a loose C, not a tight O. Move them to a plate. They will finish in the sauce.",
      },
      {
        title: "Garlic, then zucchini",
        detail:
          "Turn the heat to medium. Add the rest of the oil and the garlic. Stir 30 seconds, until you smell it. Do not let it go brown or it turns bitter. Add the zucchini ribbons, the rest of the salt, and the pepper. Toss for about 2 minutes, until they bend but are not mushy.",
      },
      {
        title: "Lemon and herbs",
        detail:
          "Return the shrimp and any juices. Add the lemon juice and parsley. Toss for 30 seconds and take the pan off the heat. Taste a ribbon. It should be bright and garlicky, not salty like a broth. Eat it right away. Zucchini weeps if it sits.",
      },
    ],
    simpler: [
      "Buy shrimp that is already peeled. You still pat it dry.",
      "No peeler? Cut the zucchini into thin coins. They take a minute longer in the pan.",
    ],
    boosters: [
      "A pinch of chili flakes with the garlic.",
      "Serve it over a scoop of leftover quinoa if you want more staying power.",
    ],
  },
  {
    id: "turkey-veggie-skillet",
    title: "Ground Turkey and Vegetable Skillet",
    blurb: "One pan of turkey, peppers, zucchini, and spinach. Dinner with a short ingredient list.",
    meals: ["Dinner"],
    fermented: false,
    diets: ["dairy-free", "gluten-free"],
    prepMin: 15,
    cookMin: 20,
    servings: 4,
    proteinG: 28,
    fiberG: 4,
    micros: ["Protein", "Vitamin C", "Vitamin K"],
    gutNote:
      "This is a plain high-protein skillet with three vegetables so you are not eating meat alone. Spinach wilts down to almost nothing, which is normal — you still ate the leaves. The fiber is moderate. If you want more for your microbes, spoon the skillet over a cup of the quinoa salad or a handful of beans. Cumin and paprika are for flavor. They are not a health claim.",
    image: "/dishes/turkey-veggie-skillet.jpg",
    tools: ["A wide skillet", "A knife and board", "A wooden spoon"],
    ingredients: [
      ing("ground turkey", 1, "lb", "Proteins"),
      ing("bell pepper", 2, "", "Produce", { plural: "bell peppers", prepId: "dice-pepper" }),
      ing("zucchini", 1, "medium", "Produce", { plural: "zucchini", prepId: "dice-zucchini" }),
      ing("yellow onion", 1, "medium", "Produce", { plural: "yellow onions", prepId: "dice-onion" }),
      ing("baby spinach", 4, "cup", "Produce", { prepId: "chop-spinach" }),
      ing("garlic", 2, "clove", "Produce", { prepId: "mince-garlic" }),
      ing("extra-virgin olive oil", 1, "tbsp", "Pantry"),
      ing("ground cumin", 1, "tsp", "Pantry"),
      ing("sweet paprika", 1, "tsp", "Pantry"),
      ing("kosher salt", 1, "tsp", "Pantry"),
      ing("black pepper", 0.5, "tsp", "Pantry"),
    ],
    prepIds: ["dice-pepper", "dice-zucchini", "dice-onion", "chop-spinach", "mince-garlic"],
    steps: [
      {
        title: "Soften the onion and pepper",
        detail:
          "Warm the oil in a wide skillet over medium heat. Add the onion and pepper with half the salt. Cook until the onion is soft, about 6 minutes. Dice the zucchini while that happens so you are not standing still.",
      },
      {
        title: "Brown the turkey",
        detail:
          "Add the turkey, cumin, paprika, pepper, and the rest of the salt. Break the meat into small crumbs with the spoon. Cook until no pink remains, about 6 minutes. If a lot of liquid pools, let it cook off before you add vegetables or the skillet will taste boiled.",
      },
      {
        title: "Add zucchini and garlic",
        detail:
          "Stir in the zucchini and garlic. Cook 3 minutes, until the zucchini is tender but still has a little bite. Garlic only needs that short time. Burnt garlic is bitter and you cannot stir it out.",
      },
      {
        title: "Wilt the spinach and taste",
        detail:
          "Add the spinach in handfuls. Stir until it collapses, about 1 minute. Taste. The turkey should be savory, not bland, and the cumin should be warm rather than dusty. Eat it from the pan the same night. It keeps 3 days and reheats in the same skillet with a splash of water.",
      },
    ],
    simpler: [
      "No zucchini? Use an extra pepper. The method does not change.",
      "Frozen spinach works. Thaw it, squeeze it dry, and add it at the end. Use about half a box.",
    ],
    boosters: [
      "A squeeze of lemon at the table.",
      "A spoon of plain yogurt on each plate.",
    ],
  },
  {
    id: "baked-salmon-quinoa",
    title: "Baked Salmon with Asparagus and Quinoa",
    blurb: "Salmon and asparagus on one pan, quinoa in a pot. A full plate with two timers.",
    meals: ["Dinner"],
    fermented: false,
    diets: ["dairy-free", "gluten-free"],
    prepMin: 15,
    cookMin: 20,
    servings: 2,
    proteinG: 36,
    fiberG: 7,
    micros: ["Omega-3s", "Fiber", "Folate"],
    gutNote:
      "This is the same useful pattern as the other salmon dinners, with a different vegetable and a grain: omega-3s from the fish, fiber from quinoa and asparagus, and a lemon finish instead of a sauce. Rinsing the quinoa matters. The natural coating tastes soapy. Asparagus is done when a knife meets a little resistance in the thick end, not when it is olive-drab and limp.",
    image: "/dishes/baked-salmon-quinoa.jpg",
    tools: ["A sheet pan", "A small pot", "A sieve", "A knife and board"],
    ingredients: [
      ing("salmon fillet", 2, "fillet", "Proteins", { note: "about 6 oz each" }),
      ing("asparagus", 1, "bunch", "Produce", { prepId: "trim-asparagus" }),
      ing("quinoa", 0.75, "cup", "Pantry", { prepId: "rinse-quinoa", note: "dry" }),
      ing("garlic", 1, "clove", "Produce", { prepId: "mince-garlic" }),
      ing("lemon", 1, "", "Produce", { plural: "lemons", prepId: "lemon" }),
      ing("extra-virgin olive oil", 1.5, "tbsp", "Pantry"),
      ing("kosher salt", 0.5, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["trim-asparagus", "rinse-quinoa", "mince-garlic", "lemon"],
    steps: [
      {
        title: "Start the quinoa and the oven",
        detail:
          "Heat the oven to 400°F. Rinse the quinoa, then simmer it with 1 ½ cups of water and a pinch of salt. Cover and cook 15 minutes. Leave the lid on off the heat for 5 minutes, then fluff it. It can wait while the salmon finishes.",
      },
      {
        title: "Trim the asparagus and season the pan",
        detail:
          "Snap one asparagus spear where it wants to break, then cut the rest to that length. Toss the spears with most of the oil, the minced garlic, half the salt, and the pepper. Spread them on the pan. Lay the salmon beside them. Drizzle the fish with the rest of the oil and a pinch of salt and pepper.",
      },
      {
        title: "Bake",
        detail:
          "Bake 12 to 15 minutes. Salmon is done when it flakes and the center is just opaque, around 125 to 130°F if you use a thermometer. Asparagus should be bright and tender at the thick end. If the fish finishes first, take it off and give the asparagus a few more minutes.",
      },
      {
        title: "Plate with lemon",
        detail:
          "Spoon quinoa onto plates, then the salmon and asparagus. Squeeze half the lemon over the pan food. Taste the quinoa. A pinch of salt and the rest of the lemon usually fix a bland pot.",
      },
    ],
    simpler: [
      "No asparagus? Use a bag of broccoli florets and roast them the same way.",
      "Leftover quinoa is fine. Start at the oven step.",
    ],
    boosters: [
      "Chopped parsley on the quinoa.",
      "A few slices of avocado on the side.",
    ],
  },
  {
    id: "chicken-broccoli-casserole",
    title: "Chicken and Broccoli Casserole with Cauliflower Rice",
    blurb: "A baked chicken and broccoli dish bound with yogurt and egg. No canned soup.",
    meals: ["Dinner"],
    fermented: true,
    diets: ["gluten-free"],
    prepMin: 20,
    cookMin: 30,
    servings: 4,
    proteinG: 34,
    fiberG: 6,
    micros: ["Protein", "Vitamin C", "Live cultures"],
    gutNote:
      "The sauce is Greek yogurt and an egg, not a can of cream soup. You still get a spoonable casserole, and the yogurt brings live cultures if it is not boiled first — it goes in near the end and then bakes until just set. Broccoli and cauliflower add two vegetables and a modest amount of fiber. Chicken is the protein that makes this dinner instead of a side.",
    image: "/dishes/chicken-broccoli-casserole.jpg",
    tools: ["A baking dish about 8 by 8 inches", "A skillet", "A knife and board", "A box grater or knife for the cauliflower"],
    ingredients: [
      ing("chicken breast", 16, "oz", "Proteins", { prepId: "cut-chicken", note: "cut into bite-size pieces" }),
      ing("broccoli", 4, "cup", "Produce", { prepId: "broccoli-florets" }),
      ing("cauliflower", 1, "head", "Produce", { prepId: "rice-cauliflower" }),
      ing("plain Greek yogurt", 0.75, "cup", "Dairy & Fermented"),
      ing("large egg", 1, "", "Proteins", { plural: "large eggs" }),
      ing("garlic", 2, "clove", "Produce", { prepId: "mince-garlic" }),
      ing("extra-virgin olive oil", 1, "tbsp", "Pantry"),
      ing("sweet paprika", 0.5, "tsp", "Pantry"),
      ing("kosher salt", 1, "tsp", "Pantry"),
      ing("black pepper", 0.5, "tsp", "Pantry"),
    ],
    prepIds: ["cut-chicken", "broccoli-florets", "rice-cauliflower", "mince-garlic"],
    steps: [
      {
        title: "Heat the oven and prep",
        detail:
          "Heat the oven to 400°F. Cut the chicken into bite-size pieces, cut the broccoli into small florets, rice the cauliflower, and mince the garlic. Lightly oil the baking dish.",
      },
      {
        title: "Cook the chicken and broccoli",
        detail:
          "Warm the oil in a skillet over medium heat. Season the chicken with half the salt and the pepper and cook until it is no longer pink on the outside, about 5 minutes. It will finish in the oven. Add the broccoli and garlic and stir 2 minutes. The broccoli should be bright, not soft.",
      },
      {
        title: "Stir in the cauliflower and the yogurt",
        detail:
          "Take the pan off the heat. Stir in the cauliflower rice, paprika, and the rest of the salt. In a bowl, whisk the yogurt and the egg until smooth, then fold that into the pan. Heat would scramble the egg and make the yogurt grainy, which is why the pan comes off the burner first.",
      },
      {
        title: "Bake until set",
        detail:
          "Spread the mixture in the dish. Bake 25 to 30 minutes, until the center is hot and just set and the edges are starting to brown. Rest 5 minutes so it holds a spoonful. It keeps 3 days. Reheat covered so it does not dry out.",
      },
    ],
    simpler: [
      "Use pre-cut broccoli florets. Still rice the cauliflower, or buy a bag of cauliflower rice and skip the grating.",
      "If you do not have a grater, chop the cauliflower very small with a knife. Stop before it turns to mash.",
    ],
    boosters: [
      "A handful of chopped parsley on top after baking.",
      "A pinch of lemon zest stirred into the yogurt.",
    ],
  },
  {
    id: "egg-white-omelette",
    title: "High-Protein Egg White and Vegetable Omelette",
    blurb: "A soft omelette of egg whites, one whole egg, and a handful of vegetables.",
    meals: ["Breakfast"],
    fermented: false,
    diets: ["vegetarian", "dairy-free", "gluten-free"],
    prepMin: 10,
    cookMin: 8,
    servings: 1,
    proteinG: 32,
    fiberG: 2,
    micros: ["Protein", "Choline", "Vitamin K"],
    gutNote:
      "Egg whites are mostly protein and almost no fiber, so the spinach and pepper are doing the plant work. One whole egg stays in the pan for flavor and for the yolk’s fat, which helps a breakfast feel like a meal. This is a quick plate, not a high-fiber one. Add fruit on the side when you want more for your microbes.",
    image: "/dishes/egg-white-omelette.jpg",
    tools: ["A nonstick skillet", "A bowl", "A fork or whisk", "A spatula", "A knife and board"],
    ingredients: [
      ing("egg whites", 1, "cup", "Proteins", { note: "about 8 whites, or a carton" }),
      ing("large egg", 1, "", "Proteins", { plural: "large eggs" }),
      ing("baby spinach", 1, "cup", "Produce", { prepId: "chop-spinach" }),
      ing("bell pepper", 0.5, "", "Produce", { plural: "bell peppers", prepId: "dice-pepper" }),
      ing("yellow onion", 0.25, "small", "Produce", { plural: "yellow onions", prepId: "dice-onion" }),
      ing("extra-virgin olive oil", 1, "tsp", "Pantry"),
      ing("kosher salt", 0.25, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["chop-spinach", "dice-pepper", "dice-onion"],
    steps: [
      {
        title: "Chop, then beat",
        detail:
          "Dice the onion and pepper small. Chop the spinach if the leaves are large. Whisk the egg whites, the whole egg, salt, and pepper until the mix looks even, with no clear streaks. A few bubbles are fine. A foam is too much — you are not making a soufflé.",
      },
      {
        title: "Soften the vegetables",
        detail:
          "Warm the oil in a nonstick skillet over medium heat. Cook the onion and pepper for 3 minutes, until soft. Add the spinach and stir until it wilts, about 30 seconds. Spread the vegetables in an even layer.",
      },
      {
        title: "Set the eggs",
        detail:
          "Pour in the eggs. Let the bottom set for about 20 seconds, then push the cooked edge toward the center with a spatula and tilt the pan so raw egg runs into the space. Repeat once or twice. Stop while the top still looks slightly wet. Dry egg whites turn rubbery fast.",
      },
      {
        title: "Fold and eat",
        detail:
          "Fold the omelette in half and slide it onto a plate. The center should be just set, not brown. Eat it right away. If you are cooking for someone else, make one omelette at a time. A double batch in one pan is how they tear.",
      },
    ],
    simpler: [
      "Use only spinach if you do not want to dice a pepper. Still salt the eggs.",
      "Carton egg whites are fine. Shake the carton first.",
    ],
    boosters: [
      "A spoon of cottage cheese in the center before you fold it.",
      "A few slices of avocado on the plate.",
    ],
  },
  {
    id: "cottage-fruit-bowl",
    title: "Cottage Cheese and Fruit Bowl with Nuts",
    blurb: "Cold cottage cheese, berries, walnuts, and a pinch of cinnamon. No cooking.",
    meals: ["Breakfast", "Snacks"],
    fermented: true,
    diets: ["vegetarian", "gluten-free"],
    prepMin: 8,
    cookMin: 0,
    servings: 1,
    proteinG: 26,
    fiberG: 4,
    micros: ["Live cultures", "Calcium", "Polyphenols"],
    gutNote:
      "Cottage cheese is a cultured dairy food, in the same family as yogurt, and it is mostly protein. Berries add polyphenols — plant colors your microbes can work on — and a little fiber. The nuts slow the meal down so you are not hungry again immediately. Keep the fruit on top, not stirred in overnight, or the bowl gets watery.",
    image: "/dishes/cottage-fruit-bowl.jpg",
    tools: ["A bowl", "A spoon", "A knife for the strawberries and walnuts"],
    ingredients: [
      ing("plain cottage cheese", 1, "cup", "Dairy & Fermented"),
      ing("strawberries", 0.5, "cup", "Produce", { prepId: "wash-berries", note: "hulled and sliced" }),
      ing("blueberries", 0.25, "cup", "Produce", { prepId: "wash-berries" }),
      ing("walnut pieces", 1, "tbsp", "Nuts & Seeds", { prepId: "chop-nuts" }),
      ing("pumpkin seeds", 1, "tbsp", "Nuts & Seeds"),
      ing("ground cinnamon", 0.25, "tsp", "Pantry"),
      ing("honey", 1, "tsp", "Pantry"),
    ],
    prepIds: ["wash-berries", "chop-nuts"],
    steps: [
      {
        title: "Set the cheese in a bowl",
        detail:
          "Spoon the cottage cheese into a wide bowl. If a puddle of whey sits on top, pour it off or stir it in. Either is fine. A wide bowl lets you see the fruit instead of burying it.",
      },
      {
        title: "Wash and cut the fruit",
        detail:
          "Rinse the berries and pat them dry. Hull the strawberries and slice them the thickness of a coin. Leave the blueberries whole. Wet fruit makes the cheese runny.",
      },
      {
        title: "Chop the walnuts and finish",
        detail:
          "A rough chop is enough. Pieces about the size of a pea stay crunchy. If the walnuts smell like paint or taste bitter, they are old — skip them. Scatter the berries, walnuts, and pumpkin seeds over the cheese. Dust the cinnamon and drizzle the honey. Eat it cold.",
      },
    ],
    simpler: [
      "Blueberries only, if you do not want to use a knife. Leave the walnuts in halves.",
      "Frozen berries are fine after a five-minute thaw. Drain the liquid first.",
    ],
    boosters: [
      "A few drops of lemon on the berries.",
      "Swap the honey for a few slices of a ripe pear when you have one.",
    ],
  },
  {
    id: "turkey-sausage-scramble",
    title: "Turkey Sausage and Vegetable Breakfast Scramble",
    blurb: "Crumble plain turkey sausage with eggs, pepper, and spinach. A hot breakfast in one pan.",
    meals: ["Breakfast"],
    fermented: false,
    diets: ["dairy-free", "gluten-free"],
    prepMin: 10,
    cookMin: 12,
    servings: 2,
    proteinG: 32,
    fiberG: 3,
    micros: ["Protein", "Choline", "Vitamin C"],
    gutNote:
      "Eggs and turkey sausage make this a high-protein breakfast without a shake. Look for a plain sausage, not one glued together with a lot of sugar. The pepper and spinach are the plants. Fiber is modest, so this pairs well with a piece of fruit. Cook the eggs low and slow. High heat is how scrambles turn into rubber.",
    image: "/dishes/turkey-sausage-scramble.jpg",
    tools: ["A skillet", "A bowl", "A knife and board", "A spatula"],
    ingredients: [
      ing("fresh turkey sausage", 8, "oz", "Proteins", { note: "plain, casings off if it is in links" }),
      ing("large egg", 4, "", "Proteins", { plural: "large eggs" }),
      ing("bell pepper", 1, "", "Produce", { plural: "bell peppers", prepId: "dice-pepper" }),
      ing("yellow onion", 0.5, "small", "Produce", { plural: "yellow onions", prepId: "dice-onion" }),
      ing("baby spinach", 2, "cup", "Produce", { prepId: "chop-spinach" }),
      ing("extra-virgin olive oil", 1, "tsp", "Pantry"),
      ing("kosher salt", 0.25, "tsp", "Pantry"),
      ing("black pepper", 0.25, "tsp", "Pantry"),
    ],
    prepIds: ["dice-pepper", "dice-onion", "chop-spinach"],
    steps: [
      {
        title: "Brown the sausage",
        detail:
          "Warm the oil in a skillet over medium heat. If the sausage is in links, slit the casings and peel them off. Crumble the meat into the pan. Cook, breaking it up, until it is browned and no longer pink, about 6 minutes. Spoon off extra fat if a pool forms. You want a sheen, not a fry.",
      },
      {
        title: "Soften the vegetables",
        detail:
          "Add the onion and pepper. Cook 3 minutes, until soft. Add the spinach and stir until it wilts. If the pan looks crowded, that is fine for spinach — it shrinks.",
      },
      {
        title: "Scramble the eggs in",
        detail:
          "Whisk the eggs with the salt and pepper. Pour them over the sausage. Let the bottom set for a few seconds, then push the curds around with a spatula. Take the pan off the heat when the eggs are just set and still look moist. They finish cooking on the way to the plate.",
      },
      {
        title: "Taste and split",
        detail:
          "Taste a bite. Sausage is often salty, which is why this recipe uses less salt than the other egg dishes. Split it between two plates. It does not love the microwave the next day, but it is fine reheated gently in the same pan.",
      },
    ],
    simpler: [
      "No sausage? Use 8 ounces of ground turkey and add a pinch more salt and a pinch of paprika.",
      "Skip the pepper and use only spinach if that is what is in the fridge.",
    ],
    boosters: [
      "A spoon of salsa or chopped tomato on top.",
      "Sliced avocado on the side.",
    ],
  },
  {
    id: "yogurt-nut-parfait",
    title: "Greek Yogurt Parfait with Nuts and Seeds",
    blurb: "Thick yogurt, apple, walnuts, pumpkin seeds, and hemp. A granola-style crunch without the sweet clusters.",
    meals: ["Breakfast", "Snacks"],
    fermented: true,
    diets: ["vegetarian", "gluten-free"],
    prepMin: 8,
    cookMin: 0,
    servings: 1,
    proteinG: 28,
    fiberG: 5,
    micros: ["Live cultures", "Fiber", "Magnesium"],
    gutNote:
      "Plain Greek yogurt brings live cultures and most of the protein. The apple peel is fiber and polyphenols, so leave it on. Nuts and seeds replace granola, which is often mostly sugar stuck to oats. Hemp seeds are here because they add protein without a powder. If you want this sweeter, the teaspoon of honey is enough. More than that and it starts to taste like dessert, which is a different recipe in this app.",
    image: "/dishes/yogurt-nut-parfait.jpg",
    tools: ["A glass or bowl", "A knife and board"],
    ingredients: [
      ing("plain Greek yogurt", 1, "cup", "Dairy & Fermented"),
      ing("apple", 1, "", "Produce", { plural: "apples", prepId: "cube-apple" }),
      ing("walnut pieces", 1, "tbsp", "Nuts & Seeds", { prepId: "chop-nuts" }),
      ing("pumpkin seeds", 1, "tbsp", "Nuts & Seeds"),
      ing("hemp seeds", 1, "tbsp", "Nuts & Seeds"),
      ing("ground cinnamon", 0.25, "tsp", "Pantry"),
      ing("honey", 1, "tsp", "Pantry"),
    ],
    prepIds: ["cube-apple", "chop-nuts"],
    steps: [
      {
        title: "Spoon in half the yogurt",
        detail:
          "Put half the yogurt in a glass if you want to see the layers, or in a bowl if you do not care. A glass that is too narrow makes the apple hard to eat. A wide jar or a cereal bowl both work.",
      },
      {
        title: "Cube the apple",
        detail:
          "Wash the apple and leave the peel on. Cut the cheeks off the core, then cut them into bite-size chunks. Toss the chunks with the cinnamon so every piece gets a little. Eat it soon. Cubed apple browns if it sits out.",
      },
      {
        title: "Layer and finish",
        detail:
          "Add half the apple, then the rest of the yogurt, then the rest of the apple. Scatter the walnuts, pumpkin seeds, and hemp seeds on top. Drizzle the honey. Eat it right away so the nuts stay crisp. If you pack it for later, keep the nuts in a separate corner of the container.",
      },
    ],
    simpler: [
      "No apple? Use a handful of blueberries and skip the knife.",
      "Any one of the three seeds is enough if you do not want to buy all of them this week.",
    ],
    boosters: [
      "A few drops of lemon on the apple to keep it bright.",
      "A spoon of plain kefir stirred into the yogurt if you want it looser.",
    ],
  },
  {
    id: "yogurt-berry-parfait",
    title: "Greek Yogurt Berry Parfait with Nuts and Seeds",
    blurb: "A cold dessert parfait. Yogurt, berries, walnuts, and pumpkin seeds, lightly sweetened.",
    meals: ["Desserts", "Snacks"],
    fermented: true,
    diets: ["vegetarian", "gluten-free"],
    prepMin: 8,
    cookMin: 0,
    servings: 1,
    proteinG: 24,
    fiberG: 5,
    micros: ["Live cultures", "Polyphenols", "Calcium"],
    gutNote:
      "This is the sweet bowl in the dessert list, still built from yogurt and fruit. Berries carry polyphenols, the plant colors microbes can turn into compounds that travel the gut-brain axis. The yogurt is the fermented food and most of the protein. It is not a high-protein meal the way the chicken dinners are, and it does not need to be. A teaspoon of honey is the sweetener. The nuts are the crunch, instead of a cookie.",
    image: "/dishes/yogurt-berry-parfait.jpg",
    tools: ["A glass or bowl", "A spoon", "A knife for the strawberries"],
    ingredients: [
      ing("plain Greek yogurt", 1, "cup", "Dairy & Fermented"),
      ing("blueberries", 0.25, "cup", "Produce", { prepId: "wash-berries" }),
      ing("raspberries", 0.25, "cup", "Produce", { prepId: "wash-berries" }),
      ing("strawberries", 0.25, "cup", "Produce", { prepId: "wash-berries", note: "hulled and sliced" }),
      ing("walnut pieces", 1, "tbsp", "Nuts & Seeds", { prepId: "chop-nuts" }),
      ing("pumpkin seeds", 1, "tbsp", "Nuts & Seeds"),
      ing("honey", 1, "tsp", "Pantry"),
    ],
    prepIds: ["wash-berries", "chop-nuts"],
    steps: [
      {
        title: "Wash and dry the berries",
        detail:
          "Rinse the berries right before you use them and pat them dry. Hull and slice the strawberries. Leave the blueberries and raspberries whole unless they are huge. Wet berries weep into the yogurt and make it runny.",
      },
      {
        title: "Layer the glass",
        detail:
          "Spoon half the yogurt into a glass. Add half the berries, then the rest of the yogurt, then the rest of the berries. You should be able to see the layers from the side. A bowl is fine if you do not have a glass.",
      },
      {
        title: "Finish with crunch",
        detail:
          "Chop the walnuts roughly and scatter them with the pumpkin seeds. Drizzle the honey. Eat it cold the same day. If you are taking it somewhere, put the nuts on at the last minute.",
      },
    ],
    simpler: [
      "One kind of berry is enough. Use whatever looks firm at the store.",
      "Skip the honey if the berries are already sweet.",
    ],
    boosters: [
      "A pinch of orange zest on the yogurt.",
      "A few hemp seeds if you want a little more protein.",
    ],
  },
  {
    id: "avocado-chocolate-mousse",
    title: "Dark Chocolate Avocado Mousse with Berries",
    blurb: "A blender-free chocolate mousse made from avocado, cocoa, and a little honey.",
    meals: ["Desserts"],
    fermented: false,
    diets: ["vegetarian", "dairy-free", "gluten-free"],
    prepMin: 10,
    cookMin: 0,
    rest: "30 minutes in the fridge",
    servings: 2,
    proteinG: 3,
    fiberG: 7,
    micros: ["Fiber", "Potassium", "Polyphenols"],
    gutNote:
      "Avocado is the body of this mousse, so you get fiber and fat from a whole food instead of cream. Cocoa is bitter on purpose. The honey is there so it tastes like dessert, not like guacamole with chocolate. This is not a high-protein sweet. The berries on top are the polyphenols. Chill it or the texture feels loose and the cocoa tastes harsh.",
    image: "/dishes/avocado-chocolate-mousse.jpg",
    tools: ["A bowl", "A fork", "A knife", "Two small cups"],
    ingredients: [
      ing("avocado", 1, "", "Produce", { plural: "avocados", prepId: "slice-avocado", note: "ripe, mashed" }),
      ing("unsweetened cocoa powder", 2, "tbsp", "Pantry"),
      ing("dark chocolate 70%", 1, "oz", "Pantry", { note: "chopped, optional but good" }),
      ing("honey", 1, "tbsp", "Pantry"),
      ing("blueberries", 0.5, "cup", "Produce", { prepId: "wash-berries" }),
      ing("kosher salt", 0.25, "tsp", "Pantry", { note: "a pinch" }),
    ],
    prepIds: ["slice-avocado", "wash-berries"],
    steps: [
      {
        title: "Mash the avocado smooth",
        detail:
          "Cut the avocado, remove the pit with a spoon, and scoop the flesh into a bowl. Mash it with a fork until you cannot see lumps. A ripe avocado mashes easily. A hard one will stay grainy, and the mousse will taste like salad. If yours is firm, this is not the day for mousse.",
      },
      {
        title: "Beat in the cocoa and honey",
        detail:
          "Add the cocoa, honey, and salt. Stir hard for a full minute. The color should turn an even brown with no green streaks. Taste. If it is bitter, add another teaspoon of honey, not a pour. If it tastes flat, the pinch of salt is missing.",
      },
      {
        title: "Chill",
        detail:
          "Spoon it into two cups. Press plastic wrap against the surface if you have it, so the top does not darken. Refrigerate at least 30 minutes. It thickens as it gets cold. It keeps one day. Avocado mousse is not a three-day dessert.",
      },
      {
        title: "Top with berries and chocolate",
        detail:
          "Rinse the blueberries and pat them dry. Chop the dark chocolate into little shards. Put both on the mousse just before you eat it. The chocolate is optional, but a few shards make it taste like a real sweet instead of a smoothie bowl.",
      },
    ],
    simpler: [
      "Skip the chopped chocolate bar and use only cocoa. Still chill it.",
      "No fork patience? Mash it in a jar with a spoon, pressing against the side.",
    ],
    boosters: [
      "A few raspberries with the blueberries.",
      "A drop of vanilla if you already have a bottle. Do not buy one just for this.",
    ],
  },
  {
    id: "baked-apples",
    title: "Baked Apples with Cinnamon, Walnuts, and Greek Yogurt",
    blurb: "Warm apples stuffed with walnuts, with cold yogurt on the side.",
    meals: ["Desserts"],
    fermented: true,
    diets: ["vegetarian", "gluten-free"],
    prepMin: 10,
    cookMin: 30,
    servings: 2,
    proteinG: 12,
    fiberG: 5,
    micros: ["Fiber", "Live cultures", "Polyphenols"],
    gutNote:
      "The apple peel stays on. That is where a lot of the fiber and polyphenol color lives, and both are useful to gut bacteria. Baking softens the apple without turning it into a sugar syrup. The yogurt is the protein and the fermented food, served cold against the warm fruit. This is a small dessert, not a protein meal. Two apples and a cup of yogurt feed two people.",
    image: "/dishes/baked-apples.jpg",
    tools: ["A small baking dish", "A knife", "A spoon"],
    ingredients: [
      ing("apple", 2, "", "Produce", { plural: "apples", prepId: "cube-apple", note: "halved, cores scooped out" }),
      ing("walnut pieces", 2, "tbsp", "Nuts & Seeds", { prepId: "chop-nuts" }),
      ing("plain Greek yogurt", 1, "cup", "Dairy & Fermented"),
      ing("ground cinnamon", 0.5, "tsp", "Pantry"),
      ing("honey", 2, "tsp", "Pantry"),
    ],
    prepIds: ["cube-apple", "chop-nuts"],
    steps: [
      {
        title: "Heat the oven and halve the apples",
        detail:
          "Heat the oven to 375°F. Wash the apples and leave the peel on. Cut them in half from stem to base. Scoop out the core and seeds with a spoon. You want a hollow big enough for the walnuts, not a hole that goes through the skin.",
      },
      {
        title: "Fill them",
        detail:
          "Set the halves cut side up in a small baking dish. Chop the walnuts and mix them with the cinnamon and honey. Pile that into the hollows. Pour 2 tablespoons of water into the dish, not over the nuts, so the apples steam a little and do not stick.",
      },
      {
        title: "Bake until a knife slides in",
        detail:
          "Bake 25 to 35 minutes. A small apple is done sooner. They are ready when a knife meets soft flesh and the edges have started to wrinkle. If the nuts look dry, baste them once with the liquid in the dish.",
      },
      {
        title: "Cool slightly and add yogurt",
        detail:
          "Let them sit 5 minutes. Spoon cold yogurt beside each half, not on top of the hot nuts if you want the yogurt to stay thick. Eat them the day you bake them. A leftover apple is fine cold from the fridge the next morning.",
      },
    ],
    simpler: [
      "No walnuts? Cinnamon and honey alone still make a baked apple. You lose the crunch.",
      "If the apples are very large, give them 10 extra minutes and cover the dish for the first half.",
    ],
    boosters: [
      "A few raisins in the nut filling, if you already have them.",
      "A pinch of orange zest in the honey.",
    ],
  },
  {
    id: "kefir-chia-almond-cups",
    title: "Kefir Chia Pudding Cups with Berries and Almond Butter",
    blurb: "Two jars of kefir and chia, finished with berries and a spoon of almond butter.",
    meals: ["Desserts", "Snacks"],
    fermented: true,
    diets: ["vegetarian", "gluten-free"],
    prepMin: 10,
    cookMin: 0,
    rest: "4 hours, or overnight",
    servings: 2,
    proteinG: 14,
    fiberG: 9,
    micros: ["Live cultures", "Fiber", "Calcium"],
    gutNote:
      "Chia seeds swell in liquid and bring a lot of soluble fiber, which is an easy food for gut bacteria. Kefir is fermented milk with a wider mix of cultures than most yogurts. Almond butter adds fat so the cup is more than a fiber gel, and the berries add polyphenols. This is a make-ahead cup, not a high-protein dinner. Stir twice at the start or the seeds clump into a dry puck at the bottom.",
    image: "/dishes/kefir-chia-almond-cups.jpg",
    tools: ["Two jars or glasses", "A spoon"],
    ingredients: [
      ing("plain unsweetened kefir", 2, "cup", "Dairy & Fermented"),
      ing("chia seeds", 4, "tbsp", "Nuts & Seeds"),
      ing("almond butter", 2, "tbsp", "Nuts & Seeds"),
      ing("blueberries", 0.5, "cup", "Produce", { prepId: "wash-berries" }),
      ing("raspberries", 0.5, "cup", "Produce", { prepId: "wash-berries" }),
      ing("honey", 2, "tsp", "Pantry"),
      ing("ground cinnamon", 0.5, "tsp", "Pantry"),
    ],
    prepIds: ["wash-berries"],
    steps: [
      {
        title: "Stir the chia into the kefir",
        detail:
          "Divide the kefir, chia, honey, and cinnamon between two jars. Stir each one for a full 30 seconds, until you cannot see dry clumps. Wait 5 minutes and stir again. That second stir is what stops a dry lump at the bottom.",
      },
      {
        title: "Chill until it sets",
        detail:
          "Cover the jars and refrigerate at least 4 hours, or overnight. The seeds swell and the mix looks like a soft pudding. If a jar is still runny after 4 hours, stir in another teaspoon of chia and wait 30 minutes.",
      },
      {
        title: "Top and eat",
        detail:
          "Rinse the berries and pat them dry. Stir the pudding, then add a spoon of almond butter and a pile of berries to each jar. The pudding keeps two days. Add the fruit and almond butter the day you eat it so the berries do not break down.",
      },
    ],
    simpler: [
      "One jar is fine if you are only feeding yourself. Use half of everything.",
      "No kefir? Use milk you already drink. You lose some of the cultures, not the fiber.",
    ],
    boosters: [
      "A teaspoon of cocoa stirred in with the chia, if you want it chocolate.",
      "Lemon zest with the honey.",
    ],
  },
  {
    id: "berry-crisp",
    title: "Simple Berry Crisp with an Oat and Nut Topping",
    blurb: "Warm berries under oats and walnuts. Olive oil instead of a stick of butter.",
    meals: ["Desserts"],
    fermented: false,
    diets: ["vegetarian", "dairy-free", "gluten-free"],
    prepMin: 10,
    cookMin: 30,
    servings: 4,
    proteinG: 4,
    fiberG: 6,
    micros: ["Polyphenols", "Fiber", "Manganese"],
    gutNote:
      "Berries bring polyphenols and fiber, and oats bring beta-glucan, a soluble fiber that bacteria ferment. Baking concentrates the fruit without adding a syrup. The topping is oats, walnuts, a little honey, and olive oil — not a pastry crust. Use certified gluten-free oats if you avoid gluten. This serves four as a small dessert. It is not a protein dish. A spoon of yogurt on the side is listed as a booster if you want one.",
    image: "/dishes/berry-crisp.jpg",
    tools: ["A baking dish about 8 by 8 inches", "A bowl", "A spoon"],
    ingredients: [
      ing("blueberries", 2, "cup", "Produce", { prepId: "wash-berries" }),
      ing("strawberries", 2, "cup", "Produce", { prepId: "wash-berries", note: "hulled and halved" }),
      ing("rolled oats", 0.75, "cup", "Pantry", { note: "certified gluten-free if you need them" }),
      ing("walnut pieces", 3, "tbsp", "Nuts & Seeds", { prepId: "chop-nuts" }),
      ing("honey", 2, "tbsp", "Pantry"),
      ing("extra-virgin olive oil", 1, "tbsp", "Pantry"),
      ing("ground cinnamon", 1, "tsp", "Pantry"),
    ],
    prepIds: ["wash-berries", "chop-nuts"],
    steps: [
      {
        title: "Heat the oven and ready the fruit",
        detail:
          "Heat the oven to 375°F. Rinse the berries and pat them dry. Hull the strawberries and cut big ones in half. Put all the berries in the baking dish and toss them with 1 tablespoon of the honey and half the cinnamon.",
      },
      {
        title: "Mix the topping",
        detail:
          "In a bowl, stir the oats, chopped walnuts, the rest of the honey, the olive oil, and the rest of the cinnamon. It should look like damp sand, not a dough. If it is dusty, add a teaspoon more oil. If it is a paste, you added too much — sprinkle in another spoon of oats.",
      },
      {
        title: "Bake until the fruit bubbles",
        detail:
          "Scatter the topping over the berries. Leave some fruit showing so steam can escape. Bake 25 to 35 minutes, until the oats are golden and the berry juice is bubbling at the edges. If the topping browns too fast, lay a piece of foil on top for the last 10 minutes.",
      },
      {
        title: "Cool before you spoon it",
        detail:
          "Let it sit 10 minutes. The juices thicken as they cool. Spoon it warm. It keeps 3 days in the fridge. Reheat a portion in a small dish at 350°F for about 10 minutes, or eat it cold.",
      },
    ],
    simpler: [
      "All blueberries, or all strawberries, if you only bought one.",
      "No walnuts? Use all oats. Add an extra tablespoon so the topping still covers the fruit.",
    ],
    boosters: [
      "A spoon of cold plain Greek yogurt on a warm serving.",
      "A pinch of lemon zest tossed with the berries.",
    ],
  },
  {
    id: "banana-nice-cream",
    title: "Banana Nice Cream with Cocoa and Berries",
    blurb: "Frozen banana mashed into a soft ice cream, with cocoa and a few berries.",
    meals: ["Desserts"],
    fermented: false,
    diets: ["vegetarian", "dairy-free", "gluten-free"],
    prepMin: 10,
    cookMin: 0,
    servings: 2,
    proteinG: 3,
    fiberG: 5,
    micros: ["Potassium", "Fiber", "Polyphenols"],
    gutNote:
      "A very ripe banana, frozen, blends or mashes into a creamy texture without dairy. The fiber is still there, which is the useful part for gut bacteria. Cocoa makes it taste like chocolate instead of a plain banana smoothie. This is a small dessert for two, low in protein on purpose. Freeze the bananas yourself when they get spotty, or buy a bag already frozen. Rock-hard bananas need a few minutes on the counter before they will mash.",
    image: "/dishes/banana-nice-cream.jpg",
    tools: ["A bowl", "A fork", "A knife if the bananas are in large pieces"],
    ingredients: [
      ing("frozen banana", 3, "", "Frozen", { plural: "frozen bananas", note: "very ripe before freezing, peeled" }),
      ing("unsweetened cocoa powder", 1, "tbsp", "Pantry"),
      ing("almond butter", 1, "tbsp", "Nuts & Seeds"),
      ing("blueberries", 0.5, "cup", "Produce", { prepId: "wash-berries" }),
    ],
    prepIds: ["wash-berries"],
    steps: [
      {
        title: "Soften the bananas just enough",
        detail:
          "If the bananas are frozen solid, leave them on the counter for 5 minutes. You want them soft enough to mash and still icy. If they melt into a puddle, you will get a smoothie, not a cream. Slice them into coins so the fork has a chance.",
      },
      {
        title: "Mash with cocoa and almond butter",
        detail:
          "Put the bananas, cocoa, and almond butter in a bowl. Mash and stir until the mixture looks like soft-serve and the color is even. A few small lumps of banana are fine. A green streak of unmixed cocoa is not. Taste. Ripe bananas are sweet enough. Do not add honey unless it still tastes flat.",
      },
      {
        title: "Serve with berries",
        detail:
          "Rinse the blueberries and fold most of them in, or pile them on top. Eat it immediately. It does not hold like store ice cream. If you must wait, press it into a container and freeze it for 20 minutes, then mash it again before serving so it is not a brick.",
      },
    ],
    simpler: [
      "No cocoa? It is still nice cream. Add the berries and a pinch of cinnamon.",
      "A blender is easier if you have one. Pulse. Do not add milk or it turns into a drink.",
    ],
    boosters: [
      "A few raspberries with the blueberries.",
      "Extra almond butter in the bowl, a teaspoon, if you want it richer.",
    ],
  },
  {
    id: "baked-pears",
    title: "Baked Pears with Cinnamon, Walnuts, and Greek Yogurt",
    blurb: "The apple dessert, made with pears. Warm fruit, walnuts, and cold yogurt.",
    meals: ["Desserts"],
    fermented: true,
    diets: ["vegetarian", "gluten-free"],
    prepMin: 10,
    cookMin: 28,
    servings: 2,
    proteinG: 12,
    fiberG: 6,
    micros: ["Fiber", "Live cultures", "Potassium"],
    gutNote:
      "Pears bring soluble fiber, including the kind that feeds gut bacteria, and the skin holds a good share of it. Leave the peel on. Baking them with walnuts and cinnamon makes a warm dessert without a crust. The yogurt is cold, fermented, and where most of the protein in this plate lives. Ripe pears bake faster than hard ones. If the pear is rock hard, it needs extra time, not a hotter oven.",
    image: "/dishes/baked-pears.jpg",
    tools: ["A small baking dish", "A knife", "A spoon"],
    ingredients: [
      ing("pear", 2, "", "Produce", { plural: "pears", prepId: "cube-apple", note: "halved, cores scooped out" }),
      ing("walnut pieces", 2, "tbsp", "Nuts & Seeds", { prepId: "chop-nuts" }),
      ing("plain Greek yogurt", 1, "cup", "Dairy & Fermented"),
      ing("ground cinnamon", 0.5, "tsp", "Pantry"),
      ing("honey", 2, "tsp", "Pantry"),
    ],
    prepIds: ["cube-apple", "chop-nuts"],
    steps: [
      {
        title: "Heat the oven and halve the pears",
        detail:
          "Heat the oven to 375°F. Wash the pears and leave the peel on. Cut them in half lengthwise. Scoop out the core and the stringy center with a spoon. A ripe pear gives easily. If the spoon slips, cut a little deeper with the tip of a knife, away from your hand.",
      },
      {
        title: "Fill the hollows",
        detail:
          "Set the halves cut side up in a small dish. Chop the walnuts and mix them with the cinnamon and honey. Spoon that into the hollows. Add 2 tablespoons of water to the bottom of the dish so the pears do not scorch where they touch the pan.",
      },
      {
        title: "Bake until tender",
        detail:
          "Bake 22 to 30 minutes. They are done when a knife slides into the thick end and the peel looks slightly wrinkled. Hard pears can take longer. Cover the dish if the nuts are browning before the fruit is soft.",
      },
      {
        title: "Rest, then add yogurt",
        detail:
          "Cool 5 minutes. Spoon the yogurt next to the pears so it stays cold and thick. Eat them the day you bake them for the best texture. A leftover half is good cold the next day with the rest of the yogurt.",
      },
    ],
    simpler: [
      "No walnuts? Cinnamon and honey still work. The pear is the dessert.",
      "Very ripe pears may be done in 20 minutes. Check early so they do not collapse.",
    ],
    boosters: [
      "A few drops of lemon in the honey.",
      "A pinch of ginger if you already have the jar open.",
    ],
  },
];
