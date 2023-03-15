let data = [
    '1 small white cabbage or ½ large' ,
    '4 carrots, peeled' ,
    '1 large red onion' ,
    '½ small bunch dill, chives, parsley or coriander, finely chopped (optional)' ,
    '1 tbsp Dijon mustard' ,
    '50g mayonnaise' ,
    '50g yogurt, soured cream or more mayo' , 
    '1-2 tbsp white wine vinegar' ,
    'a few pinches of paprika' ,
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
step1.innerText = "Step 1:  Remove any bruised or damaged outer cabbage leaves. Halve through the stem, and remove the dense core with a sharp knife and discard. Put cut side down onto a chopping board, and slice as finely as you can into thin shreds. You can also do this on a mandoline (you might want to quarter before slicing) or in a food processor with the shredding attachment. Tip into a bowl.",
list2.appendChild(step1);

const step2 = document.createElement('li');
step2.setAttribute('li', 'step2');
step2.classList.add('step2');
step2.innerText = "Step 2: Grate the carrots on a box grater to coarsely shred, or cut into thin strips using a julienne peeled or the grater attachment on the food processor. Tip into the bowl. Finely slice the onion, and thin as you can, and add to the bowl with the other veg. Add the herbs if using. A mixture is nice if you have some to use up.",
list2.appendChild(step2);

const step3 = document.createElement('li');
step3.setAttribute('li', 'step3');
step3.classList.add('step3');
step3.innerText = "Step 3: In a jug, whisk the mustard, mayo, yogurt and vinegar. Season well, and taste for sharpness and creamy. Add more vinegar if you like.",
list2.appendChild(step3);

const step4 = document.createElement('li');
step4.setAttribute('li', 'step4');
step4.classList.add('step4');
step4.innerText = "Step 4: Tip the dressing into the veg bowl, and mix everything together well with a large spoon. Stir so all the veg gets coated lightly in the dressing. Sprinkle with a few pinches of paprika, and serve straight away. Can be covered and chilled for up to 3 days. Mix well before serving. ",
list2.appendChild(step4);