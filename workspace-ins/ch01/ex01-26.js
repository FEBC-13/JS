/*
배열 생성, 읽기, 쓰기
*/

// 배열 생성 방법 1: Array 생성자 사용
// const arr = new Array(1, 2, 3); // [ 1, 2, 3 ] 생성

// 배열 생성 방법 2: 배열 리터럴 사용 (더 간단하고 권장되는 방법)
const arr = [ 1, 2, 3 ];

// 배열에 요소 추가하기
// push() 메서드: 배열의 마지막에 요소 추가
arr.push(10); // [ 1, 2, 3, 10 ]

// 인덱스를 사용한 요소 추가
arr[4] = 20; // [ 1, 2, 3, 10, 20 ]
arr[5] = 30; // [ 1, 2, 3, 10, 20, 30 ]

// 기존 요소 값 변경하기
arr[1] = 100; // [ 1, 100, 3, 10, 20, 30 ]

// 배열의 중간에 빈 공간을 만들면서 요소 추가
arr[9] = 200; // [ 1, 100, 3, 10, 20, 30, , , , 200 ]
// ...... (빈 공간은 undefined로 채워짐)

// 배열의 마지막에 새로운 데이터 추가하는 방법들
// 방법 1: length 속성 사용
arr[arr.length] = 300;
// 방법 2: push() 메서드 사용 (더 간단하고 권장되는 방법)
arr.push(400);

// 배열의 길이와 마지막 요소 확인
console.log('배열의 길이', arr.length);
console.log('배열의 마지막 값', arr[arr.length-1]);
console.log(typeof arr, arr); // 배열의 타입과 전체 내용 출력