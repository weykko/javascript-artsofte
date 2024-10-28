export function lock(sourceObj, keys) {
    if (typeof sourceObj !== 'object' || sourceObj === null) {
        throw new Error('Uncorrect source object');
    }

    if (!Array.isArray(keys) || keys.length === 0 || keys.some(key => typeof key !== 'string')) {
        throw new Error('Wrong keys argument');
    }

    function getProperty(obj, path) {
        let keys = path.split('.');
        let lastKey = keys.pop();
        let currentObj = obj;
        for (let key of keys) {
            if (!(key in currentObj)) {
                throw new Error('NoneKeyError');
            }
            
            currentObj = currentObj[key];
        }
    
        return [currentObj, lastKey];
    }

    function freezeObject(obj) {
        Object.freeze(obj);
        for (let key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                freezeObject(obj[key]);
            }
        }
    }

    for (let key of keys) {
        let prop = getProperty(sourceObj, key);
        let lastObj = prop[0]
        let lastKey = prop[1];

        if (!(lastKey in lastObj)) {
            throw new Error('NoneKeyError');
        }

        if (typeof lastObj[lastKey] === 'object' && lastObj[lastKey] !== null) {
            freezeObject(lastObj[lastKey]); // Замораживаем объект рекурсивно
        } else {
            Object.defineProperty(lastObj, lastKey, {
                writable: false,
            });
        }
    }
}