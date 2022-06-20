function getRecipes() {
    // fetch details from api 
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // console.log(data.meals[0].strMeal);
            // console.log(data.meals[0].strMealThumb);
            // console.log(data.meals[0].strInstructions);
            // console.log(data.meals[0].strYoutube);

            // display the data in the html page
            document.getElementById('recipe-image').innerHTML = `
            <img src="${data.meals[0].strMealThumb}" alt="${data.meals[0].strMeal}" class="img-fluid">`;
            document.getElementById('recipe-title').innerHTML = `
            <h1>${data.meals[0].strMeal}</h1>`;
            document.getElementById('recipe-description').innerHTML = ``;
        })
}