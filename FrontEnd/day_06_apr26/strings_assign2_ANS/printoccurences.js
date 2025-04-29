    /*1. Print the occurence of each character in a string
   input: 'entertainment'
   output: { e:3 , n:2 , t: 3 ....}*/
   let str1 = 'entertainment'
   let arr1 = str1.split('')
   let charCount = {}
   let charCount1 = {}
   
   //alternate approach
   for(let char in str1){
    if(charCount1[arr1[char]]){
        charCount1[arr1[char]] += 1
    }
    else{
        charCount1[arr1[char]]=1
    }
   }
   console.log(charCount1)