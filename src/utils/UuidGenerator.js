// Source https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript

export default function generateUUID () { // Public Domain/MIT
    var result, i, j;
    result = '';
    for(j=0; j<32; j++) {
        if( j === 8 || j === 12|| j === 16|| j === 20)
            result = result + '-';
        i = Math.floor(Math.random()*16).toString(16).toUpperCase();
        result = result + i;
    }
    return result;
}