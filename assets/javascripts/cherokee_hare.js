(function() {

  let starting_pop = 25;
  let birthRate = 0.25;
  let numOfWeeks  = 12;

  var finalPop = Math.pow(1+birthRate, numOfWeeks) * starting_pop;

  console.log("There will be " + Math.trunc(finalPop) + " Cherokee Hares after " + numOfWeeks + " weeks");


})();
