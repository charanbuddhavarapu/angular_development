/*3. Swap The case for Each Character in a string 
   input: 'Hello World'
   output: 'hELLO wORLD'*/

   swapChar = (inputString) =>{
    let newArr = []
    for(let char of inputString){
        //to see if its capital letter
        if(char == char.toUpperCase()){
            newArr.push(char.toLowerCase())
            
        }
        else{newArr.push(char.toUpperCase())}
    }
    console.log(newArr)
    return newArr.join('')
   }
   
   console.log(swapChar('Hello World'))