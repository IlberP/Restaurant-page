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

function menu(){
    const content = document.getElementById('content');
    content.classList.add('grid-lay');

    content.textContent = ''

    const items = [
        foodItems(
            'tonkotsu.png',
            'Tonkotsu ramen',
            '$8.99',
            'Tonkotsu ramen'
        ),
        foodItems(
            'instantramen.png',
            'Instant Ramen',
            '$2.99',
            'Instant ramen'
        )
    ];

    items.forEach((food)=> {
        content.appendChild(food)
    })
}

export default menu