





$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
  var food = $("input#food").val();
  var color = $("input#color").val();
  var animal = $("input#animal").val();
  var expletive = $("input#expletive").val();
  var sport = $("input#sport").val();
  var city = $("input#city").val();


  //console.log()$("#food").text(food);

  var answers = [food, color, animal, expletive, sport, city];

  var selectedAnswer0 = answers[0];
  var selectedAnswer1 = answers[1];
  var selectedAnswer2 = answers[2];
  console.log(selectedAnswer0);
  console.log(selectedAnswer1);
  console.log(selectedAnswer2);

  var combinedAnswers = [selectedAnswer0, selectedAnswer1, selectedAnswer2];
 console.log(combinedAnswers)

  var newAnswers = ['string', 'two'];
  var result = newAnswers.push(combinedAnswers);

  console.log(newAnswers);
  console.log(result);

});
});
