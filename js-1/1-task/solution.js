export function add(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number" || isNaN(num1) || isNaN(num2) || !isFinite(num1) || !isFinite(num2)) {
        throw new Error("WrongType");
    }
    
    return num1 + num2;
}