// 클래스 연습해보기!

// [요구사항]
// 1. Car 라는 새로운 클래스를 만들되, 처음 객체를 만들 때는
// 다음 네개의 값이 필수로 입력대ㅗ야 합니다!
// (1) modelName
// (2) modelYear
// (3) type
// (4) price 
// 2. makeNoise() 메서드를 만들어 클락션을 출력해주세요. 
// 2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드 작성!
// 3. 이후 자동차를 3개 정도 만들어 주세요(객체 생성)

// [추가 요구사항]
// 1. 전기차 클래스 <- Car 클래스의 상속을 받을거에요!

class Car {
    // 우리는 사람이기 때문에 필수요소
    // name, age
    constructor (nammodelName, modelYear, type, price) {
        this.nammodelName = nammodelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    makeNoise () {
        console.log(`${this.nammodelName}:빵!`);
    }

    carYear () {
        console.log(`${this.modelYear}:년도 모델입니다`);
    }
}
// 전기차 class 정의
class ElectronicCar extends Car {
        //재정의가 필요하다면 상속받앗어도 constructor 필요 - ype=e 로 고정이므로 type 불필요
    constructor (nammodelName, modelYear, price, chargeTime) {
        // Car(부모 class!)에게도 알려주기!!! - 부모/자식 constructor가 달라서 싱크 맞추기
        super(nammodelName, modelYear, 'e', price);
        this.chargeTime = chargeTime;
    }

    set chargeTime (value) {
        this._chargeTime = value;
    }

    get chargeTime () {
        return this._chargeTime;
    }
}

const eleCar1 = new ElectronicCar('테슬라', '2023', 9000, 60)
eleCar1.makeNoise();
eleCar1.carYear();
console.log('-----------------')
console.log(eleCar1._chargeTime);
eleCar1.chargeTime = 20;
console.log(eleCar1._chargeTime);

// const car1 = new Car("sorento", "2023", 'e', 5000);
// const car2 = new Car("sm5", "1999", 'g', 3000);
// const car3 = new Car("palisade", "2010", 'd', 4500);

// car1.makeNoise();
// car2.makeNoise();
// car3.makeNoise();

// car1.carYear();
// car2.carYear();
// car3.carYear();
