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

  function squared(num1){
    result = Math.sqrt(num1)
    display = result

    // replace contents of #display with contents of var display
    $( "#display" ).replaceWith( "<h2 class='row text-center ' id='display'>" + display + "</h2>");

    // set variables back to initial state, for new operation
    num1String = ""
    sign = ""
    num2String = ""
    num1 = nil;
    num2 = nil;
    result = nil; 
  }

/**************************************************JQuery**********************************************************/

  // putting event listeners on each button
  $('#button_1').click(function() {
    // IF sign is empty, concatonate "1" to the end of num1String
    // ELSE, concatonate "1" to the end of num2String
    if (sign == "") {
      num1String += "1 ";
    } else {
      num2String += "1 ";
    }

    refreshDisplay();

    // replace contents of #display with contents of var display
    $( "#display" ).replaceWith( "<h2 class='row text-center ' id='display'>" + display + "</h2>");
  });

  $('#button_2').click(function() {
    // IF sign is empty, concatonate "2" to the end of num1String
    // ELSE, concatonate "2" to the end of num2String
    if (sign == "") {
      num1String += "2 ";
    } else {
      num2String += "2 ";
    }

    refreshDisplay();

    // replace contents of #display with contents of var display
    $( "#display" ).replaceWith( "<h2 class='row text-center ' id='display'>" + display + "</h2>");
  });

  $('#button_3').click(function() {
    // IF sign is empty, concatonate "3" to the end of num1String
    // ELSE, concatonate "3" to the end of num2String
    if (sign == "") {
      num1String += "3 ";
    } else {
      num2String += "3 ";
    }

    refreshDisplay();

    // replace contents of #display with contents of var display
    $( "#display" ).replaceWith( "<h2 class='row text-center ' id='display'>" + display + "</h2>");
  });

  $('#button_4').click(function() {
    // IF sign is empty, concatonate "4" to the end of num1String
    // ELSE, concatonate "4" to the end of num2String
    if (sign == "") {
      num1String += "4 ";
    } else {
      num2String += "4 ";
    }

    refreshDisplay();

    // replace contents of #display with contents of var display
    $( "#display" ).replaceWith( "<h2 class='row text-center ' id='display'>" + display + "</h2>");
  });

  $('#button_5').click(function() {
    // IF sign is empty, concatonate "5" to the end of num1String
    // ELSE, concatonate "5" to the end of num2String
    if (sign == "") {
      num1String += "5 ";
    } else {
      num2String += "5 ";
    }

    refreshDisplay();

    // replace contents of #display with contents of var display
    $( "#display" ).replaceWith( "<h2 class='row text-center ' id='display'>" + display + "</h2>");
  });

  $('#button_6').click(function() {
    // IF sign is empty, concatonate "6" to the end of num1String
    // ELSE, concatonate "6" to the end of num2String
    if (sign == "") {
      num1String += "6 ";
    } else {
      num2String += "6 ";
    }

    refreshDisplay();

    // replace contents of #display with contents of var display
    $( "#display" ).replaceWith( "<h2 class='row text-center ' id='display'>" + display + "</h2>");
  });

  $('#button_7').click(function() {
    // IF sign is empty, concatonate "7" to the end of num1String
    // ELSE, concatonate "7" to the end of num2String
    if (sign == "") {
      num1String += "7 ";
    } else {
      num2String += "7 ";
    }

    refreshDisplay();

    // replace contents of #display with contents of var display
    $( "#display" ).replaceWith( "<h2 class='row text-center ' id='display'>" + display + "</h2>");
  });

  $('#button_8').click(function() {
    // IF sign is empty, concatonate "8" to the end of num1String
    // ELSE, concatonate "8" to the end of num2String
    if (sign == "") {
      num1String += "8 ";
    } else {
      num2String += "8 ";
    }

    refreshDisplay();

    // replace contents of #display with contents of var display
    $( "#display" ).replaceWith( "<h2 class='row text-center ' id='display'>" + display + "</h2>");
  });

  $('#button_9').click(function() {
    // IF sign is empty, concatonate "9" to the end of num1String
    // ELSE, concatonate "9" to the end of num2String
    if (sign == "") {
      num1String += "9 ";
    } else {
      num2String += "9 ";
    }

    refreshDisplay();

    // replace contents of #display with contents of var display
    $( "#display" ).replaceWith( "<h2 class='row text-center ' id='display'>" + display + "</h2>");
  });

  $('#button_0').click(function() {
    // IF sign is empty, concatonate "0" to the end of num1String
    // ELSE, concatonate "0" to the end of num2String
 if (sign == "") {
      num1String += "0 ";
    } else {
      num2String += "0 ";
    }

    refreshDisplay();

    // replace contents of #display with contents of var display
    $( "#display" ).replaceWith( "<h2 class='row text-center ' id='display'>" + display + "</h2>");
  });

  $('#plus').click(function() {
    // IF num1 is empty, generate error message telling user either to pick a number first,
    // ELSE, concatonate the "+" symbol to the end of var sign
    if (num1 == "") {
      //some error message
    } else {
      sign = " +";
    }

    refreshDisplay();

    // replace contents of #display with contents of var display
      
    $( "#display" ).replaceWith( "<h2 class='row text-center ' id='display'>" + display + "</h2>");
  });

  $('#minus').click(function() {
    // IF num1 is empty, generate error message telling user either to pick a number first,
    // ELSE, concatonate the "-" symbol to the end of var sign
    if (num1 == "") {
      //some error message
    } else {
      sign = " -";
    }

    refreshDisplay();

    // replace contents of #display with contents of var display
      
    $( "#display" ).replaceWith( "<h2 class='row text-center ' id='display'>" + display + "</h2>");
  });

  $('multiply').click(function() {
    // IF num1 is empty, generate error message telling user either to pick a number first,
    // ELSE, concatonate the "x" symbol to the end of var sign
    if (num1 == "") {
      //some error message
    } else {
      sign = " x";
    }

    refreshDisplay();

    // replace contents of #display with contents of var display
      
    $( "#display" ).replaceWith( "<h2 class='row text-center ' id='display'>" + display + "</h2>");
  });

  $('#divide').click(function() {
    // IF num1 is empty, generate error message telling user either to pick a number first,
    // ELSE, concatonate the "/" symbol to the end of var sign
    if (num1 == "") {
      //some error message
    } else {
      sign = " /";
    }

    refreshDisplay();

    // replace contents of #display with contents of var display
      
    $( "#display" ).replaceWith( "<h2 class='row text-center ' id='display'>" + display + "</h2>");
  });

  $('#square_root').click(function() {
    // IF num1 is empty, generate error message telling user to pick a number first,
    // ELSE, set  var display = squared(num1)
    
    if (num1 == "") {
      //some error message
    } else {
      display = squared(num1);
    }

  });

  $('#equals').click(function() {
    // IF num1 is empty ...
    // ELSE IF var sign is empty ...
    // ELSE IF num2 is empty ...
    // ELSE IF var sign == "+" set var display = add(num1, num2)
    // ELSE IF var sign == "-" set var display = subtract(num1, num2)
    // ELSE IF var sign == "x" set var display = multiply(num1, num2)
    // ELSE IF var sign == "/" set var display = divide(num1, num2)
    if (num1 = "") {
      // some error message
    } else if (sign == "") {
      // some error message
    } else if (num2 == "") {
      // some error message
    } else if (sign == "+") {
      // some error message
    } else if (sign == "-") {
      // some error message
    } else if (sign == "x") {
      // some error message
    } else if (sign == "/") {
      // some error message
    } else {
      // some error message
    }
    
    $( "#display" ).replaceWith( "<h2 class='row text-center ' id='display'>" + display + "</h2>");

    var num1String = ""
    var sign = ""
    var num2String = ""
    var num1 = nil;
    var num2 = nil;
    var result = nil; 
  });

});