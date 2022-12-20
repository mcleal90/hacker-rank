//INCOMPLETE

function getTotalX(a, b) {
    let total = 0;
    for(let i=0; i <= 100; i++){
        if(i%a[i] == 0){
            for(let j=0; j<=100; j++){
                if(b[j]%a[i] == 0){
                    total += 1;
                }
            }
        }
    return total
    }
}


console.log(getTotalX([2,3],[16,32,96]))
console.log(getTotalX([3,4],[24,48]))