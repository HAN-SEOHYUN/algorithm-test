// num, n
//for 문을 돌면서
//current, next
//current 와 next 가 다른 경우
//count + 1 , count = 0, output에 count, current 순으로 추가
//current 와 next 가 같은 경우
//count+1

//재귀를 어디서 호출 ? 
//재귀를 끊어주는게 필요함

//마지막으로 중간 2자리 숫자 return
//output 의 자릿수가 홀수일 경우 어떻게 ? > 항상 짝수 !

function solution(num, n) {
    let stringNumber = inner(num, n);
    const len = stringNumber.length;
    const startIndex = len / 2 - 1;
    // console.log(Number(stringNumber.slice(startIndex, startIndex+2)));
    return Number(stringNumber.slice(startIndex, startIndex+2));
}

function inner(num, n) {
    if(n == 1) {return String(num);}

    n --;
    let count = 1;
    let result = "";
    let numString = String(num);


    for (let i = 0; i < numString.length; i++) {
        let current = numString[i];
        let next = numString[i + 1];

        if(!next) {
            result += count + current;
            return inner(Number(result), n);
        }

        if (current !== next) {
            result += count + current;
            count = 1;
        } else {
            count++;
        }
    }
    return inner(Number(numString), n);
}

// solution(1,7);

module.exports = solution;