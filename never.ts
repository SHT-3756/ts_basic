function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error('failed');
}

function infiniteLop(): never {
    while(true) {}
}

let c: string ="hello";

if(typeof c !== 'string'){
    c;// c는 타입이 never이다.
}
declare const ab: string | number;
if(typeof ab !== 'string'){
    ab;//ab는 타입이 number이다.
}

//조건부 타입 
type Indexable<T> = T extends string ? T & {[index: string]: any }: never;
// T가 string 이면? T & {[index: string]: any }
// T가 string이 아니면? never

/*never 타입은 모든타입의 subtype 이며, 모든 타입에 할당할 수 있다.
하지만, never 에는 그 어떤 것도 할당할 수 없다.
any 조차도 never 에게 할당할 수없다.
잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 한다.
*/