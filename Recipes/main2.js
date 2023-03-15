let data = [
    '2 tbsp ground cumin ',
    '2 tbsp ground coriander ',
    '2 tbsp Kashmiri chilli powder ',
    '1 tsp ground turmeric ',
    '1 tbsp spice mix or 1 tbsp tandoori masala powder ',
    '3 garlic cloves, crushed ',
    '20g fresh root ginger, grated ',
    '2 tbsp yoghurt ',
    '4 boneless chicken breasts, skinned and diced ',
    '25g fresh root ginger, grated, or finely chopped ',
    '3 tbsp tomato purée ',
    '2 tablespoons chopped fresh dill ',
    '3 tbsp vegetable oil '
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
step1.innerText = "Step 1:  If making the spice mix from scratch, simply mix the ground spices together until they are completely combined into a rich ochre mixture.",
list2.appendChild(step1);

const step2 = document.createElement('li');
step2.setAttribute('li', 'step2');
step2.classList.add('step2');
step2.innerText = "Step 2: Next marinade the chicken. Combine the spice mix with the garlic, ginger and yoghurt. Put the chicken in a bowl and season it well with salt. Add the lemon juice and toss the chicken pieces in it so it is well coated, then pour over the spice and yoghurt mix. Mix thoroughly, then cover and put it in the fridge for several hours, or preferably overnight.",
list2.appendChild(step2);

const step3 = document.createElement('li');
step3.setAttribute('li', 'step3');
step3.classList.add('step3');
step3.innerText = "Step 3: Next make the sauce. Heat the oil in a pan and add the onions, garlic and ginger. Cover and cook over a medium-low heat for 10 minutes, stirring regularly until the onion has softened. Remove the lid and cook for a further 5 minutes over a slightly higher heat to allow the onions to take on some colour. Add the spices and stir for another minute or so, then add the tomato purée and sugar. Season with salt and pepper, then stir for a few minutes. Add 400ml of water and bring to the boil. Turn down the heat and simmer gently for a further 5 minutes.",
list2.appendChild(step3);

const step4 = document.createElement('li');
step4.setAttribute('li', 'step4');
step4.classList.add('step4');
step4.innerText = "Step 4: To cook the chicken, heat a griddle until it is too hot to hold your hand over. Remove the chicken from the marinade, wiping off any excess, then place it on the griddle. Cook for several minutes or until char lines appear and the pieces lift off the griddle easily. Cook them on the other side until just cooked through. You may have to do this in a couple of batches. Alternatively, heat up your grill to its highest setting and grill the chicken for 4–5 minutes on each side. ",
list2.appendChild(step4);