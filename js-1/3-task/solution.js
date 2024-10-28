export function palindrome(str){
    if (arguments.length !== 1) throw new Error("InvalidArgumentCount");
    if (typeof str !== "string") throw new Error("WrongType");
    
    if (str.length < 2) return false;

    for (let i = 0; i < str.length / 2; i++)
        if (str[i] !== str[str.length - i - 1]) return false;

    return true;
}