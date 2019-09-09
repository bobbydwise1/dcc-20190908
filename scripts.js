/*
 This problem was asked by Amazon.

An sorted array of integers was rotated an unknown number of times.

Given such an array, find the index of the element in the array in faster than linear time. If the element doesn't exist in the array, return null.

For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).

You can assume all the integers in the array are unique.
*/

// This is the javascript "default" solution
// const finder = (yourArray, term) => {
//   let found = yourArray.findIndex(
//     function(element) {
//       return element == term
//     })
//   return found;
// }

// We note that the array is really two arrays that are sorted.  If the element you are searching for is smaller than the 1st element of the 1st array, it's faster to search from the end of the 2nd array.
const finder = (yourArray,term) => {
  //If your search term is greater than the 1st element, do a normal left-to-right search on the array.
  if (term >= yourArray[0]) {
    let skipped = 0;
    for ( i = 0; i < yourArray.length; i++ ) {
      if ( yourArray[i] != term ) {
        skipped++
      } else {
        return skipped
      }
    }
  } else { //Otherwise, if your search term is smaller than the 1st element, do a right-to-left search on the array.
    let skipped = yourArray.length-1
    for ( i = yourArray.length-1; i >= 0; i-- ) {
      if ( yourArray[i] != term ) {
        skipped--
      } else {
        return skipped
      }
    }
  }
  return null
}

//In theory, this should always be faster than linear time, assumming a good mid-point distribution of the rotated array.

// const test0 = [13, 18, 25, 2, 8, 10]
// const test1 = 8
// const result0 = 4

console.log(finder(test0,test1))

$(document).ready(function() {

  $('#form1').submit(function(){
    event.preventDefault()
    input1 = $('#input-1').val()
    input1 = input1.replace(/\'/g,'"')
    input1 = JSON.parse(input1)
    console.log(input1)
    input2 = $('#input-2').val()
    console.log(input2)
    $('#output-1').text(JSON.stringify(finder(input1,input2)))
  })

});
