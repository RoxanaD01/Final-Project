let data = [
    '1 tablespoon olive oil ',
    '1 small onion, chopped ',
    '1 small green pepper, chopped ',
    '2 medium carrots, chopped ',
    '1 garlic clove, minced ',
    '1 can (15 ounces) tomato sauce ',
    '2 cans (14-1/2 ounces each) chicken broth ',
    '1 can (14-1/2 ounces) diced tomatoes, undrained ',
    '3/4 cup white wine or chicken broth ',
    '3 tablespoons minced fresh parsley ',
    '1/2 pound uncooked medium shrimp, peeled and deveined ',
    '3/4 pound salmon fillets, skinned and cut into 3/4-inch cubes ',
    '1/4 teaspoon pepper ',
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
step1.innerText = "Step 1:  In a large saucepan, heat oil over medium heat. Add onion and green pepper; cook and stir until tender. Add carrots and garlic; cook 3 minutes longer. Stir in tomato sauce, tomatoes, wine and seasonings. Bring to a boil. Reduce heat; simmer, covered, 30 minutes.",
list2.appendChild(step1);

const step2 = document.createElement('li');
step2.setAttribute('li', 'step2');
step2.classList.add('step2');
step2.innerText = "Step 2: Stir in salmon, shrimp and parsley. Cook, covered, 7-10 minutes longer or until fish flakes easily with a fork and shrimp turn pink. Discard bay leaf.",
list2.appendChild(step2);

