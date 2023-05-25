// 일급 객체로써의 함수 (2)
const person = {
    name: 'john',
    age: 31,
    insMarried: true,
    sayHello: () => {
        console.log(`Hello, my name is ${this.name}`);
    },
    //  sayHello: fucntion () {
    //      console.log(`Hello, My name is ${this.name}`);
    //  }
};

person.sayHello(); 