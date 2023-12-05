import {CONNECTION_TYPE, HOSTSITE, ORM_PATH} from '../../config/endpoints';
const endpoint = `${CONNECTION_TYPE}${HOSTSITE}${ORM_PATH}`;


const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export async function createRecipe(formData) {
    let createRecipeEndpoint = `${endpoint}/postRecipe`;
    
    const options = {
        method: 'POST',
        body: formData,
    };
    let response = await fetch(createRecipeEndpoint, options);
    return await response.json();
} 

export async function getRecipes() {
    let fetchRecipesEndpoint = `${endpoint}/recipes`;
    let response = await fetch(fetchRecipesEndpoint, {
        method: 'GET',
        headers: headers
    });

    let recipes = await response.json();
    return await recipes;
}

export async function getAllRecipesInAdmin(pageNumber) {
    // let fetchRecipeEndpoint = `${endpoint}/adminRecipes`;
    let fetchRecipeEndpoint = `${endpoint}/recipes/page/${pageNumber}`;
    let response = await fetch(fetchRecipeEndpoint, {
        method: 'GET',
        headers: headers
    });

    let results = await response.json();
    return await results;
}

export async function getRecipe(url_slug, id) {
    let fetchRecipeEndpoint = `${endpoint}/recipe/${id}/`;
    let response = await fetch(fetchRecipeEndpoint, {
        method: 'GET',
        headers: headers
    });

    let recipe = await response.json();
    return await recipe;
}

export async function updateRecipeStatus(id, status) {
    let fetchRecipeEndpoint = `${endpoint}/updateRecipeStatus/${id}/`;

    const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify ({
            status: status
        })
    };

    let response = await fetch(fetchRecipeEndpoint, options);
    return response;
}

export async function getFormPresets() {
    let formPresets = `${endpoint}/presets`;

    let response = await fetch(formPresets, {
        method: 'GET',
        headers: headers
    });
    
    let presets = response.json();
    return await presets;
}

export async function searchRecipesInAdmin() {

}
