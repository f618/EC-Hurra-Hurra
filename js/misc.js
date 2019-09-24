// miscresearch webstie by felix taylor
// a collection of various scripts pulled from the ether
// references included at a later date

// clocks
const clocks = document.getElementsByClassName("clock");

function updateClocks() {
  for (let clock of clocks) {
    let timezone = clock.dataset.timezone;
    let time = new Date().toLocaleTimeString("en-US", {
      hour: '2-digit',
      timeZone: timezone
    });
    clock.textContent = time;
  }
}

setInterval(updateClocks, 60000);
updateClocks();

// dragable boxs
dragElement(document.getElementById("melbourne"));
dragElement(document.getElementById("macau"));
dragElement(document.getElementById("london"));
dragElement(document.getElementById("contact"));
dragElement(document.getElementById("miscresearch"));

function dragElement(elmnt) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		// if present, the header is where you move the DIV from:
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		// otherwise, move the DIV from anywhere inside the DIV:
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		// stop moving when mouse button is released:
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

function aboutBtn() {
  var x = document.getElementById("aboutContent");
  if(x.style.display == 'none'){
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    return false;
}

$(function() {

    var marquee = $("#marquee");
    marquee.css({"overflow": "hidden", "width": "100%"});

    // wrap "My Text" with a span (IE doesn't like divs inline-block)
    marquee.wrapInner("<span>");
    marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" });
    marquee.append(marquee.find("span").clone()); // now there are two spans with "My Text"

    marquee.wrapInner("<div>");
    marquee.find("div").css("width", "200%");

    var reset = function() {
        $(this).css("margin-left", "0%");
        $(this).animate({ "margin-left": "-100%" }, 3000, 'linear', reset);
    };

    reset.call(marquee.find("div"));

});
