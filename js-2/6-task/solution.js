export function copyObject(value) {
    if (value === null) return value;

    if (typeof value !== 'object') {
        if (typeof value === 'function') {
            return new Function('return ' + value.toString())();
        } 
        if (typeof value === 'symbol') {
            return Symbol(value.description);
        }

        return value;
    }

    if (Array.isArray(value)) {
        return value.map(e => copyObject(e));
    }

    let copyObj = {};
    for (let key in value) {
        if (value.hasOwnProperty(key)) {
            copyObj[key] = copyObject(value[key]);
        }
    }

    return copyObj;
}

export function isCopy(original, copy) {
    if (original === null || copy === null) return original === copy;

    if (typeof original !== 'object' || typeof copy !== 'object') {
        if (typeof original === 'function' && typeof copy === 'function') {
            return original.toString() === copy.toString();
        }
        if (typeof original === 'symbol' && typeof copy === 'symbol') {
            return original.description === copy.description;
        }
        if (typeof original === 'number' && typeof copy === 'number') {
            return original === copy || (isNaN(original) && isNaN(copy));
        }

        return original === copy;
    }

    if (Array.isArray(original) && Array.isArray(copy)) {
        return original.length === copy.length && 
               original.every((value, index) => isCopy(value, copy[index]));
    }

    return Object.keys(original).length === Object.keys(copy).length && 
           Object.keys(original).every(key => copy.hasOwnProperty(key) && isCopy(original[key], copy[key]));
}
