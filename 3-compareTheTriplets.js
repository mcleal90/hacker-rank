function compareTriplets(a, b) {
    let int=[0,0]
    for(let i=0; i<a.length; i++) {
        if (a[i]>b[i]){
            int[0]++
        } else if (a[i]<b[i]){
            int[1]++
        }
    }
        return int
}