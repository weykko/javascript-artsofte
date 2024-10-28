export function protectObjectValueFromChange(object, name) {
    if (typeof name !== "string" || name.trim() === "")
        throw new Error("InvalidFieldName");

    Object.defineProperty(object, name, { writable: false });
}