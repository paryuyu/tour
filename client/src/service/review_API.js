let serverIp = 'http://192.168.4.25:8080/api/review'

export async function ReviewCreate (item) {

    let res = await fetch(serverIp+"/post",{
        method:"post",
        body: JSON.stringify(item),
        headers:{"content-type":"application/json"}
    })

    return res.json();
}


export async function ReviewFind (id) {
    let res = await fetch(serverIp+"/get?id="+id)
let json = await res.json()
console.log(json)
if(json.result){
    return json;
}else{
    return json;
}
}
