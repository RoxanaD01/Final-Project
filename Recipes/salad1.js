let data = [
    'croutons ',
    '½ cup mayonnaise ',
    '1 medium garlic clove, minced ',
    '2 teaspoons lemon juice, to taste ',
    '1 teaspoon Dijon mustard ',
    '½ teaspoon Worcestershire sauce*, to taste',
    '⅛ teaspoon fine salt ',
    '⅓ cup (1 ounce) finely grated Parmesan cheese ',
    '1 tablespoon water ',
    '2 medium heads of romaine lettuce (10 ounces), roughly chopped ',
    '⅓ cup (1 ounce) finely grated Parmesan '
];

const list = document.getElementById('ingredients');

data.forEach((item) => {
    let li = document.createElement('li');
    li.innerText = item;
    list.appendChild(li);
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'name';
    checkbox.value = 'value';
    checkbox.id = 'id';

    let label = document.createElement('label');
    label.htmlFor = 'id';
    label.appendChild(document.createTextNode(''))
    li.appendChild(checkbox);
    li.appendChild(label);
});

const list2 = document.getElementById('steps');

const step1 = document.createElement('li');
step1.setAttribute('li', 'step1');
step1.classList.add('step1');
step1.innerText = "Step 1:  Preheat the oven to 400 degrees Fahrenheit and line a large, rimmed baking sheet with parchment paper for easy clean-up. Line a plate with a paper towel and set it aside.",
list2.appendChild(step1);

const step2 = document.createElement('li');
step2.setAttribute('li', 'step2');
step2.classList.add('step2');
step2.innerText = "Step 2: To prepare the croutons: Use a serrated knife to gently slice the bread into ¾-inch cubes (or if it’s easier, use your fingers to gently tear the bread into pieces about that size). Place the cubed bread on the prepared baking sheet. Drizzle with the olive oil and sprinkle with the salt, garlic powder, and several twists of black pepper. Gently toss the bread with your hands until it’s lightly coated in oil, then arrange the bread evenly across the baking sheet.",
list2.appendChild(step2);

const step3 = document.createElement('li');
step3.setAttribute('li', 'step3');
step3.classList.add('step3');
step3.innerText = "Step 3: Bake, tossing every 5 minutes, for about 10 to 12 minutes, until the croutons are turning golden brown but still offer a bit of chew in the center. Remove the croutons from the oven and transfer them to the lined plate to absorb excess oil. Once cool, season to taste with additional salt and pepper, if desired..",
list2.appendChild(step3);

const step4 = document.createElement('li');
step4.setAttribute('li', 'step4');
step4.classList.add('step4');
step4.innerText = "Step 4: To prepare the salad dressing: In a liquid measuring cup or bowl, combine the mayonnaise, garlic, lemon juice, Dijon, and Worcestershire sauce, and salt. Stir to combine. Stir in the Parmesan, followed by the water. Season generously with black pepper, to taste. ",
list2.appendChild(step4);