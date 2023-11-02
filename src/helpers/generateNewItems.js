import {v4 as uuidv4} from 'uuid';

export function newId() {
    return uuidv4()
}

export function createNewItems(length, object) {
    var newItems = new Array(length).fill(object);
    var populateData = newItems.map((item, index) => {
        return {
            ...item,
            id: newId()
        }
    })

    return populateData;
}

