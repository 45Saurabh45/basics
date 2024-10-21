// function palinDrome (str) {
//     console.log(str.split('').reverse().join(''))
//     return str === str.split('').reverse().join('')
// }
// str = "abcd"
// console.log(palinDrome(str))

// function evenOddNum (arr){
//     let even =[]
//     let odd = []
//     arr.filter(n => {if(n%2 === 0){
//         even.push(n)
// }else{
//     odd.push(n)
// }})
// console.log("even",even)
// console.log("oddd",odd)
// }

// evenOddNum([1,2,3,4,5,6])


// function multiplyNum(arr, n){
//     return arr.map(a => a*n)
// }

// console.log(multiplyNum([1,2,3,4,5,6], 3))


// function sumOfArray (arr) {
//     return arr.reduce((a,b) => a*b)
// }
// console.log(sumOfArray([1,2,3,4,5]))

// function primeNum (num) {
//     primeFlag = true
//     for(let i = 2; i<num-1; i++){
//         if(num % i === 0){
//             primeFlag = false
//             break;
//         }
//     }
//     console.log(primeFlag)
//     if(primeFlag){
//         console.log("Number is prime")
//     }else{
//         console.log("Number is not prime")
//     }
// }

// primeNum(17)

// function nestedArray (arr){
//     let largest = arr[0][0]
//     for(let n of arr){
//         for(let a of n){
//             if(a > largest){
//                 largest = a
//             }
//         }
//     }
//     return largest
// }

// function fibonacci (num) {
//     let n1=0
//     let n2 =1
//     if(num === 0){
//         return n1
//     }
//     if(num === 1) return n2
//     for(let i =3; i<=num; i++){
//         sum = n1+n2
//         n1 = n2
//         n2 = sum
//     }
//     return n2
// }

// console.log(fibonacci(8))

// let n = 1
// function sum (){
//     n = n+1
//     return n
// }

// console.log(sum())
// console.log(sum())
// console.log(sum())
// console.log(sum())

// function arrSort (arr){
//  return arr.sort((a,b) => b-a)
// }
// console.log(arrSort([1,4,7,2,6,9,0]))

// function sorttwo (arr1,arr2) {
//     return ([...arr1, ...arr2].sort((a,b) => a-b))
// }
// console.log(sorttwo([1,2,4,10],[6,7,8,9]))


// function anagram (str1, str2) {
//     let res1 = str1.split('').sort().join('')
//     let res2 = str2.split('').sort().join('')
//     return res1 === res2
// }

// console.log(anagram("listen", "silent"))

// let ques = 'abcde'

// function myFunction(ques) {
//     let str = ques.split('')
//     let res = []
//     for (let i = 0; i < str.length; i++) {
//         let str1
//         if (i + 1 < str.length) {
//             str1 = str[i] + str[i + 1]
//             res.push(str1)
//         } else {
//             res.push(str[i])
//         }
//     }
//     return res
// }

// console.log(myFunction(ques))
// let ques = 'abcde'

// function myFunction(ques) {
//     // let str = ques.split('')
//     let res = []
//     for (let i = 0; i < ques.length; i++) {
//         if (i + 1 < ques.length) {
//             res.push(ques.slice(i, i + 2))
//         } else {
//             res.push(ques.slice(i, i + 1))
//         }
//     }
//     return res
// }

// console.log(myFunction(ques))

// printNumbers(); // Function is called before its declaration

// function printNumbers() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

//Peak element on comparision with its adjacent elements

// let arr = [5, 10, 20, 15]
// let n = arr.length
// let peak = []
// for(let i =0 ; i<n; i++){
//     if( arr[i]>=arr[i-1] &&  arr[i]>=arr[i+1]){
//         peak.push(arr[i])
//     }
// }
// console.log(peak)let arr = [10, 20, 15, 2, 23, 90, 90]


//Minimum and maximum element in an array

// let arr = [10, 20, 15, 2, 23, 90, 90]
// let min = arr[0], max = arr[0] ;

// for (let i = 0; i<arr.length; i++){
//     if(min >=  arr[i]){
//         min = arr[i]
//     }else if(arr[i]>= max){
//         max =  arr[i]
//     }
// }

// console.log("min", min)
// console.log("max", max)

//reverse an array

// let arr = [ 15, 2, 23, 9, 90]

// function reverseArr(arr){
//     return arr.reverse()
// }
// console.log(reverseArr(arr))

//sort an array

// let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6]
// function sortedArr(arr){
//     return arr.sort((a,b)=> a-b)
// }
// console.log(sortedArr(arr))

//find the nth largest and nth smallest no
// let arr = [10, 20, 15, 3, 90, 0]
// let lar, small;
// function nlargsmall(arr,n){
//     newArr = arr.sort((a,b) => a-b)
//     small = newArr[n-1];
//     larArr = arr.sort((a,b)=>b-a)
//     lar = larArr[n-1]
//     return {small, lar}
// }


// console.log(nlargsmall(arr,2))

//Concourenece of an number in an array

// let arr = [10, 20, 15, 3, 90, 20]
// let count = 0
// function occ(arr, n){
// for(let i =0 ; i<arr.length; i++){
//     if(n == arr[i]){
//         count++
//     }
// }
// return count

// }

// console.log(occ(arr,10))

//Union or merge of two array

// let arr1 = [1, 3, 4, 5, 7]
// let arr2 = [2, 3, 5, 6]

// function unionArr (arr1, arr2){
//     let set1 = new Set(arr1)
//     let set2 = new Set(arr2)
//     const res = [...new Set([...set1, ...set2])].sort((a,b)=>a-b)
//     return res
// }
// const union = unionArr(arr1, arr2)
// console.log(union)

//intersection of two arrays
// let arr1 = [1, 3, 4, 5, 7]
// let arr2 = [2, 3, 5, 6,7]

// function intersect(arr1,arr2){
//     return arr1.filter(val=> arr2.includes(val))
// }

// console.log(intersect(arr1, arr2))

//Duplicates in an array

// let arr1 = [1, 3, 4, 5, 7,1,4]
// let dup = []
// function duplicatesArr(arr1){
//     for(let i = 0 ; i<arr1.length; i++){
//         for(let j =i+1;j<arr1.length;j++){
//             if(arr1[i] == arr1[j] && !dup.includes(arr1[i])){
//                 dup.push(arr1[i])
//             }
//         }
//     }
//     return dup
// }
// console.log(duplicatesArr(arr1))
//Reverse words of a String

// let str = "i love programming very much"

// function reverse(str){
//     return str.split(' ').reverse().join(' ')
// }
// console.log(reverse(str))

//integer to Roman No
// function intToRoman(num) {
//     const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//     const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    
//     let result = '';

//     for (let i = 0; i < val.length; i++) {
//         while (num >= val[i]) {
//             result += roman[i];
//             num -= val[i];
//         }
//     }

//     return result;
// }

// console.log(intToRoman(2)); 

