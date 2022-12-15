function beautifulDays(i, j, k) {
    // Write your code here
    //i = day one j=last day l=divisible
    
    let days = j-i
    let daysCount = [0]
    let beauty = 0
    
    for (let ind=0; ind<days;ind++){
        daysCount[ind]=ind+1
    
        if (daysCount[ind] % k === 0) {
            beauty++
        }
    }
    return beauty
}

const i= 20 
const j= 23 
const k= 6
