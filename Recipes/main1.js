let data = [
    '1 tbsp good olive oil ',
    '250g dry cured centre cut applewood smoked bacon rashers, diced ',
    '1.25kg chuck or blade beef cut into 2-cm cubes ',
    'Salt ',
    'Freshly ground black pepper ',
    '500g carrots, sliced diagonally into 2-cm chunks ',
    '2 onions, sliced ',
    '1 tbsp tomato puree ',
    'Clove of garlic ',
    '1 tsp fresh thyme leaves or 1/2 tsp dried thyme ',
    '500g fresh mushrooms, stems discarded, caps thickly sliced ',
    '3 tbsp plain flour '
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
step1.innerText = "Step 1:  Preheat the oven to 140C/Gas 1. Meanwhile, heat the olive oil in a large dutch oven. Add the bacon and cook over a medium heat for 10 minutes, stirring occasionally, until the bacon is lightly browned. Remove with a slotted spoon to a large plate.",
list2.appendChild(step1);

const step2 = document.createElement('li');
step2.setAttribute('li', 'step2');
step2.classList.add('step2');
step2.innerText = "Step 2: Dry the beef cubes with paper towels and then sprinkle with salt and pepper. In batches in single layers, sear the beef in the hot oil for 3 to 5 minutes, turning to brown on all sides. Remove the seared cubes to the plate with the bacon and continue searing until all the beef is browned. Set aside.",
list2.appendChild(step2);

const step3 = document.createElement('li');
step3.setAttribute('li', 'step3');
step3.classList.add('step3');
step3.innerText = "Step 3: Toss the carrots, onions, 1 tbsp of salt and 2 tsp of pepper in the fat in the pan and cook for 10 to 15 minutes, stirring occasionally, until the onions are lightly browned. Add the garlic and cook for 1 more minute. Add the cognac, stand back, and ignite with a match to burn off the alcohol.Put the meat and bacon back into the pot with the juices. Add the bottle of wine plus enough beef stock to almost cover the meat. Add the tomato puree and thyme. Bring to a simmer, cover the pot with a tight-fitting lid and place it in the oven for about 1 1/4 hours or until the meat and vegetables are very tender when pierced with a fork.",
list2.appendChild(step3);

const step4 = document.createElement('li');
step4.setAttribute('li', 'step4');
step4.classList.add('step4');
step4.innerText = "Step 4: Combine 2 tbsp of the butter and the plain flour with a fork and stir into the stew. Add the frozen onions. Saute the mushrooms in 2 tbsp of butter for 10 minutes until lightly browned and then add to the stew. Bring the stew to a boil on top of the stove, then lower the heat and simmer for 15 minutes. Season to taste. ",
list2.appendChild(step4);