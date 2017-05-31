(function() {

  let word = "mississippi".split("");
  let letter = "s";
  let count = 0;

  for (var i = 0; i < word.length; i++) {

    if (word[i] == letter) {
      count++;
      var foundLetter = letter;
    }

  }

  if (foundLetter == letter) {
    console.log("Yeah, the letter " + foundLetter + " exists " + count + " times in the in my word")
  } else {
    console.log("Nope, that letter does not exists in my word");
  }

})();
