/*2. Print the character which is repeated max no of times
        input: 'hello world'
        output : 'L' *  
        without ... math.max will see it as array, ... will spread out them as individual numbers/
*/
        function findMaxFrequencyChar(inputString) {
            let charFrequency = {};
            
            for (let char of inputString) {
                if (char === ' ') {
                    continue; // we use this to skip teh spaces
                }
                if (charFrequency[char]) {
                    charFrequency[char]++;
                } else {
                    charFrequency[char] = 1;
                }
            }
            
            let maxFreq = Math.max(...Object.values(charFrequency));
            let maxFreqChars = [];
        
            for (let char in charFrequency) {
                if (charFrequency[char] === maxFreq) {
                    maxFreqChars.push(char);
                }
            }
        
            return maxFreqChars;  // we are returning the array of max characters
        }
        
        console.log(findMaxFrequencyChar('hello worlddd'));
        