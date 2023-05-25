function multplyBy(num) {
    return function (x) {
        return x * num;
    };
}

function add(x, y) {
    return x + y;
}

const multplyByTwo = multplyBy(2);
const multplyByThree = multplyBy(3);

console.log(multplyByTwo(10));
console.log(multplyByThree(10));

const result = add(multplyByTwo(5), multplyByThree(10));
console.log(`fianl => ${result}`);