$(document).ready(function() {

//range of numbers to start with
var minNum = 1;
var maxNum = 16;

while ( minNum < maxNum ) {
  //console.log(minNum); print to the console
  //if minNum /3 append fizz to the body
  if (minNum % 3 ==0){
  	$('body').append(minNum + ' fizz' + '</br>')
  }
  
  //if minNum /5 append buzz to the body
  else if (minNum % 5 ==0){
  	$('body').append(minNum + ' buzz' + '</br>')
  }

  else if (minNum % 3 ==0 && minNum % 5 ==0){
  	$('body').append(minNum + ' fizzBuzz' + '</br>')
  }

  else if (minNum % 3 !=0 || minNum % 5 !=0){
  	$('body').append(minNum + '</br>')
}
  minNum++;
}







});