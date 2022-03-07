
function fibonacci(n){
    let list = [0, 1];
    for (var i = 0; i < n; i++){
        let sum = list[i] + list[i + 1];
        list.push(sum)
    }
    return list
}
console.log(fibonacci(20))