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
                stack.push(i);
                console.log(stack);
            } else if (dic[i] > dic[stack[stack.length - 1]]) {
                let diff = dic[i] - dic[stack[stack.length - 1]];
                total += diff;
                stack.pop();
                console.log("elif: ", stack);
                continue;
            } else if (dic[i] <= dic[stack[stack.length - 1]]) {
                total += dic[stack[stack.length - 1]];
                stack.pop();
                stack.push(i);
                console.log(stack);
            }
        }

        console.log(stack.length);
        if (stack.length === 1) {
            return total + dic[stack[0]];
        } else {
            return total;
        }
    }
    console.log(romanToInt('XL'))