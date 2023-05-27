// 문자열을 입력받아도 result 값이 아래와 같이 출력되도록 함수를 완성해 보세요.
// if문과 typeof 키워드를 이용해 보세요.

function add(a, b) {
	let _a = a;
	let _b = b;
	if (typeof a !== 'number') {
		_a = Number(a);
	} else if (typeof b !== 'number') {
		_b = Number(b);
	}
	return _a + _b;
}

const result1 = add(5, "5");
const result2 = add("5", 5);

console.log(result1); // 출력 결과: 10
console.log(result2); // 출력 결과: 10