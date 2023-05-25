// Getters 와 Setters
// 객체지향 프로그래밍 언어 -> G, S
// 클래스 -> 겍체(인스턴스)
// 프로퍼티(constructor)
// new Class(a, b, c)
 class Rectangle {
    constructor (height, width) {
        // underscore(_) : private(은밀하고, 감춰야 할 때)
        // 이 인스턴스 내에서만 사용하기 위해
        this.height = height;
        this.width = width;
    }

    // width를 위한 getter
    get width () {
        return this._width;
    }

    // width를 위한 setter
    set width (value) {
        // 검증1 : value가 음수이면 오류!
        if (value <= 0) {
            //
            console.log('[오류] 가로 길이는 0보다 커야 합니다!')
            return;
        } else if (typeof value !== 'number') {
            console.log('[오류] 가로 길이로 입렵된 값이 숫자타입이 아닙니다!')
            return;
        }
        this._width = value;
        // RangeError: Maximum call stack size exceeded : this 값을 계속 할당하면서 무한루프. 실행 컨텍스트가 계속 쌓여서 스택이 맥시멈이 찼다.
        // getters & setters 쓸 때 반드시 기억해야 할 것
        // this에 접근하는 프로퍼티의 이름은 앞에 _(underscore) 붙이기!!
    }

    // height를 위한 getter
    get height () {
        // 검증1 : value가 음수이면 오류!
        if (value <= 0) {
            //
            console.log('[오류] 세로 길이는 0보다 커야 합니다!')
            return;
        } else if (typeof value !== 'number') {
            console.log('[오류] 세로 길이로 입렵된 값이 숫자타입이 아닙니다!')
            return;
        }
        this._height = value;
    }

    // height를 위한 setter
    set height (value) {
        this._height = value;
    }

    // getArea : 가로 * 세로 => 넓이
    getArea () {
        const a = this._width * this._height;
        console.log(`넓이는 = ${a}입니다.`);
    }
 }


 // instance 생성 
 const  rect1 = new Rectangle(10, 7);
 rect1.getArea();
 const  rect2 = new Rectangle(10, 30);
 const  rect3 = new Rectangle(15, 20);