//ES6

class Student1 {
    constructor(name,roll_no,univ,course){
        this.name = name;
        this.roll_no = roll_no;
        this.univ = univ;
        this.course = course;
    }
}



//Constructor function
function Student2(name,roll_no,univ,course){
    this.name = name;
    this.roll_no = roll_no;
    this.univ = univ;
    this.course = course;
}

//if its a regular function we call it using the function name

//Constructor function can only be called using "new" keyword
// so any function being called like new Student(), then it is a constructor function
//this.somrthing, even these wont be there in function
let std1 = new Student1('charan','007','ASU','CSE_101');
let std2 = new Student1('Harsha','090','UTD','CSE_102');

console.log(std1,std2)