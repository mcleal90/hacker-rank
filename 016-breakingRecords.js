function breakingRecords(scores) {
    let min=100000001
    let max=-1
    let minScore=-1
    let maxScore=-1
    
    for (let i=0; i<scores.length; i++){
        if(scores[i]<min){
            min=scores[i]
            minScore+=1
        }
        if(scores[i]>max){
            max=scores[i]
            maxScore+=1
        }
    }
    console.log([maxScore,minScore])    
}

breakingRecords([0,9,3,10,2,20])