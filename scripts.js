/*
 This problem was asked by Amazon.

An sorted array of integers was rotated an unknown number of times.

Given such an array, find the index of the element in the array in faster than linear time. If the element doesn't exist in the array, return null.

For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).

You can assume all the integers in the array are unique.
*/

const finder = (yourArray, term) => {
  let found = yourArray.findIndex(
    function(element) {
      return element == term
    })
  return found;
}

const test0 = [13, 18, 25, 2, 8, 10]
const test1 = 8
const result0 = 4

console.log(finder(test0,test1))

$(document).ready(function() {

  $('#form1').submit(function(){
    event.preventDefault()
    input1 = $('#input-1').val()
    console.log(input1)
    input2 = $('#input-2').val()
    console.log(input1)
    console.log(input2)
    $('#output-1').text(JSON.stringify(multiline(input1,input2)))
  })

});
