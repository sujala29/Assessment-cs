// 1.Sum Zero

// function addToZero(arr){

//     for(let i=0;i<arr.length;i++){
//         let checkingNum = arr[i]
//         for (let k=0; k<arr.length;k++){
//             let comparingNum = arr[k]


//             if(checkingNum + comparingNum === 0 && i!==k){
//                 return true
//             }
//         }
//     }
//     return false
// }


// console.log(addToZero([1,2,3,4,5])) //F

// console.log(addToZero([1,2,3,4,-3])) //T

// console.log(addToZero([0,1,2,3,4,5,0,9])) //T

// console.log(addToZero([])) //F

// console.log(addToZero([0])) //F




// 2. Unique Characters.

// function uniqueLetters(str) {
//     let letters=''

//     for(i=0;i<str.length;i++){

//         if (letters.includes(str[i])){
//             return false
//         }
//         else{
//             letters+= str[i]
//         }
//     }
//     return true
// }

// console.log(uniqueLetters("wednesday"));
// console.log(uniqueLetters("monday"));



// 3.Pangram sentence

function pangram (str){
    let counterObject = {
        a: 0,
        b: 0,
        c:0,
        d:0,
        e:0,
        f:0,
        g:0,
        h:0,
        i:0,
        j:0,
        k:0,
        l:0,
        m:0,
        n:0,
        o:0,
        p:0,
        q:0,
        r:0,
        s:0,
        t:0,
        u:0,
        v:0,
        w:0,
        x:0,
        y:0,
        z:0,


    }

    for (let i=0;i<str.length;i++){

counterObject[str[i]]++


    }

    for(let countLetetr in counterObject){

        if(counterObject[countLetetr]===0){

            return false
        }
    }
return true

}

console.log (pangram("The quick brown fox jumps over the lazy dog!"));

console.log (pangram("I like cats, but not mice"));


// 4.LONGEST WORD

function findLongestWord(arr) {

    let maxLength=0

    for(let i= 0;i<arr.length; i++)
    {
        if(arr[i].length>maxLength){
            maxLength=arr[i].length
        }

    }

    return maxLength
}
console.log(findLongestWord(["hi", "hello"]));
console.log(findLongestWord(["hello", "worldhello"]));



