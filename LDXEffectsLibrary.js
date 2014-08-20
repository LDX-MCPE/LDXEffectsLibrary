function show(name,finish) {
showingName = name;
showingFinish = finish;
showingFinished = false;
showingo = parseInt(0);
document.getElementById(showingName).style.display = "block";
showing();
}
function showing() {
if(showingo < 100) {
showingo++;
} else {
showingFinished = true;
}
document.getElementById(showingName).style.opacity = showingo / 100;
document.getElementById(showingName).style.filter = "alpha(opacity=" + showingo * 100 + ")";
if(showingFinished == true) {
if(showingFinish != false) {
window.setTimeout(showingFinish,1);
}
} else {
window.setTimeout(showing,10);
}
}
function hide(name,finish) {
hidingName = name;
hidingFinish = finish;
hidingFinished = false;
hidingo = parseInt(100);
hiding();
}
function hiding() {
if(hidingo > 0) {
hidingo--;
} else {
hidingFinished = true;
}
document.getElementById(hidingName).style.opacity = hidingo / 100;
document.getElementById(hidingName).style.filter = "alpha(opacity=" + hidingo * 100 + ")";
if(hidingFinished == true) {
document.getElementById(hidingName).style.display = "none";
if(hidingFinish != false) {
window.setTimeout(hidingFinish,1);
}
} else {
window.setTimeout(hiding,10);
}
}
