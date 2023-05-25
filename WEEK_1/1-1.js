// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return
// p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴
// 대문자와 소문자는 구별하지 않음

function solution(s) {
    var answer = true;

    //1. 대문자로 통일
    s = s.toUpperCase();

    //2. for문을 통해서 문자열의 요소 하나하나를 비교
    // p, y와 비교
    var num = 0;

    for (i=0; i<s.length; i++){
        if (s[i] === "P") {
            num++;
        }
        if(s[i] === 'Y') {
            num--;
        }
    }

    // 개수 체크(p와 y의 개수가 같은지를 체크)
    if (num === 0){
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}

var str1 = "pPoooyY"
var str2 = "Pyy"

console.log(solution(str1));