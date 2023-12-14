import {CONNECTION_TYPE, HOSTSITE, ORM_PATH} from '../../config/endpoints';
const endpoint = `${CONNECTION_TYPE}${HOSTSITE}${ORM_PATH}`;


const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export async function createRecipe(formData) {
    let createRecipeEndpoint = `${endpoint}postRecipe`;

    const options = {
        method: 'POST',
        body: formData,
    };
    let response = await fetch(createRecipeEndpoint, options);
    return await response.json();
} 

export async function getRecipes(collection="", genre="") {
    let fetchRecipesEndpoint = `${endpoint}recipes`;
    if (collection.length !== 0 && genre.length !== 0) {
        fetchRecipesEndpoint = `${fetchRecipesEndpoint}/${collection}/${genre}`;
    }

    let response = await fetch(fetchRecipesEndpoint, {
        method: 'GET',
        headers: headers
    });

    let recipes = await response.json();
    return await recipes;
}

export async function getCategories() {
    let fetchCategoriesEndpoint = `${endpoint}categories`;
    let response = await fetch(fetchCategoriesEndpoint, {
        method: 'GET',
        headers: headers
    });

    let recipes = await response.json();
    return await recipes;
}

export async function getCuisines() {
    let fetchCuisinesEndpoint = `${endpoint}cuisines`;
    let response = await fetch(fetchCuisinesEndpoint, {
        method: 'GET',
        headers: headers
    });

    let recipes = await response.json();
    return await recipes;
}

export async function getAllRecipesInAdmin(pageNumber) {
    // let fetchRecipeEndpoint = `${endpoint}/adminRecipes`;
    let fetchRecipeEndpoint = `${endpoint}recipes/page/${pageNumber}`;
    let response = await fetch(fetchRecipeEndpoint, {
        method: 'GET',
        headers: headers
    });

    let results = await response.json();
    return await results;
}

export async function getRecipeBySlug(url_slug) {
    let fetchRecipeEndpoint = `${endpoint}recipe${url_slug}`;
    let response = await fetch(fetchRecipeEndpoint, {
        method: 'GET',
        headers: headers
    });

    let recipe = await response.json();
    return await recipe;
}

export async function updateRecipeStatus(id, status) {
    let fetchRecipeEndpoint = `${endpoint}updateRecipeStatus/${id}/`;

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
    let formPresets = `${endpoint}presets`;

    let response = await fetch(formPresets, {
        method: 'GET',
        headers: headers
    });
    
    let presets = response.json();
    return await presets;
}

export async function searchRecipesInAdmin() {

}
