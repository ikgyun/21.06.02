const chatBtn = document.querySelector('#chatBtn')
const chatRoom = document.querySelector('#chatRoom')
let socket = io();

let flag = undefined;

chatBtn.addEventListener('click',  () => {
    switch (flag) {
        case true:  //열린상태에서 다시 누를때 -> 닫히는 기능할때
            flag = false;
            chatRoom.style.display = 'none';
        break;
        case false: //처음제외하고 다시 열릴때
            flag = true;
            chatRoom.style.display = 'block';
        break;
        case undefined: // 처음으로 이버튼을 눌렀을때
            flag = true;
            getChatRoom();
        break;
    }
})

async function getChatRoom() {
    let url = 'http://localhost:3000/chat'
    let options = { method: 'GET' }
    let response = await fetch(url, options)
    let result = await response.text();
    // result 값에 실패시에는 json 형태로 오는데
    // result 값이 성공시에는 html형태 즉 text형태로 옵니다.
    if (isJson(result)) {
        let json = JSON.parse(result);
        if (json.result == false) alert(json.msg)
        // if(json.result) alert(json.msg)
        return
    } else {
        chatRoom.innerHTML = result;
        socketChat();
    }
    // window.location.href = "http://localhost:3000/chat"
}

function socketChat(){
    socketChat.on('connect',()=>{});
}

const chatSend = document.querySelector('#chatSend');
console.log(chatSend);

function send(){
    const msg = document.querySelector('msg');
    console.log(msg.value);
}

function isJson(str) {
    try {
        let json = JSON.parse(str);
        return (typeof json == 'object')
    } catch (e) {
        return false;
    }
}