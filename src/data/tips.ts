export type Lesson = {
  id: string;
  title: string;
  summary: string;
  points: string[];
};

export const lessons: Lesson[] = [
  {
    id: "mise",
    title: "Set the counter before you turn on the heat",
    summary:
      "Cooks call this mise en place. It just means everything is cut, measured, and within reach before the pan gets hot.",
    points: [
      "Read the recipe once, all the way through, before you chop anything. Notice the oven temperature and any resting time.",
      "Pull out the tools listed at the top. A missing sheet pan mid-recipe is how dinner gets stressful.",
      "Cut the vegetables first, then the raw meat. Or use two boards. Wash the meat board before it touches anything you will eat raw, like salad greens.",
      "Put cut ingredients in small piles or bowls in the order they go into the pan. Then cooking is just adding, not searching.",
      "Taste as you go, once it is safe to taste. Salt late enough that you can still fix it, and early enough that the vegetables can absorb it.",
    ],
  },
  {
    id: "knife",
    title: "A calmer way to hold a knife",
    summary: "A sharp knife plus a stable board is safer than a dull knife and a rush.",
    points: [
      "Put a damp kitchen towel under the board so it cannot slide.",
      "Hold the knife handle with a firm, relaxed grip. Your index finger can rest along the side of the blade for control. You do not need to choke up or look dramatic.",
      "On the food hand, curl your fingertips under so your knuckles face the blade. The knife rides against your knuckles. This is called the claw, and it keeps fingertips out of the way.",
      "Cut down and slightly forward. If you are sawing wildly, the piece is probably too big or the knife is dull.",
      "Stop and reset when you feel rushed. Most cuts in this app are a dice, a mince, or a slice. The photos show the shape you are aiming for.",
    ],
  },
  {
    id: "heat",
    title: "Heat: how to tell the pan is ready",
    summary: "Food sticks and steams when the pan is crowded or cold. Browning needs space and a little patience.",
    points: [
      "Add oil to a warm pan, then wait until the oil shimmers and moves like water. That is medium-high for most of these recipes. If it smokes, pull the pan off the heat for 20 seconds.",
      "Pat meat and vegetables dry. Water is the enemy of browning.",
      "Leave food alone for the first minute or two. If you stir constantly it never gets color.",
      "If the pan looks crowded, cook in two batches. Crowding drops the temperature and the food boils in its own juice.",
      "Rest cooked meat for a few minutes before you slice it. The juices settle instead of running all over the board.",
    ],
  },
  {
    id: "flavor",
    title: "Salt, fat, and acid",
    summary: "If a dish tastes flat, it is usually missing one of these three. You do not need a long list of sauces.",
    points: [
      "Salt amounts in these recipes assume kosher salt. If you only have fine table salt, use about half.",
      "Olive oil carries flavor and helps you absorb some of the plant compounds in vegetables. You do not need much.",
      "Acid wakes food up at the end. Lemon juice or a splash of apple cider vinegar, added off the heat or at the last minute, makes chicken, fish, and lentils taste finished.",
      "Taste, then add a pinch more salt or a squeeze of lemon. Change one thing at a time so you learn what it did.",
      "Fresh herbs go in at the end. Garlic and ginger burn if they sit alone in hot oil for more than half a minute.",
    ],
  },
  {
    id: "words",
    title: "Kitchen words, in plain language",
    summary: "You do not need chef vocabulary. These are the words these recipes actually use.",
    points: [
      "Dice: small cubes. Mince: cut even smaller, like coarse sand. Slice: thin pieces. Chop: rough pieces when the exact shape does not matter.",
      "Sauté: cook in a little oil over medium heat, stirring sometimes, until softer or lightly browned.",
      "Simmer: small bubbles, not a rolling boil. Boil: big bubbles. A simmer is what you want for lentils, quinoa, and sauce.",
      "Fold: stir gently so you do not crush berries, zucchini ribbons, or tender eggs.",
      "Doneness you can see: salmon flakes when a fork twists it. Chicken and turkey should be opaque all the way through, with no pink in the center, and the juices run clear. Eggs for a scramble should look just set and still a little glossy.",
    ],
  },
  {
    id: "safety",
    title: "Food safety, without the scare",
    summary: "A few habits cover almost everything in this app.",
    points: [
      "Wash your hands with soap before you cook and again after raw chicken, turkey, or beef.",
      "Keep raw meat away from food you will not cook, like berries, salad, and yogurt. Different boards, or wash the board in between.",
      "Poultry is done at 165°F in the center if you have a thermometer. No thermometer? Cut the thickest piece. It should be opaque, not shiny or pink.",
      "Leftovers go in the fridge within two hours. Eat them within three days. Egg muffins, the lentil pie, and the turkey salad reheat well.",
      "If a fish smells sharply sour or like ammonia, do not cook it. Fresh fish smells like the ocean, mild and clean.",
    ],
  },
];
