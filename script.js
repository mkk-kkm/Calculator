


$("form").submit(function(event) {
  // do not refresh when we press submit
  event.preventDefault();
  var number1 = $("#first").val();
  var number2 = $("#second").val();

  
});













/*function calculate() {
  var f = document.getElementbyId("first").value;
  var s = document.getElementbyId("second").value;
  var o = document.getElementbyId("operator").value;

  if (o == "+") {
    console.log("hi");
  } else {
    console.log("bye");
  }
}

$("form").submit(function(e) {
  e.preventDefault();
  console.log("hello!")

  var first = $("#first").val() ;
  var second = $("#second").val() ;
  var operator = $("#operator").val() ;

  console.log(operator);
  if (notNum(first) || notNum(second)){
    $("#answer").text("you must enter valid input");
    return;
  }
  if (operator=="add"){
    var ans = add(first,second);
    $("#answer").text(ans.toString());
  }
});

function notNum(input){
  if (!input){
    return true;
  }
  else {
    return false;
  }
}

function add(x,y){
  var newx = parseInt(x);
  var newy = parseInt(y);
  return newx + newy;
}



var number = parseInt("8");


*/