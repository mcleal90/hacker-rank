function gradingStudents(grades) {
    // Write your code here
    for (let i=0; i<grades.length; i++){        
        if (grades[i]>37){ //38 ou mais
            if (grades[i]%5 === 3) {
                grades[i]+=2
            } else if (grades[i]%5===4){
                grades[i]+=1
            }
        }    
    } return grades
}
console.log(gradingStudents([73,67,38,33]))