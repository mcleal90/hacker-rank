function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let distApples = []
    let distOranges = []
    let countApples = 0
    let countOranges = 0
    
    for (let i=0; i<apples.length; i++) {
        distApples[i] = apples[i] + a
    }
    for (let i=0; i<oranges.length; i++) {
        distOranges[i] = oranges[i] + b
    }
    
    for (let i=0; i<apples.length; i++) {
        if (distApples[i]>=s && distApples[i]<=t){
            countApples++
        }
    }
    
    for (let i=0; i<oranges.length; i++) {
        if (distOranges[i]>=s && distOranges[i]<=t){
            countOranges++
        }
    }
console.log(countApples)
console.log(countOranges)

}
countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4])