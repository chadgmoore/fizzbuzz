$(document).ready(function() {
//add item
  $('.textInput').keypress(function(e) {
    if(e.which == 13) {
      e.preventDefault();
      var newNum = $( this ).val();
      newNum = +newNum;
      // Check if its an int
      if (!isNaN(newNum) && (newNum % 1 == 0)) {
        var max = newNum++;
        document.getElementById("numEntry").reset();
        fizzbuzz(max);
        }

      else{
        alert('please enter a non decimal number');
        document.getElementById("numEntry").reset();
      }
  }
});

function fizzbuzz(max) {
  for ( var i = 1; i <= max; i++ ) {
    if (i % 5 == 0 && i % 3 == 0) {
      $('#numTarget').append('<span id="fizz"> fizz</span><span id="buzz">Buzz </span>')
    } else if ( i % 3 == 0 ) {
      $('#numTarget').append('<span id="fizz"> fizz </span>');
    } else if (i % 5 == 0) {
      $('#numTarget').append('<span id="buzz"> buzz </span>');
    } else {
      $('#numTarget').append(i + ' ');      
    }
  }
}

});