function getRecipes() {
    // fetch details from api 
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            const youtube = data.meals[0].strYoutube;
            // console.log(data.meals[0].strMeal);
            // console.log(data.meals[0].strMealThumb);
            // console.log(data.meals[0].strInstructions);
            // console.log(data.meals[0].strYoutube);

            // display the data in the html page
            document.getElementById('recipe-image').innerHTML = `
            <img src="${data.meals[0].strMealThumb}" alt="${data.meals[0].strMeal}" class="img-fluid">`;
            document.getElementById('recipe-title').innerHTML = `
            <h1>${data.meals[0].strMeal}</h1><h3>Instructions</h3>
            <p>${data.meals[0].strInstructions}</p>`;
            if(youtube){
                document.getElementById('recipe-youtube').innerHTML = `<iframe width="560" height="315" src="${youtube.replace('watch?v=', 'embed/')}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }
            

            // Ingredients
            const ingredients = [];
            const ingredientsamount = [];
            for (let i = 1; i <= 20; i++) {
                if (data.meals[0][`strIngredient${i}`] !== "") {
                    ingredients.push(data.meals[0][`strIngredient${i}`]);
                }
                if (data.meals[0][`strMeasure${i}`] !== "") {
                    ingredientsamount.push(data.meals[0][`strMeasure${i}`]);
            }
        }
        const ingredientsnew = ingredients.filter(Boolean);
        const ingredientsamountnew = ingredientsamount.filter(Boolean);
            const finaloutput = [];
            for (let i = 0; i < ingredientsnew.length; i++) {
                finaloutput.push(`${ingredientsnew[i]} - ${ingredientsamountnew[i]}`);
            }
            document.getElementById('recipe-ingredients').innerHTML = `
            <h3>Ingredients</h3>
            <ul>
                ${finaloutput.map(ingredient => `<li>${ingredient}</li>`).join('')}
			</ul>`;   
            document.getElementById('recipe-source').innerHTML = `
            <h4><a href="${data.meals[0].strSource}">Source</a> - Recipe ID ${data.meals[0].idMeal}</h4>`;
        })
        .catch(err => console.log(err));
}

                