
const {Transform} = require("stream");

const fs = require("fs");

const chunkSize = 64 * 1024; // 64KB

const TransformData = new Transform({
    highWaterMark : chunkSize,
    transform(chunk, en, callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
})

const test = fs.createReadStream("test.txt", {highWaterMark: chunkSize})
console.log(test);

const test2 = fs.createWriteStream("test2.txt");

test.pipe(TransformData).pipe(test2);
