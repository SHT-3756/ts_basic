function returnVoid(message: string): void{//void로 지정된 함수는 이 함수의 리턴을 가지고 무엇을 하지 않겠다라는 의미.
    console.log(message);

    return;//void로 나오게 된다. 
}

const r = returnVoid('리턴이 없다.'); //r 의 타입은 void 이다.

