//creates the food list dom
function foodItems(src, text, price, alt){
    const food = document.createElement('div');
    food.classList.add('food');
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt)

    const description = document.createElement('div');
    description.classList.add('description');

    const name = document.createElement('div');
    name.textContent = text;
    description.appendChild(name);

    const foodPrice = document.createElement('div')
    foodPrice.textContent = price
    description.appendChild(foodPrice);

    food.appendChild(img);
    food.appendChild(description);

    return food
}

//sets the active tab if this page is active
function setActiveBtn(id){
    const activeBtn = document.querySelector('.tab-active');
    if (activeBtn) activeBtn.classList.remove('active');

    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active')
}


//creates the menu items into a list from the function and exports this into the main page
function menu(){
    const content = document.getElementById('tab-info');
    content.classList.add('grid-lay');

    content.textContent = ''

    const items = [
        foodItems(
            '/dist/styles/img/tonkotsu.png',
            'Tonkotsu Ramen',
            '$6.99',
            'Tonkotsu Ramen'
        ),
        foodItems(
            '/dist/styles/img/instantramen.png',
            'Instant Ramen',
            '$2.99',
            'Instant ramen'
        ),
        foodItems(
            '/dist/styles/img/shoyu.png',
            'Shoyu Ramen',
            '6.99',
            'Shoyu Ramen'
        )
    ];

    items.forEach((food)=> {
        content.appendChild(food)
    })

    setActiveBtn('menu')
}

export default menu