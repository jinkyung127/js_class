// 배열

// 1. 생성
// 1-1. 기본 생성
let fruits = ['사과', '바나나', '오렌지'];

// 1-2. 크기 지정
// let numbers = new Array(5);

// console.log(fruits.length);
// console.log(numbers.length);

//2. 요소 접근
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// 3. 배열 메소드 
// // 3-1. push : 배열 끝에 추가
// fruits.push('오렌지');

// console.log(fruits);

// 3-2. pop : 마지막 요소 삭제
// fruits.pop();
// console.log(fruits);

// // 3-3. shift : 맨 앞 요소 삭제
// fruits.shift();
// console.log(fruits);

// // 3-4. unshift : 맨 앞에 추가
// fruits.unshift("포도");
// console.log(fruits);

// // 3-5. splice : 바꿔 끼우기 (시작인덱스, 개수, 바꿀요소)
// fruits.splice(1, 1, "포도");
// console.log(fruits);

//3-6. slice : (시작인덱스, num 전까지) 해당부분만 반환
// let s_fruits = fruits.slice(1, 3);
// console.log(s_fruits);

// (1) forEach, map, filter, find
let numbers = [4, 1, 5, 4, 5];

// //매개변수 자리에 함수를 넣는 것 : 콜백 함수
// numbers.forEach(function(item){
//     console.log('item 입니다 =>' + item)
// });

// // (2) map (반드시 리턴문, 선언)
// let newNumbers = numbers.map(function(item){
//     return item * 2;
// });

// console.log(newNumbers);

// let f_Numbers = numbers.filter(function(item){
//     return item > 3;
// });

// console.log(f_Numbers);

//find: 조건에 맞는 첫번째 요소만 반환
let result = numbers.find(function(item){
    return item>3;
});

console.log(result);

//리턴문이 필요했던 것들은 새로운 배열 또는 값을 반환함