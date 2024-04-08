import {CONNECTION_TYPE, HOSTSITE, ORM_PATH} from '../../config/endpoints';
const endpoint = `${CONNECTION_TYPE}${HOSTSITE}${ORM_PATH}preset`;

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export async function editPreset(presetType, id, value, image) {
    const editPresetEndpoint = `${endpoint}${presetType}/${id}`;

    const options = {
        method: 'PUT',
        headers,
        body: JSON.stringify({
            name: value,
            image: image
        }),
    };

    const response = await fetch(editPresetEndpoint, options);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();

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

    const response = await fetch(deletePresetEndpoint, options);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.statusText}`);
    }
    return response.ok;
}
