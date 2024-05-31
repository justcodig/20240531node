const http = require("http");
const server = http.createServer((req,res)=>{
    const url = req.url;
    console.log(url);
    res.setHeader("content-Type","text/html; charset=UTF-8");
    switch(url){
        case "/name" :
            res.end("lkj Lee KyungJae");
            break;
        case "/id" :
            res.end("이코노미");
            break;
        case "/mypage" :
            res.end("안녕하세요");
            break;
        case "/in" :
            res.end("라인");
            break;
        case "/mama" :
            res.end("엄마");
            break;
        case "/papa" :
            res.end("아빠");
            break;
        case "/nono" :
            res.end("앙대");
            break;

    }
})
server.listen(3000,()=>{
    console.log("on");
})
