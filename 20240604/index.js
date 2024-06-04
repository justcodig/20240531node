const buf = Buffer.alloc(12) // size가 10인 버퍼 객체를 만든다.(10 Byte)
const buf2 = Buffer.from("Hello Buffer") // Buffer "Hello Buffer" 데이터를 담아준다.

// 버퍼 내용을 확인해보자4
console.log(buf.toJSON())
console.log(buf2.toJSON())

buf.write("Hello Buffer aaaaaaaa") // 빈공간의 버퍼에 내용을 넣은것

// 버퍼를 디코딩
console.log(buf.toString());

const buf3 = Buffer.from("abcd")

for (let i =0; i<buf3.length; i++){
    console.log(buf3[i]);
    console.log(buf3[i]+=1);
    // 여기에 작성
}
console.log(buf3.toString());

let a = "A";
let b = 12;
// charCodeAt 아스키 코드로 변환
// 매개변수는 인덱스 문자의 위치
// toString(2) == 이진수 문자열로 변환 매개변수로 전달한 값이 진수
// utf8 == 8bit == 00000000
// 1000001
// padStart() 문자열의 크기에서 남은 공간을 다 전달한 매개변수 문자열로 채워준다.
// 매개변수 크기, 문자열
a = a.charCodeAt(0).toString(2).padStart(8,"0") // 01000001
b = b.toString(2).padStart(8, "0") // 00001100

c = a + b; //0100000100001100

const binaryToString = (str) => {
    let temp = "";
    for(let i = 0; i<str.length; i+=8){
        // 2진수를 정수로 변환할거야
        const strTemp = parseInt(str.substr(i, 8), 2)
        // fromCharCode 아스키 코드를 문자열로 변환
        // console.log(strTemp);
        // 아스키 코드 변환시에 없으면
        if(String.fromCharCode(strTemp) == false){
            temp += strTemp
        }
        temp += String.fromCharCode(strTemp)
    }
    return temp
}

const res = binaryToString(c);
console.log(res);