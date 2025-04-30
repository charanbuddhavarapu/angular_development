/*7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
    input: 'ABC'
    output: ABC , ACB , BCA, BAC ...*/


    //first we have to read the input, so we use readline module
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    readline.question('Enter a 3-letter word: ', word => {
        permutations(word);
        readline.close(); //we are using this to close the input interface after the process is done.
    });
    
    function permutations(word) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if (i !== j && j !== k && i !== k) {
                        console.log(word[i] + word[j] + word[k]);
                    }
                }
            }
        }
    }
    