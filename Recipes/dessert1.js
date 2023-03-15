let data = [
    '300g digestive biscuits ',
    '100g unsalted butter, melted ',
    '500g full-fat soft cheese ',
    '100g caster sugar, plus 2 tbsp ',
    '1 tsp vanilla extract ',
    '300ml double cream ',
    '300g raspberries ',
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
step1.innerText = "Step 1:  Blitz the biscuits in a food processor or tip into a food bag and bash to fine crumbs using a rolling pin. Transfer to a bowl and stir in the melted butter until the mixture looks like damp sand. Tip the buttery crumbs into a 20cm springform tin and press into the base using the back of a spoon until you have a smooth, even layer. Chill until needed.",
list2.appendChild(step1);

const step2 = document.createElement('li');
step2.setAttribute('li', 'step2');
step2.classList.add('step2');
step2.innerText = "Step 2: Tip the soft cheese, sugar, vanilla, and cream into a bowl and beat using an electric whisk until thick and creamy. Fold in about two-thirds of the raspberries, pressing the berries lightly against the side of the bowl as you do to squeeze out some of their juices and lightly ripple the cream.",
list2.appendChild(step2);

const step3 = document.createElement('li');
step3.setAttribute('li', 'step3');
step3.classList.add('step3');
step3.innerText = "Step 3: Scrape the cheesecake mixture over the chilled base and smooth the top with a spatula. Chill for at least 6 hrs, or preferably overnight. Can be made up to two days ahead and chilled. To serve, carefully remove from the tin, scatter with the remaining raspberries and dust with icing sugar, if using.",
list2.appendChild(step3);