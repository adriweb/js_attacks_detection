// Adrien Bertrand
// INSE 6130 Projet - Concordia Fall 2014

chrome.extension.sendMessage({
    action: "gotSource",
    source: document.documentElement.innerHTML.replace(/\s+/g, '') // remove spaces
});