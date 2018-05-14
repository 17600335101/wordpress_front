export function toQstring(obj){
    let str = Object.keys(obj).map((val,key)=>{
        return val + '=' + obj[val]
    }).join('&');
    console.log(str);
    return str;
}