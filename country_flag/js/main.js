document.getElementById('in_name').style.visibility = "hidden";
document.getElementById('sd_name').style.visibility = "hidden";
document.getElementById('nt_name').style.visibility = "hidden";

document.getElementById('india').onmouseover = function() {displayIndia();};
document.getElementById('india').onmouseout = function() {hideall();};
document.getElementById('sweden').onmouseover = function() {displaySweden();};
document.getElementById('sweden').onmouseout = function() {hideall();};
document.getElementById('neth').onmouseover = function() {displayNeth();};
document.getElementById('neth').onmouseout = function() {hideall();};

function displayIndia(){
  document.getElementById('in_name').style.visibility = "visible";
}

function displaySweden(){
  document.getElementById('sd_name').style.visibility = "visible";
}

function displayNeth(){
  document.getElementById('nt_name').style.visibility = "visible";
}

function hideall() {
  document.getElementById('in_name').style.visibility = "hidden";
  document.getElementById('sd_name').style.visibility = "hidden";
  document.getElementById('nt_name').style.visibility = "hidden";
}
