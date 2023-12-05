import {CONNECTION_TYPE, HOSTSITE, ORM_PATH} from '../../config/endpoints';
const endpoint = `${CONNECTION_TYPE}${HOSTSITE}${ORM_PATH}/preset`;

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
            throw new Error(`HTTP error! Status: ${response.statusText}`);
        }
        return response.ok;
    } catch (error) {
        console.error('Error deleting preset:', error);
        // You might want to handle the error more gracefully, depending on your use case
        return error;
    }
}
