/*5. Shift the characters by the next character, the output should have the next char of input
   input:  'abcxyz'
   output: 'bcdyza'*/

   shiftChar = (inputString) =>{
    let newArr = []
    for(let char of inputString){
        ascii = char.charCodeAt(0)
        //console.log(ascii)
        newArr.push(String.fromCharCode(ascii+1))
    }
    return newArr.join('')
}

    console.log(shiftChar('abcdefy'));