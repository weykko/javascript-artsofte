export function range(start, end, step = 1){
    if (typeof start !== "number" || typeof end !== "number" || typeof step !== "number" || 
        isNaN(start) || isNaN(end) || isNaN(step) || 
        !isFinite(start) || !isFinite(end) || !isFinite(step)) 
        throw new Error("WrongArgumentType");

    let result = [];
    for (let num = start; num <= end; num += step)
        result.push(num);

    return result;
}

export function sum(arr){
    if (!Array.isArray(arr) || arr.some(num => typeof num !== "number" || isNaN(num) || !isFinite(num)))
        throw new Error("WrongArgumentType");

    let sum = 0;
    arr.forEach(e => sum += e);

    return sum;
}