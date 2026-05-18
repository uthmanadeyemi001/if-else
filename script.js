function ageCheck() {
    let age = prompt("please enter your age");
    if(age>=18){
        alert("you are eligible to drive ")
    }else{
        let remainingYears = 18 - age;
        
        alert(`you cannot drive yet,you still have about ${remainingYears} years remaining to turn 18😒😒.`)
    }
    
    
}