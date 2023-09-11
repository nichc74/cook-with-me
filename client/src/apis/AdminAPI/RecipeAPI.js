

const endpoint = 'http://localhost:8000';

// export async function createRecipe(metadata, summary, recipe_ingredient_components, recipe_instructional_components, notes) {
//     var recipe_data = {
//         metadata: metadata, 
//         summary: summary, 
//         recipe_ingredient_components: recipe_ingredient_components, 
//         recipe_instructional_components: recipe_instructional_components, 
//         notes: notes
//     }
//     console.log(recipe_data);
    
//     var createRecipeEndpoint = endpoint + 'postRecipe';
    
//     var response = await fetch((createRecipeEndpoint), {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify ({
//             recipe_data: recipe_data
//         })
//     }) 
//     return response;
// }

export async function createRecipe(formData) {
    var createRecipeEndpoint = `${endpoint}/postRecipe`;
    
    const options = {
        method: 'POST',
        body: formData,
    };
    var response = await fetch(createRecipeEndpoint, options);
    return response;
} 


export async function getMetricsAndIngredients() {
    var getMetricsEndpoint = `${endpoint}/metrics`;

    var response = await fetch(getMetricsEndpoint, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });

    var metrics = await response.json();
    console.log(metrics);
    return await metrics;
}

export async function getRecipes() {
    var fetchRecipesEndpoint = `${endpoint}/recipes`;
    var response = await fetch(fetchRecipesEndpoint, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });

    var recipes = await response.json();
    console.log(recipes);
    return await recipes;
}

export async function getRecipe(id) {
    var fetchRecipeEndpoint = `${endpoint}/recipe/${id}/`;
    var response = await fetch(fetchRecipeEndpoint, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });

    var recipe = await response.json();
    console.log(recipe);
    return await recipe;
}