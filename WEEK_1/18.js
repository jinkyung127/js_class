//while
// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// };

// while 문을 활용해서, 3초과 100 미만의 숫자 중 5의 배수인 것만 출력하는 예
// let i = 4;
// while (i<100){
//     if (i%5===0 && i >= 5){
//         console.log(i + "는 5의 배수입니다!");
//     };
//     i++;
// };

// do ~ while 문
// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

//break문과 continue문
// 4-1. break 문
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//       break;
//     }
//     console.log(i);
//   };

//4-2. continue 문
for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
}