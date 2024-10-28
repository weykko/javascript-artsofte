export function getUniqueFieldsValueFromObject(obj, fieldName) {
    let values = [];
    
    function addValues(object) {
        for (let key in object) {
            if (key === fieldName) {
                values.push(object[key]);
                if (Array.isArray(object[key])) object[key].forEach(e => addValues(e));
                if (typeof object[key] === "object") addValues(object[key]);
            } else if (typeof object[key] === "object")
                addValues(object[key]);
        }
    }

    addValues(obj)
    let uniqueValues = Array.from(new Set(values));
    uniqueValues.sort((first, second) => first - second);
    return uniqueValues;
}