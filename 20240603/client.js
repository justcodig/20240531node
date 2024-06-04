const net = require("net")

const socket = net.connect({
    port: 3000,
    host: "192.168.0.161"
})
socket.on('connect', ()=>{
    console.log('client :나 연결되었어!');
    socket.write('호이호이')
})
socket.on('data',(a)=>{
    console.log(a.toString());
})