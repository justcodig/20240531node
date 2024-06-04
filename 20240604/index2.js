const data = {
    name : "lee",
    age: 24
}

console.log(data);
console.log(JSON.stringify(data));

const dataStrong = JSON.stringify(data);
// 인코딩
const buf = Buffer.from(dataStrong); // 기본 인코딩은 utf8

console.log(buf);
console.log(buf.toJSON());

console.log(buf.toJSONStrong());