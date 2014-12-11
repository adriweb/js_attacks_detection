// Adrien Bertrand
// INSE 6130 Projet - Concordia Fall 2014

document.getElementById("resetButton").onclick = function() {
	chrome.extension.sendMessage({ action: "resetEngine" });
}