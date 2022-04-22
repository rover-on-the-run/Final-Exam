var text = '';
function findMeal (){
    text = document.getElementById('meal-search').value;
    connectMeal(text)
}


function connectMeal (text) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
    .then(res=> res.json() )
    .then(data=> loadMeal(data));

}

connectMeal();

function loadMeal (data){

  console.table(data.meals[0]);

  var container = document.getElementById('main-container');

     var imgLink = data.meals[0].strMealThumb;
     var cat = data.meals[0].strCategory;
     var title = data.meals[0].strMeal;
     var Ingredient1 = data.meals[0].strIngredient1;
     var Ingredient2 = data.meals[0].strIngredient2;
     var Ingredient3 = data.meals[0].strIngredient3;
     var Ingredient4 = data.meals[0].strIngredient4;
     var Ingredient5 = data.meals[0].strIngredient5;
     var Ingredient6 = data.meals[0].strIngredient6;
     var Ingredient7 = data.meals[0].strIngredient7;
     var Ingredient8 = data.meals[0].strIngredient8;
     var Ingredient9 = data.meals[0].strIngredient9;
     var Ingredient10 = data.meals[0].strIngredient10;
     var Ingredient11 = data.meals[0].strIngredient11;
     var Ingredient12 = data.meals[0].strIngredient12;
     var Ingredient13 = data.meals[0].strIngredient13;
     var Ingredient14 = data.meals[0].strIngredient14;
     var Ingredient15 = data.meals[0].strIngredient15;
     var Ingredient16 = data.meals[0].strIngredient16;
     var Ingredient17 = data.meals[0].strIngredient17;
     var Ingredient18 = data.meals[0].strIngredient18;
     var Ingredient19 = data.meals[0].strIngredient19;
     var Ingredient20 = data.meals[0].strIngredient20;

     var Instructions = data.meals[0].strInstructions;
     
     
     

    // var newDiv = document.createElement("div");

     container.innerHTML = `<p><b> ${title} </b></p>
                         <img src="${imgLink}" <br/>
                         <p> Category: ${cat} </p>
                         <p> Ingredients: ${Ingredient1},${Ingredient2}, ${Ingredient3}, ${Ingredient4}, ${Ingredient5}, ${Ingredient6}, ${Ingredient7}, ${Ingredient8}, ${Ingredient9}, ${Ingredient10} </p>
                         <p> Coocking Instructions: ${Instructions} </p>
                         `;     

   

    container.appendChild(newDiv);

}
