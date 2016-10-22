$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

var choiceArray = ["paper", "rock", "scissors"];
var computerChoice = Math.floor(3*Math.random());
console.log(computerChoice);
switch(parseInt(computerChoice)) {
case 0:
    computerChoice="rock";
    break;
case 1:
    computerChoice="paper";
    break;
case 2:
    computerChoice="scissors";
    break;
default:
    console.log('how it just happened?');
}

console.log(computerChoice);

