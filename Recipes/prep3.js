let data = [
    '1/3 cup (3 oz) cream cheese ',
    '1/4 cup green salsa ',
    '1 tablespoon fresh lime juice ',
    '1/2 teaspoon cumin ',
    '1 teaspoon chili powder ',
    '1/2 teaspoon onion powder ',
    '1/4 teaspoon granulated garlic, or garlic powder ',
    '3 Tablespoon chopped cilantro ',
    '2 Tablespoon sliced green onions ',
    '28 large (2 1/2-inch-diameter) white msushrooms, stemmed ',
    '2 C shredded cooked chicken ',
    '1 C grated pepperjack or plain jack cheese ',
    'small flour or corn tortillas ',
    'kosher salt ',
    'cooking spray or olive oil ',
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
step1.innerText = "Step 1:  Heat cream cheese in the microwave for about 20-30 seconds so it’s soft and easy to stir..Add green salsa, lime juice, cumin, chili powder, onion powder and granulated garlic. Stir to combine and then add cilantro and green onions. Add chicken and cheese and combine well.",
list2.appendChild(step1);

const step2 = document.createElement('li');
step2.setAttribute('li', 'step2');
step2.classList.add('step2');
step2.innerText = "Step 2: Heat oven to 425. Line a baking sheet with foil and lightly coat with cooking spray.",
list2.appendChild(step2);

const step3 = document.createElement('li');
step3.setAttribute('li', 'step3');
step3.classList.add('step3');
step3.innerText = "Step 3: If using corn tortillas, work with a few tortillas at a time and heat in the microwave, wrapped in damp paper towels until they are soft enough to roll without cracking. Usually 20-30 seconds will do it. If using flour tortillas straight from the fridge, it helps to warm them in the microwave so they’re easier to roll.",
list2.appendChild(step3);

const step4 = document.createElement('li');
step4.setAttribute('li', 'step4');
step4.classList.add('step4');
step4.innerText = "Step 4: Place 2-3 T of chicken mixture on the lower third of a tortilla, keeping it about 1 inch from the edges. Roll up tortillas and place seam down on a baking sheet, not touching one another. Spray lightly with cooking spray, or lightly brush with olive oil and sprinkle lightly with kosher salt. Place pan in oven and bake for 15-20 minutes or until crisp and the ends start to get golden brown. Remove from oven and let cool slightly before serving. Dip in sour cream, or our favorite: Creamy Lime-Cilantro Ranch.",
list2.appendChild(step4);