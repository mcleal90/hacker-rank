function birthday(s, d, m) {
    let choc=0
    let sum=0
    for (let i=0; i<=(s.length-m); i++){
    
        for(let i2=0; i2<m; i2++){
            sum=sum+s[i+i2]
        }

        if (sum === d){
            choc+=1
        } 
        sum=0
    }
    return choc
}

birthday([2,2,1,3,2],4,2)