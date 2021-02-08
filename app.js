function getFoodApi() {
    const searchFood = document.getElementById('search-food').value;
    const foodApi = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`;
    fetch(foodApi)
    .then(res => res.json())
    .then(data => showFoodList(data))
    .catch(error => {
        document.getElementById('wrong-info').innerText = 'Item not found';
        document.getElementById('wrong-info').style.display = "block";
        document.getElementById('food-menu-container').style.display = "none";
        document.getElementById('show-menu-details').style.display = "none";
        
    })

}

function showFoodList(foodMenu){
    const foodBox = document.getElementById('food-menu-box');
    const foodListArray = foodMenu.meals;
    for (let i = 0; i < foodListArray.length; i++) {
        const foodName = foodListArray[i].strMeal;
        const foodThumb = foodListArray[i].strMealThumb;
        const singleFoodBox = document.createElement('div');
        singleFoodBox.className = "food-box-design";
        const foodInfo = `
            <img src = "${foodThumb}">
            <h2>${foodName}</h2>
            <button onclick="menuDetails('${foodName}')">Details</button>
        `;
        singleFoodBox.innerHTML = foodInfo;
        foodBox.appendChild(singleFoodBox);
        
    }
    document.getElementById('wrong-info').style.display = "none";
    document.getElementById('food-menu-container').style.display = "block";

}

function menuDetails(foodName){
    const menuDetailsApi = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(menuDetailsApi)
    .then(res => res.json())
    .then(data => showMenuDetail(data) )

}

function showMenuDetail(foodDetails){
    const showMenuDetails = document.getElementById('show-menu-details');
    const foodArray = foodDetails.meals;
    for (let i = 0; i < foodArray.length; i++) {
        const foodName = foodArray[i].strMeal;
        const foodThumb = foodArray[i].strMealThumb;
        const foodDetailsInfo = `
          <div class="food-details-design">
          <img src = "${foodThumb}">
          <h2>${foodName}</h2>
          <h4>Ingredients</h4>
          <p>i. ${foodArray[i].strIngredient1}</p>
          <p>ii. ${foodArray[i].strIngredient2}</p>
          <p>iii. ${foodArray[i].strIngredient3}</p>
          <p>iv. ${foodArray[i].strIngredient4}</p>
          <p>v. ${foodArray[i].strIngredient5}</p>
          <p>vi. ${foodArray[i].strIngredient6}</p>
          <p>vii. ${foodArray[i].strIngredient7}</p>
          </div>
        `;
        showMenuDetails.innerHTML = foodDetailsInfo;
        
        
    }
    document.getElementById('show-menu-details').style.display = "block";

}

