
function kangaroo(x1, v1, x2, v2) {
    let msg='NO'
    let kang1=x1
    let kang2=x2
    
    for(let i=0; i<10000;i++){
        kang1 +=v1
        kang2 +=v2
        if(kang1===kang2){
            msg='YES'
        }
    }
    return msg
}

console.log(kangaroo(0,3,4,2))
console.log(kangaroo(0,2,5,3))