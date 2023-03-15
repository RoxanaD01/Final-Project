
let data = [
    '4 cups shredded pizza cheese blend ',
    '2 packages (3 ounces each) sliced pepperoni, chopped',
    '1 pound bulk Italian sausage, cooked and drained',
    '1 medium green pepper, finely chopped',
    '1 medium sweet red pepper, finely chopped',
    '1 medium onion, finely chopped',
    '2 jars (14 ounces each) pizza sauce',
    '32 egg roll wrappers',
    'Oil for frying',
    'Additional pizza sauce for dipping, warmed, optional'
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
step1.innerText = "Step 1: In a large bowl, combine the cheese, sausage, pepperoni, peppers and onion. Stir in pizza sauce until combined. Place about 1/4 cup filling in the center of each egg roll wrapper. Fold bottom corner over filling; fold sides toward center over filling. Moisten remaining corner with water and roll up tightly to seal.",
list2.appendChild(step1);

const step2 = document.createElement('li');
step2.setAttribute('li', 'step2');
step2.classList.add('step2');
step2.innerText = "Step 2: In a Dutch oven or deep cast-iron skillet, heat 1-2 in. of oil to 375°. Fry pizza rolls until golden brown, 1-2 minutes on each side. Drain on paper towels. If desired, serve with additional pizza sauce.",
list2.appendChild(step2);

// let steps = [
//     "Step 1: In a large bowl, combine the cheese, sausage, pepperoni, peppers and onion. Stir in pizza sauce until combined. Place about 1/4 cup filling in the center of each egg roll wrapper. Fold bottom corner over filling; fold sides toward center over filling. Moisten remaining corner with water and roll up tightly to seal.",
//     " ",
//     "Step 2: In a Dutch oven or deep cast-iron skillet, heat 1-2 in. of oil to 375°. Fry pizza rolls until golden brown, 1-2 minutes on each side. Drain on paper towels. If desired, serve with additional pizza sauce."
// ];

// steps.forEach((items) => {
//     let lo = document.createElement('li');
//     lo.innerText = items;
//     list2.appendChild(lo);
// });