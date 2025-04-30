    /*8. Ask user to enter a number and convert that to Roman value
   input:   9    12
   output : IX   XII*/
    
    
    romanToInt = (s) => {
        let dic = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
        let stack = [];
        let total = 0;
        
        for (let i of s) {
            console.log(i);
            if (stack.length === 0) {
                stack.push(i); // any new element when stack is null
               
            } else if (dic[i] > dic[stack[stack.length - 1]]) {  //IX
                let diff = dic[i] - dic[stack[stack.length - 1]];
                total += diff;
                stack.pop();
                continue;
            } else if (dic[i] <= dic[stack[stack.length - 1]]) { //XI
                total += dic[stack[stack.length - 1]];  // only when new elem is introduced, we evaluate the prev elemnt in stack for total
                stack.pop();
                stack.push(i);
                
            }
        }

        console.log(stack.length);
        if (stack.length === 1) {
            return total + dic[stack[0]]; // we can use this if say X is given , wna dit stays in the stack
        } else {
            return total;
        }
    }
    console.log(romanToInt('XL'))