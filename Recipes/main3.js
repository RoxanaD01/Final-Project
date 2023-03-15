let data = [
    '¼ cup butter ',
    '¼ cup soy sauce ',
    '1 bunch green onions, chopped ',
    '2 cloves garlic, minced ',
    '6 pork butt steaks ',
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
step1.innerText = "Step 1:  Melt butter in a skillet over medium heat; stir in soy sauce. Add green onions and garlic and cook until lightly browned, about 2 minutes.",
list2.appendChild(step1);

const step2 = document.createElement('li');
step2.setAttribute('li', 'step2');
step2.classList.add('step2');
step2.innerText = "Step 2: Place pork steaks in the skillet. Cover and cook until browned, 8 to 10 minutes per side. Remove the lid and continue cooking until an instant-read thermometer inserted into the thickest part of the steak reads 145 degrees F (63 degrees C), about 10 minutes.",
list2.appendChild(step2);
