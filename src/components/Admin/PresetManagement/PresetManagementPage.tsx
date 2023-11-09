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
            console.log(response);
            setMetrics(response.metrics);
            setCategories(response.categories);
            setIngredients(response.ingredients);
            setCuisines(response.cuisines);
 
        } catch (error) {
             // handleApiError('fetching metrics and ingredients', error);
        }
    };

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
            />
        </div>
    );
};

export default PresetManagementPage;
