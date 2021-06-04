// 튜플은 앞뒤로 대괄호 [] 안에 타입들을 넣어준다.
let x: [string, number];

// 순서랑 타입, 길이가 맞아야 한다.
x = ["hello", 27]; 

// 순서가 다르니 오류가 난다.
// x = [10, "HEE"];

// x 의 인덱스 0,1 이 있는데 length 가 맞지 않으니 오류, undefined
// x[2] = "world";

// person 의 어노테이션을 배열 string, number 이라고 지정해두었고
const person: [string, number] = ['HEE', 27];
// 자동으로 first : string
// second : number로 지정된다.
const [first, second] = person;