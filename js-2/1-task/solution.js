export function createEmptyObject() {
    let emptyObject = {
        addField(fieldName, fieldValue) {
            if (typeof fieldName !== "string" || fieldName.trim() === "") throw new Error("InvalidFieldName");
            emptyObject[fieldName] = fieldValue;
        }, 
        deleteField(fieldName) {
            if (typeof fieldName !== "string" || fieldName.trim() === "") throw new Error("InvalidFieldName");
            if (fieldName in emptyObject) delete emptyObject[fieldName];
            else throw new Error("FieldNameNotFound");
        }
    };

    return emptyObject;
}