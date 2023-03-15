
let data = [
    '120g cup Italian-style dried bread crumbs ',
    '150g cup grated Pecorino Romano ',
    '2 garlic cloves, peeled and minced ',
    '2 tablespoons chopped fresh Italian parsley leaves ',
    '1 tablespoon chopped fresh mint leaves ',
    '1 medium onion, finely chopped ',
    'Salt and freshly ground black pepper ',
    '32 egg roll wrappers ',
    '80ml extra-virgin olive oil ',
    '28 large (2 1/2-inch-diameter) white mushrooms, stemmed '
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
step1.innerText = "Step 1:  Preheat the oven to 200°C.",
list2.appendChild(step1);

const step2 = document.createElement('li');
step2.setAttribute('li', 'step2');
step2.classList.add('step2');
step2.innerText = "Step 2: Stir the breadcrumbs, Pecorino Romano, garlic, parsley, mint, salt and pepper, to taste, and two tablespoons olive oil in a medium bowl to blend.",
list2.appendChild(step2);

const step3 = document.createElement('li');
step3.setAttribute('li', 'step3');
step3.classList.add('step3');
step3.innerText = "Step 3: Drizzle a heavy large baking sheet with about one tablespoon olive oil, to coat. Spoon the filling into the mushroom cavities and arrange on the baking sheet, cavity side up. Drizzle remaining oil over the filling in each mushroom. Bake until the mushrooms are tender and the filling is heated through and golden on top, about 25 minutes. Serve.",
list2.appendChild(step3);