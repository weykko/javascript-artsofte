export function multiplyPropertyValue(object, fieldType, multiplier) {
    if (fieldType !== "string" && fieldType !== "number" && fieldType !== "boolean")
        throw new Error("InvalidFieldType");
    if (typeof multiplier !== "number" || multiplier <= 0) return;

    for (let key in object) {
        if (typeof object[key] === fieldType) {
            if (fieldType == "string") object[key] = object[key].repeat(multiplier);
            else if (fieldType == "number") object[key] *= multiplier;
            else object[key] = !object[key];
        }
        else if (typeof object[key] === "object") multiplyPropertyValue(object[key], fieldType, multiplier);
    }
}
