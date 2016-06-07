$(function() {
	$("form").submit(function(event) {
  event.preventDefault();
    var stringInput = $("input#sentence").val();
    var stringInput = stringInput.toLowerCase();
    var arrayInput = stringInput.split("");
    var stringOutput;
    for (var index = 0; index < arrayInput.length; index += 1) {

      if (arrayInput[index] === "a" || arrayInput[index] === "e" || arrayInput[index] === "i" || arrayInput[index] === "o" || arrayInput[index] === "u") {
        $("#arrayOutput").append("-");
      }
      else {
        $("#arrayOutput").append(arrayInput[index]);
      }
    };
    $("form#inputForm").hide();
   });
});/*This file is for your custom js.  All yours*/
