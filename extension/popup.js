// Adrien Bertrand
// INSE 6130 Projet - Concordia Fall 2014

document.getElementById("resetButton").onclick = function() {
    chrome.extension.sendMessage({ action: "resetEngine" });
    document.getElementById("patternCounter").innerHTML = 0;
    document.getElementById("blacklistCounter").innerHTML = 0;
}

window.onload = function() {
    var background = chrome.extension.getBackgroundPage();
    document.getElementById("patternCounter").innerHTML = background.patternCounter;
    document.getElementById("blacklistCounter").innerHTML = background.blacklistCounter;
}
