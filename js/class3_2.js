function findsum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += i;
    }
    return ans;
}

function findsumTill100() {
    console.log(findsum(10));
}

setTimeout(findsumTill100, 5000);
console.log("kjjkdj");