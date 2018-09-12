$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInputs = ['person1', 'person2', 'animal', 'exclamation', 'verb', 'noun']
    userInputs.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});
