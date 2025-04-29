   /*6. Ask user to enter a sequence of parantheses and validate 
   input: '([{ }])'
   output : true*/

validParenthesis = (str) => {
    let sym_obj = {')':'(',']':'[','}':'{'};
    let sym_arr = ['[','(','{'];
    let stack = [];
    
    for (let char of str) {    // will iterate through characters of string, not indices
        if (sym_arr.includes(char)) {
            stack.push(char);
            //console.log(stack);
        }
        else if (char in sym_obj) {  // check only if it's a closing bracket
            if (stack.length > 0 && sym_obj[char] === stack[stack.length - 1]) {
                stack.pop();
                //console.log(stack);
            }
            else {
                return false; // lets say stack is empty and you got )/] as input, then we should automatically return false
                }
        } 
        
        }
        return stack.length === 0;
    }
   


    let str5 = '([{ }])';
    console.log(validParenthesis(str5));