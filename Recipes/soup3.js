let data = [
    '2 tablespoons unsalted butter ',
    '2 tablespoons extra-virgin olive oil ',
    '1 medium onion, very thinly sliced ',
    '2/3 cup heavy cream ',
    '3 garlic cloves, smashed ',
    '1/4 teaspoon celery seed ',
    '1/4 teaspoon dried oregano ',
    'Salt and freshly ground pepper ',
    '5 cups canned whole tomatoes in their juice (from three 14-ounce cans) ',
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
step1.innerText = "Step 1:  In a large saucepan, melt 1 tablespoon of the butter in 1 tablespoon of the olive oil. Add the sliced onion and smashed garlic and cook over moderate heat, stirring occasionally, until softened, about 5 minutes. Add the tomatoes and their juice, the water, heavy cream, sugar, crushed red pepper, celery seed and oregano and season with salt and pepper. Bring the soup to a boil over high heat, breaking up the tomatoes with the back of a spoon. Reduce the heat to moderate and simmer for 10 minutes.",
list2.appendChild(step1);

const step2 = document.createElement('li');
step2.setAttribute('li', 'step2');
step2.classList.add('step2');
step2.innerText = "Step 2: Meanwhile, in a small skillet, cook the remaining 1 tablespoon of butter over moderately high heat until it begins to brown, about 1 minute. Scrape the browned butter into a medium bowl. Add the olive oil to the skillet. Add the diced bread and cook over moderately high heat, stirring occasionally, until it is slightly browned, about 6 minutes. Transfer the bread to the browned butter and toss well.",
list2.appendChild(step2);

const step3 = document.createElement('li');
step3.setAttribute('li', 'step3');
step3.classList.add('step3');
step3.innerText = "Step 3: Working in batches, transfer the tomato soup to a blender and puree until smooth. Return the soup to a clean pot and rewarm the soup if necessary. Season the soup with salt and pepper. Ladle the soup into bowls and serve with the croutons.",
list2.appendChild(step3);
