let token = localStorage.token;

function returnToken(){
    if (token) {
        return token;
    } else {
        abc = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
        var token="";
        for(i=0;i<32;i++){
            token += abc[Math.floor(Math.random()*abc.length)];
        }
        return token;
    }
}

export default function getHeaders() {
    let myToken = returnToken();
    const headers = {
        'Accept': 'application/json',
        'Authorization': myToken
    }
    return headers;
}