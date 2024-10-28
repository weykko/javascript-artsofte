export function multiplyPropertyValue(object, type, multiplier) {
    if (type !== "string" && type !== "number")
        throw new Error("InvalidFieldType");

    for (let key in object)
        if (typeof object[key] === type) {
            if (type === 'number') object[key] *= multiplier;
            else if (type === 'string') object[key] = object[key].repeat(multiplier);
        }

    return object;
}