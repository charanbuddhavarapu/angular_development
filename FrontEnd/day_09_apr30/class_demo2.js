class Student{
    constructor(fname,lname,roll_no,univ){
        this.fname = fname;
        this.lname = lname;
        this.roll_no = roll_no;
        this.univ = univ;
    }


    fullName(){
        console.log(`${this.fname}'s lastname is ${this.lname}, and he belongs to university: ${this.univ}`);
    }
    //if you dont write this.fname, you get undefined, so we have to write this.fname, this.lname
}

let std1 = new Student('charan','b','007','ASU')
std1.fullName(std1);

