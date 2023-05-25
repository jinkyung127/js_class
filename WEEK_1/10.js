// 화살표 함수
// Es6 신 문법
function add (x, y) {
    return x + y
}

//1-1. 기본적인 화살표 함수
let arrowFunc01 = (x, y) => {
    return x + y
}

//1-2. 한 줄로 (로직이 한 줄 일때, 중괄호 반드시 삭제!)
let arrowFunc02 = (x, y) => x + y

//
function testFunc(x) {
    return x;
}

//화살표 함수 (매개변수 한개일때 ()도 생략 가능)
let arrowFunc03 = x => x