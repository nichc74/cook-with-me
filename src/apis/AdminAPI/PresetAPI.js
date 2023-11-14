const endpoint = 'http://localhost:8000/api/v1/preset';
// const endpoint = 'https://api.foodbaby.qvinyl.app/data-sync';

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export async function editPreset(presetType, id, value) {
    const editPresetEndpoint = `${endpoint}/${presetType}/${id}`;

    const options = {
        method: 'PUT',
        headers,
        body: JSON.stringify({
            name: value,
        }),
    };

    try {
        const response = await fetch(editPresetEndpoint, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error editing preset:', error);
        // You might want to handle the error more gracefully, depending on your use case
        throw error;
    }
}

export async function deletePreset(presetType, id) {
    const deletePresetEndpoint = `${endpoint}`;

    const options = {
        method: 'DELETE',
        headers,
        body: JSON.stringify ({
            presetType: presetType, 
            id: id
        })
    };

    try {
        const response = await fetch(deletePresetEndpoint, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.ok;
    } catch (error) {
        console.error('Error deleting preset:', error);
        // You might want to handle the error more gracefully, depending on your use case
        return error;
    }
}
