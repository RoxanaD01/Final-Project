let data = [
    '1 English cucumber, cut lengthwise, seeded, and sliced ¼-inch thick ',
    '1 green bell pepper, chopped into 1-inch pieces ',
    '2 cups halved cherry tomatoes ',
    '5 ounces feta cheese, cut into ½ inch cubes ',
    '⅓ cup thinly sliced red onion ',
    '⅓ cup pitted Kalamata olives ',
    '⅓ cup fresh mint leaves ',
    'dressing ',
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
step1.innerText = "Step 1:  Make the dressing: In a small bowl, whisk together the olive oil, vinegar, garlic, oregano, mustard, salt, and several grinds of pepper.",
list2.appendChild(step1);

const step2 = document.createElement('li');
step2.setAttribute('li', 'step2');
step2.classList.add('step2');
step2.innerText = "Step 2: On a large platter, arrange the cucumber, green pepper, cherry tomatoes, feta cheese, red onions, and olives. Drizzle with the dressing and very gently toss. Sprinkle with a few generous pinches of oregano and top with the mint leaves. Season to taste and serve.",
list2.appendChild(step2);