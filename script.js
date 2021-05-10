var myLI = document.getElementsByTagName("LI");
var i;
for(i = 0; i <myLI.length; i++){
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    myLI[i].appendChild(span);
}
