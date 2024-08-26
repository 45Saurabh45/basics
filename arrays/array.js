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
console.log(returnElement([8,2,3,5],0))
