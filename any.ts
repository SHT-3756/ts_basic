function returnAny(message): any {
    console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString();

// 어떤 타입이어도 상관없는 타입이다.
// 이걸 최대한 쓰지 않는게 핵심, 왜냐면 컴파일 타임에 타입체크가 정상적으로 이뤄지지 않기때문
// 그래서 컴파일 옵션 중에는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있다.
// nolmplicitAny

let looselyTyped: any = {};
// any로 했기 때문에 looselyTyped에 계속 객체 연결 해도 오류가 안난다.
const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
    const a:number = obj.num;
    const b = a + 1;
    return b;
}

// const c = leakingAny({ num: 0 });
// c.indexOf('0');

