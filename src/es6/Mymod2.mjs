// Mymod2.mjs

// export로 설정 방법2
// 변수, 함수, 클래스를 기존에 사용하 듯 모두 선언하고, 파일의 끝에 export로 묶어서 처리

const num1= 10;
const num2 = 20;
const sum = () => num1 + num2;


const sub = () => num1 - num2;

export {num1, num2, sum};
export default sub;