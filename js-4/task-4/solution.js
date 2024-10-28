const parent = Symbol('parent');
const NOT_FOUND = 'NOT_FOUND';

const GET = (obj, field) => {
    if (field in obj) {
        return obj[field];
    }
    
    if (obj[parent]) {
        return GET(obj[parent], field);
    }

    return NOT_FOUND;
};

export {parent, NOT_FOUND, GET}