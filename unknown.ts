declare const maybe: unknown;
// 타입가드를 통해서만 타입을 한정시켜야지만 쓸수 있는 형태

// unknown은 넘버로 바로 할당할 수 없다.
// const aNumber: number = maybe;

if(maybe === true) {
    const aBoolean: boolean = maybe;

    // 이미 위에서 maybe를 true로 지정했기때문에 boolean만 가능하다
    // const aString: string = maybe;
}

if(typeof maybe === 'string') {//typeof-> 타입이 문자열로 나오는 것이다. if문 안에서 maybe는 string이다. 
    const aString: string = maybe;

    // 이미 위에서 maybe를 string으로 지정했기때문에 boolean형태로 타입을 지정해주면 에러가 난다.
    // const aBoolean: boolean = maybe;
}

/*
unknown 
typescript 3.0 부터 지원 
any와 짝으로 any 보다 Type-safe 한 타입
any와 같이 아무거나 할당할 수 있다.
컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할 수 없다.
*/ 
