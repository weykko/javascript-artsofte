export function sum(num) {
    if (typeof num !== 'number' || isNaN(num) || !isFinite(num)) {
        throw new Error('IllegalArgumentException');
    }

    let finalSum = num;

    function addNext(nextNum) {
        if (typeof nextNum !== 'number' || isNaN(nextNum) || !isFinite(nextNum)) {
            throw new Error('IllegalArgumentException');
        }
        finalSum += nextNum;
        return addNext;
    }

    addNext.result = function() { return finalSum };

    return addNext;
}