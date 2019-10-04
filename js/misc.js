// miscresearch webstie by felix taylor
// a collection of various scripts pulled from the ether
// references included at a later date

// pop up
function countDown1() {
  var x = document.getElementById("countdown1");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function countDown2() {
  var x = document.getElementById("countdown2");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function countDown3() {
  var x = document.getElementById("countdown3");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

//WHAT a Drag

$( function() {
   $( "#countdown3, #countdown2, #countdown1" ).draggable();
 } );
