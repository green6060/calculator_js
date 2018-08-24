$(document).ready( function() {
/**********************************************Variables**********************************************************/

  var num1String = ""
  var sign = ""
  var num2String = ""
  var num1 = nil;
  var num2 = nil;
  var result = nil;

  var display = "";

/**********************************************Functions**********************************************************/

  // refreshes the display variable (so as later in each clickEvent to refresh the #display contents as each
  // button is clicked)
  function refreshDisplay() {
    display = num1String + " " + sign + " " +  num2String
  }

  function add(num1, num2){
    result = num1 + num;
    return result;
  }

  function subtract(num1, num2){
    result = num1 - num;
    return result;
  }

  function multiply(num1, num2){
    result = num1 * num;
    return result;
  }

  function devide(num1, num2){
    result = num1 / num;
    return result;
  }

  function squared(num1, num2){
    result = Math.sqrt(num1)
    // set var display = var result
    //
    // replace contents of #display with contents of var display
    //
    // var num1String = ""
    // var sign = ""
    // var num2String = ""
    // var num1 = nil;
    // var num2 = nil;
    // var result = nil; 
    //
  }

/**************************************************JQuery**********************************************************/

  // putting event listeners on each button
  $('#button_1').click(function() {
    // IF sign is empty, concatonate "1" to the end of num1String
    // ELSE, concatonate "1" to the end of num2String
    //
    // refreshDisplay()
    //
    // replace contents of #display with contents of var display
  });

  $('#button_2').click(function() {
    // IF sign is empty, concatonate "2" to the end of num1String
    // ELSE, concatonate "2" to the end of num2String
    //
    // refreshDisplay()
    //
    // replace contents of #display with contents of var display
  });

  $('#button_3').click(function() {
    // IF sign is empty, concatonate "3" to the end of num1String
    // ELSE, concatonate "3" to the end of num2String
    //
    // refreshDisplay()
    //
    // replace contents of #display with contents of var display
  });

  $('#button_4').click(function() {
    // IF sign is empty, concatonate "4" to the end of num1String
    // ELSE, concatonate "4" to the end of num2String
    //
    // refreshDisplay()
    //
    // replace contents of #display with contents of var display
  });

  $('#button_5').click(function() {
    // IF sign is empty, concatonate "5" to the end of num1String
    // ELSE, concatonate "5" to the end of num2String
    //
    // refreshDisplay()
    //
    // replace contents of #display with contents of var display
  });

  $('#button_6').click(function() {
    // IF sign is empty, concatonate "6" to the end of num1String
    // ELSE, concatonate "6" to the end of num2String
    //
    // refreshDisplay()
    //
    // replace contents of #display with contents of var display
  });

  $('#button_7').click(function() {
    // IF sign is empty, concatonate "7" to the end of num1String
    // ELSE, concatonate "7" to the end of num2String
    //
    // refreshDisplay()
    //
    // replace contents of #display with contents of var display
  });

  $('#button_8').click(function() {
    // IF sign is empty, concatonate "8" to the end of num1String
    // ELSE, concatonate "8" to the end of num2String
    //
    // refreshDisplay()
    //
    // replace contents of #display with contents of var display
  });

  $('#button_9').click(function() {
    // IF sign is empty, concatonate "9" to the end of num1String
    // ELSE, concatonate "9" to the end of num2String
    //
    // refreshDisplay()
    //
    // replace contents of #display with contents of var display
  });

  $('#button_0').click(function() {
    // IF sign is empty, concatonate "0" to the end of num1String
    // ELSE, concatonate "0" to the end of num2String
    //
    // refreshDisplay()
    //
    // replace contents of #display with contents of var display
  });

  $('#plus').click(function() {
    // IF num1 is empty, generate error message telling user either to pick a number first,
    // or ELSE IF var sign is NOT empty, tell user to they can only pick one sign at a time
    // ELSE, concatonate the "+" symbol to the end of var sign
    //
    // refreshDisplay()
    //
    // replace contents of #display with contents of var display
  });

  $('#minus').click(function() {
    // IF num1 is empty, generate error message telling user either to pick a number first,
    // or ELSE IF var sign is NOT empty, tell user to they can only pick one sign at a time
    // ELSE, concatonate the "-" symbol to the end of var sign
    //
    // refreshDisplay()
    //
    // replace contents of #display with contents of var display
  });

  $('multiply').click(function() {
    // IF num1 is empty, generate error message telling user either to pick a number first,
    // or ELSE IF var sign is NOT empty, tell user to they can only pick one sign at a time
    // ELSE, concatonate the "x" symbol to the end of var sign
    //
    // refreshDisplay()
    //
    // replace contents of #display with contents of var display
  });

  $('#divide').click(function() {
    // IF num1 is empty, generate error message telling user either to pick a number first,
    // or ELSE IF var sign is NOT empty, tell user to they can only pick one sign at a time
    // ELSE, concatonate the "/" symbol to the end of var sign
    //
    // refreshDisplay()
    //
    // replace contents of #display with contents of var display
  });

  $('#square_root').click(function() {
    // IF num1 is empty, generate error message telling user to pick a number first,
    // or ELSE IF var sign is NOT empty, tell user to they can only pick one sign at a time
    // ELSE, concatonate the "&#8730;" symbol  code to the end of var sign
    //
    // ELSE set var display = squared(num1, num2)
  });

  $('#equals').click(function() {
    // IF num1 is empty ...
    // ELSE IF var sign is empty ...
    // ELSE IF num2 is empty ...
    // ELSE IF var sign == "+" set var display = add(num1, num2)
    // ELSE IF var sign == "-" set var display = subtract(num1, num2)
    // ELSE IF var sign == "x" set var display = multiply(num1, num2)
    // ELSE IF var sign == "/" set var display = divide(num1, num2)
    
    //
    // replace contents of #display with contents of var display
    //
    // var num1String = ""
    // var sign = ""
    // var num2String = ""
    // var num1 = nil;
    // var num2 = nil;
    // var result = nil; 
    //
  });

});