

const endpoint = 'http://localhost:8000/'

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
    // console.log(formData);

    // for (var pair of formData.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]); 
    // }
    
    var createRecipeEndpoint = endpoint + 'postRecipe';
    
    const options = {
        method: 'POST',
        body: formData,
    };
  
    var response = await fetch(createRecipeEndpoint, options);

    return response;
} 