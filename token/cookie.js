let cookie = 'user=john; ggggg=nnnnn; AccessToken=eyJ0cHkiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiJhc2Rhc2QiLCJleHAiOjE2MjI2MTA3ODQyMDl9.TbHtxzFXBeFnVkqkz%2BFyUhvEwoF6JbUSgRREr3Z%2F3Vs'
let cookieArr = cookie.split(';');
//split -> 특정 글자를 split 

console.log(cookieArr);
cookieArr.forEach(v => {
    let [name, value] = v.split('=');
    if (name[0].trim() == 'AccessToken') {
        let jwt = value.split('.');
        let payload = Buffer.from(jwt[1], 'base64').toString();
        let [userid] = JSON.parse(payload);
        console.log('첫번째 방법 : ', userid);

    }
})

//cookie.trim().split(';').filter(v=>v.indexOf('AccessToken')>0)