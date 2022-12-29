// ArrowFunction.js

// 화살표 함수 : ES6 버전부터 사용되는 함수를 선언하는 새로운 방식
// ES5버전의 익명함수를 사용하여 함수를 생성하는 방식에서 변경되어 function 키워드를 생략하고, 매개변수와 코드 블럭 사이에 '=>' 기호를 사용하는 방식
// 소스코드의 반환값이 한 줄일 경우 코드 블럭을 생략 할 수 있다. 한 줄일 경우 return도 생략 가능
// 매개변수가 1개인 경우, 매개변수의 괄호를 생략 할 수 있다.

// 사용방법 :
// 변수명 =(매개변수1, 매개변수2, ...) => {
//  실행할 소스코드
//  return 변환값
// }
// 변수명 = (매개변수1, 매개변수2, ...) => 반환값;
// 변수명 = 매개변수 => 반환값 ;
// 변수명 = () => 반환값;

// 기존 함수 선언 방식 1
function es5Func1(a, b){
    console.log(a + b);
    return a + b;
}

// 기존 함수 선언 방식 2
var es5Func2 = function (a, b){ //익명함수
    console.log(a+ b);
    return a + b;
}

es5Func1(10,20);
es5Func2(100,200);

console.log('\n------------\n');
let data = es5Func1(10,20);
console.log(data);
data = es5Func2(100,200)
console.log(data);

// 화살표 함수 선언
console.log('\n------ ES6 ArrowFunction------\n');

const es6Func1 = (a, b) => {
    console.log(a+b);
    return a+b;
}

data = es6Func1(10,20);
console.log(`리턴 받은 값 : ${data}`);

const es6Func2 = (a,b) => a+b;
data = es6Func2(100,200);
console.log(`리턴 값 : ${data}`);

const es6Func3 = (a,b) => console.log(a+b);
es6Func3(10,20);

const es6Func4 = (a) => a * 2;
const es6Func5 = a => a*2;
data = es6Func4(10);
console.log(`리턴 값 : ${data}`);

data = es6Func5(20);
console.log(`리턴 값 : ${data}`);


// 매개변수가 없을 경우 반드시 ()가 있어야 함
const es6Func6 = () => console.log('es6Func5() 실행');
es6Func6();