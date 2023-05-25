var obj = {
	a: 1,
	method: function (x, y) {
		console.log(this.a, x, y);
	}
};

// method 함수 안의 this 는 항상 obj!!
obj.method.call({a: 4}, 2, 3); // 1 2 3
// obj.method.call({ a: 4 }, 5, 6); // 4 5 6