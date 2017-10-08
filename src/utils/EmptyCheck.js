export default function isEmpty(obj) {
    if(obj == null) {
        return true;
    }
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}