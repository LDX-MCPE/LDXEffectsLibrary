function show(id,func) {
LDX_ShowingElementID = id;
LDX_ShowingEndFunction = func;
LDX_ShowingFinished = false;
LDX_ShowingOpacity = 0;
document.getElementById(LDX_ShowingElementID).style.opacity = LDX_ShowingOpacity;
document.getElementById(LDX_ShowingElementID).style.filter = "alpha(opacity=" + LDX_ShowingOpacity + ")";
document.getElementById(LDX_ShowingElementID).style.display = "block";
LDX_ShowingElement();
}
function LDX_ShowingElement() {
if(LDX_ShowingOpacity < 100) {
LDX_ShowingOpacity++;
} else {
LDX_ShowingFinished = true;
}
document.getElementById(LDX_ShowingElementID).style.opacity = LDX_ShowingOpacity / 100;
document.getElementById(LDX_ShowingElementID).style.filter = "alpha(opacity=" + LDX_ShowingOpacity + ")";
if(LDX_ShowingFinished == true) {
if(LDX_ShowingEndFunction != false) {
LDX_ShowingEndFunction();
}
} else {
window.setTimeout(LDX_ShowingElement,10);
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
function fadeBackground(r,g,b,nr,ng,nb,end) {
LDX_r = r;
LDX_g = g;
LDX_b = b;
LDX_nr = nr;
LDX_ng = ng;
LDX_nb = nb;
LDX_EndFade = end;
backgroundFading();
}
function fadingBackground() {
if(LDX_r < LDX_nr) {
LDX_r++;
}
if(LDX_r > LDX_nr) {
LDX_r--;
}
if(LDX_g < LDX_ng) {
LDX_g++;
}
if(LDX_g > LDX_ng) {
LDX_g--;
}
if(LDX_b < LDX_nb) {
LDX_b++;
}
if(LDX_b > LDX_nb) {
LDX_b--;
}
document.body.style.backgroundColor = "rgb(" + LDX_r + "," + LDX_g + "," + LDX_b + ")";
if((LDX_r == LDX_nr) && (LDX_g == LDX_ng) && (LDX_b == LDX_nb)) {
LDX_EndFade();
} else {
window.setTimeout(fadingBackground,10);
}
}
