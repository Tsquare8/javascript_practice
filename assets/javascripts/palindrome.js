(function() {

  let palindrome = "hannah";

  function reverse() {
    return palindrome.split("").reverse().join("");
  }


  if (reverse(palindrome) !== palindrome) {
    console.log(false);
  } else {
    console.log(true);
  }

})()
