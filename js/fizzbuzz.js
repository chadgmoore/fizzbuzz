// Make sure it's not a decimal
//  Make sure the NaN shit is right
// Make fizzbuzz function


$(document).ready(function() {

var minNum = 1;
var maxNum = 101;

// while ( minNum < maxNum ) {
// 	//normal - not divisble by 3 AND by 5
//   	if (minNum % 3 !=0 && minNum % 5 !=0){
//   		$('body').append('<p>' + minNum + '</p>')
// 	}
// 	//fizzbuzz - divisible by 3 AND 5
//   	else if (minNum % 3 ==0 && minNum % 5 ==0){
//   		$('body').append('<p><span id="fizz">fizz</span><span id="buzz">Buzz</span></p>')
// 	}
// 	//fizz - divisible by 3
//   	else if (minNum % 3 ==0){
//   		$('body').append('<p id="fizz">fizz</p>')
// 	}
//  	//buzz - divisible by 5
//   	else if (minNum % 5 ==0){
//   		$('body').append('<p id="buzz">buzz</p>')
//   	}
  
//   minNum++;
// }

//add item
  $('.textInput').keypress(function(e) {
    if(e.which == 13) {
      e.preventDefault();
      var newNum = $( this ).val();
      newNum = +newNum;
      // Check if its an int
      if (!isNaN(newNum)) {
        var max = newNum++;
        document.getElementById("numEntry").reset();
        for (i = 1; i < newNum; i++) { 
          $('#numTarget').append(i + ' ');
        }

      }
      else{
        alert('please enter a number');
        document.getElementById("numEntry").reset();
      }
  }
})

});