let data = [
    '2 tablespoons unsalted butter ',
    '1 onion, diced ',
    '2 carrots, peeled and diced ',
    '2 celery ribs, diced ',
    '3 cloves garlic, minced ',
    '8 cups chicken stock ',
    '2 bay leaves ',
    'Kosher salt freshly ground black pepper, to taste ',
    '2 ½ pounds bone-in, skinless chicken breasts ',
    '2 ½ cups wide egg noodles ',
    '2 tablespoons chopped fresh parsley leaves ',
    '2 tablespoons chopped fresh dill ',
    '1 tablespoon freshly squeezed lemon juice, or more, to taste '
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
step1.innerText = "Step 1:  Melt butter in a large stockpot or Dutch oven over medium heat. Add onion, carrots and celery. Cook, stirring occasionally, until tender, about 3-4 minutes. Stir in garlic until fragrant, about 1 minute.",
list2.appendChild(step1);

const step2 = document.createElement('li');
step2.setAttribute('li', 'step2');
step2.classList.add('step2');
step2.innerText = "Step 2: Stir in chicken stock and bay leaves; season with salt and pepper, to taste. Add chicken and bring to boil; reduce heat and simmer, covered, until the chicken is cooked through, about 30-40 minutes. Remove chicken and let cool before dicing into bite-size pieces, discarding bones. Stir in chicken and pasta and cook until tender, about 6-7 minutes.",
list2.appendChild(step2);

const step3 = document.createElement('li');
step3.setAttribute('li', 'step3');
step3.classList.add('step3');
step3.innerText = "Step 3: Remove from heat; stir in parsley, dill and lemon juice; season with salt and pepper, to taste.",
list2.appendChild(step3);

const step4 = document.createElement('li');
step4.setAttribute('li', 'step4');
step4.classList.add('step4');
step4.innerText = "Step 4: Serve immediately. ",
list2.appendChild(step4);