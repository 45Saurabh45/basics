// check input is an array or not 
const input = [1,2,3,4]
function isArrayInput (input) {
    if(!Array.isArray(input)){ //Here we are using Array.isArray method in js 
        return false
    }
    return true
}

console.log(isArrayInput(input))

//Cloning an array
// Here by using slice we are simply creating a copy of array or you can simply assign the array value to a new var
function cloneArr (arr) {
    let res = arr.slice(0);
    return res
  }
  
  let arr = [1,2,3,[4,5]]
  console.log(cloneArr(arr))

//return 1st element of array if n is passed then return first n elements

function returnElement (arr, n) {
    if(n === 0 || n == null){
        return arr[0]
    }
    if(n<0){
        return []
    }

    let newArr = arr.slice(0,n)
    return newArr
}
console.log(returnElement("First elements",[8,2,3,5],0))

//return last element of array if n is passed then return last n elements 

function returnLastElement (arr,n) {
    if(n===0 || n == null){
        return arr[arr.length-1]
    }
    const lastArr = arr.slice(Math.max(arr.length -n ,0))
    return lastArr
}
console.log(returnLastElement("last elements",[8,2,3,5],3))

//Join Array elements to a String
function arrtoString (array) {
   return array.join('+')
}
console.log(arrtoString(["red", "green", "yellow"]))

//Function to sort the array

function soretedArray(arr){
    return arr.sort((a,b)=> a-b)
}
console.log(soretedArray( [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]))

//Function for most frequent element in an array

function freqElem (arr) {
    let frequency = 1;
    let m;
    let item;
    for(let i =0; i<arr.length; i++){
        for(let j =0 ; j<arr.length; j++){
            if(arr[i] == arr[j]){
                m++
            }
            if(frequency<m){
                frequency = m;
                item = arr[i]
            }
        }
        m = 0;

    }  
    return {frequency, item}
}

console.log(freqElem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))

//Function to swap the case of each alphabet in a String 

function swapElem (str) {
    let str1 = str.split('')
    // console.log(str1)
    str1.map(element => {
        // console.log(element.toUpperCase())
        if(element === element.toUpperCase()){
            element.toLowerCase();
        }else{
            element.toUpperCase()
        }
    });
    str1.join('')
    // console.log("str1",str1)
    return str
}
console.log(swapElem('The Quick Brown Fox'))