export function fib(n) {
    if (typeof n !== "number" || isNaN(n) || !isFinite(n)) {
        throw new Error("WrongType");
    }
    
    let dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n].toString();
}