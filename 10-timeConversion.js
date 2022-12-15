function timeConversion(s) {
    // Write your code here
    let amPm = s.charAt(8)
    let militaryHour = ''
    
    if (amPm == 'A') {
        militaryHour = s.substring(0,2)
        
        if (s.substring(0,2) == 12) {
            militaryHour = '00' 
        }
        
    } else { //P
        if (s.substring(0,2) == 12) {
            militaryHour = s.substring(0,2)
        } else {            
            militaryHour = parseInt(s.substring(0,2), 10) + 12
        }
    }
    return militaryHour + s.substring(2,8)
}