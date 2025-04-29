/* 4. Print the Abbreviation for a string
   input: 'Rabindra Nath Tagore'
   output: 'R. N. tagore' */


   abbreviation = (inputString) =>{
    str_arr = inputString.split(' ')
    for(i = 0; i<str_arr.length; i++){
        if(i === str_arr.length-1){
            str_arr[i] = str_arr[i].toLowerCase()
        }
        else{
        str_arr[i] = str_arr[i][0].toUpperCase()+'.';
        }
        //str_arr[i] = str_arr[i][0].toUpperCase();
    }
    return str_arr.join(' ')

   }
   console.log(abbreviation('Rabindra Nath Tagore'))


  /* ALTERNATE WAY OF DOING IT using map()*
        function abbreviation(inputString) {
    let str_arr = inputString.split(' ');

    let result = str_arr.map((word, index) => {
        if (index === str_arr.length - 1) {
            return word.toLowerCase();  // last word in lowercase
        } else {
            return word[0].toUpperCase() + '.';  // abbreviation
        }
    });

    return result.join(' ');
}

console.log(abbreviation('Rabindra Nath Tagore'));
  
  */