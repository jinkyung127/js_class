// 비동기적 코드의 이해!
// setTimeout 함수의 동작원리
setTimeout(function(){
	// 기본적으로 1000ms이 지나야 여기 로직이 실행이 된답니다 :)
	console.log('여기가 먼저 실행될까?1?!?!?');
}, 1000);

console.log('여기 좀 봐주세요!!!!')