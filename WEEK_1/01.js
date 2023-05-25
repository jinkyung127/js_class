// 수정 테스트
//변수, 상수
//메모리에 저장한다. 읽어들여서 재사용한다. 변수

// [변수의 5가지 주요 개념]
// 변수 이름 : 저장된 값의 고유 이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// 변수 참조 : 변수에 할당된 값을 읽어오는 것

// 변수를 선언할 수 있는 3가지 방법 : var, let, const
// 1. var
var myVar = 'hello World';
var myVar = "Test1"
myVar = 'GoddBye'
console.log(myVar);

// 2. let
let myLet = "Hello World"
// let myLet = "Test2"
myLet = "GoodBye 1"
console.log(myLet);

// 3. const
const myConst = "Hello World";
// const myConst = "Test3"
myConst = "GoodBye 2"
console.log(myConst);

// var: 재선언 가능
// const: 재할당 불가능