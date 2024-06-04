const buf = Buffer.alloc(12) // size가 10인 버퍼 객체를 만든다.(10 Bute)
const buf2 = Buffer.from("Hello Buffer") // Buffer "Hello Buffer" 데이터를 담아준다.

console.log(buf.toJSON())
console.log(buf2.toJSON())

buf.write("Hello Buffer aaaaaaaa") 

console.log(buf.toString());

const buf3 = Buffer.from("abcd")

for (let i =0; i<buf3.length; i++){
    console.log(buf3[i]);
    console.log(buf3[i]+=1);
}
console.log(buf3.toString());

let a = "A";
let b = 12;
a = a.charCodeAt(0).toString(2).padStart(8,"0") 
b = b.toString(2).padStart(8, "0") 

c = a + b; 

const binaryToString = (str) => {
    let temp = "";
    for(let i = 0; i<str.length; i+=8){
        const strTemp = parseInt(str.substr(i, 8), 2)
        if(String.fromCharCode(strTemp) == false){
            temp += strTemp
        }
        temp += String.fromCharCode(strTemp)
    }
    return temp
}

const res = binaryToString(c);
console.log(res);

//////////////////////////////////////////////////
//////// index.js 여기까지 //////////////
//////////////////////////////////////////////////






//////////////////////////////////////////////////
/////// index2.js 시작///////
//////////////////////////////////////////////////
const data = {
    name : "lee",
    age: 24
}

console.log(data);
console.log(JSON.stringify(data));

const dataStrong = JSON.stringify(data);
// 인코딩
const index2jsbuf = Buffer.from(dataStrong); // 기본 인코딩은 utf8

console.log(buf);
console.log(buf.toJSON());

console.log(buf.toJSONStrong());