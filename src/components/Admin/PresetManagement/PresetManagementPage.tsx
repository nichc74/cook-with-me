import React, { useEffect, useState } from "react";
import { getFormPresets } from '../../../apis/AdminAPI/RecipeAPI.js'; // Verify the import path
import Presets from "./Presets";

const PresetManagementPage = () => {
    const [metrics, setMetrics] = useState([]);
    const [categories, setCategories] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [cuisines, setCuisines] = useState([]);

    useEffect(() => {
        fetchFormPresets();
    }, []);

    const fetchFormPresets = async () => {
        try {
            const response = await getFormPresets();
            setMetrics(response.metrics);
            setCategories(response.categories);
            setIngredients(response.ingredients);
            setCuisines(response.cuisines);
 
        } catch (error) {
             // handleApiError('fetching metrics and ingredients', error);
        }
    };

    const removeElement = (presetType: string, id: number) => {
        switch(presetType) {
            case 'metric':
                const updatedMetrics = metrics.filter((metric, index) => metric.id !== id);
                setMetrics(updatedMetrics)
                break;

            case 'category':
                const updatedCategories = categories.filter((category, index) => category.id !== id);
                setCategories(updatedCategories)
                break;

            case 'ingredient':
                const updatedIngredients= ingredients.filter((ingredient, index) => ingredient.id !== id);
                setIngredients(updatedIngredients)
                break;

            case 'cuisine':
                console.log()
                const updatedCuisines = cuisines.filter((cuisine, index) => cuisine.id !== id);
                setCuisines(updatedCuisines)
                break;
        }
    }

    return (
        <div style={{ width: '100%' }}>
            <div className="admin-header">
                <h1>Presets</h1>
            </div>
            
            <Presets
                metrics={metrics}
                categories={categories}
                ingredients={ingredients}
                cuisines={cuisines}
                removeElement={removeElement}
            />
        </div>
    );
};

export default PresetManagementPage;
