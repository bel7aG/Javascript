function changeImageSize(){
    document.getElementById("cube").style.height = "15%";
    document.getElementById("cube").style.width = "15%";
    document.getElementById("cube").style.backgroundColor = "red";
    document.getElementById("cube").style.borderRadius = "20px";

    document.getElementById("cube").style.borderRadius = "100px";
}

function changeMe() {
    document.getElementById("cube").style.background = "grey";
    document.getElementById("cube").style.opacity = ".3";

}

function changeColor(){
    document.getElementById("h1Style").style.color = "red";
    document.getElementById("h1Style").firstChild.nodeValue = "Exited";
    document.getElementById("h1Style").style.fontSize = "30px";
    document.getElementById("h1Style").style.cursor = "crosshair";
    return true;
}

function changeAgain(){
    document.getElementById("h1Style").style.color = "grey";
    document.getElementById("h1Style").firstChild.nodeValue = "This is BORED WEIRD";
    return true;
}

function wannaCheckMouseMoveHere(){
    document.getElementById("cube").style.width = "30%";
}

function showPara(){
    document.getElementById("pOne").style.visibility = (document.F.mercedes.checked)? "visible" : "hidden";
    document.getElementById("pTwo").style.visibility = (document.F.bmw.checked)? "visible" : "hidden";
    document.getElementById("pThree").style.visibility = (document.F.corvette.checked)? "visible" : "hidden";
}

function changeThis(){
    document.getElementById("changeParagraph").innerHTML = "Holly Shit this Shit  Changed"
    document.getElementById("changeParagraph").style.color = "grey";
}


document.getElementById("myButton").onclick = function(){
    alert("i alert this Shit");
}









































s
