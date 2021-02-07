'use strict';
let allItems = []
const search = document.getElementById('btn');



fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        allItems.push(data)
        displayItems(data.meals)
    });


const displayItems = (items) => {
    const itemsDiv = document.getElementById('all-recipies');

    items.forEach((item) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'col-md-3';
        const itemInfo = `
                    <div onclick="displayDetails('${item.idMeal}')" class="border rounded text-center h-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <div class="card-body">
                            <img class="card-img img-fluid rounded" src="${item.strMealThumb}" alt="">
                            <h4 class="card-title h5">${item.strMeal}</h4>
                        </div>
                    </div>
                `;
        itemDiv.innerHTML = itemInfo;
        itemsDiv.appendChild(itemDiv);
    });
};

const displayDetails = (name) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            renderItemsInfo(data.meals[0]);
            console.log(data.meals[0]);
        });
};

const renderItemsInfo = (item) => {
    const itemsDetailsDiv = document.getElementById('itemDetails');

    itemsDetailsDiv.innerHTML = `
        <img class="img-fluid rounded mb-4" src="${item.strMealThumb}" alt="">
        <h4>${item.strMeal}</h4>
        
        <h5 class="pt-3 pb-2"><i class="icon-fire icons"></i> Ingredients</h5>
        <ul class="list-unstyled mb-0">
            <li><i class="icon-check icons"></i> ${item.strIngredient1}</li>
            <li><i class="icon-check icons"></i> ${item.strIngredient2}</li>
            <li><i class="icon-check icons"></i> ${item.strIngredient3}</li>
            <li><i class="icon-check icons"></i> ${item.strIngredient4}</li>
            <li><i class="icon-check icons"></i> ${item.strIngredient5}</li>
        </ul>
    `;
};

console.log(allItems)






