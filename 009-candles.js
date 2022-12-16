function birthdayCakeCandles(candles) {
    let tall=candles[0] 
    let cont=0
    for (let i=0; i<candles.length; i++){
        if(candles[i]>=tall){
        tall=candles[i]
        }                 
    }
    for (let i=0; i<candles.length; i++){      
        if(tall===candles[i]){
            cont++
        }
    }
    return(cont)
}
console.log(birthdayCakeCandles([3,2,1,3]))