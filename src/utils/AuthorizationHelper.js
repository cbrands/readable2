let token = localStorage.token;

function returnToken(){
    if (token) {
        return token;
    } else {
        let abc = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
        let token="";
        for(let i = 0; i < 32; i++){
            token += abc[Math.floor(Math.random()*abc.length)];
        }
        localStorage.token = token;
        return token;
    }
}

export function getHeaders() {
    let myToken = returnToken();
    const headers = {
        'Accept': 'application/json',
        'Authorization': myToken
    }
    const headersObject = {
        headers: headers
    }
    return headersObject;
}