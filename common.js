// Adrien Bertrand
// INSE 6130 Projet - Concordia Fall 2014


///////////////////////////////////////////
/////////////////  UTILS  /////////////////
///////////////////////////////////////////

var debugMode = true;
function logDebugMessage(str) { if (debugMode) console.debug("%c[debug] "+str, "color: darkgrey; font-weight: bold;"); }
function logExtensionMessage(str) { console.log("%c"+str, "font-weight: bold;"); }
function logOK(str,indent) { if (typeof indent === "undefined") indent=""; console.log(indent+"%c✓ "+str, "color: green;"); }
function logInfo(str,indent) { if (typeof indent === "undefined") indent=""; console.log(indent+"%c[info] "+str, "color: blue;"); }
function logWarning(str,indent) { if (typeof indent === "undefined") indent=""; console.log(indent+"%c[warning] "+str, "color: orange;"); }
function logError(str,indent) { if (typeof indent === "undefined") indent=""; console.log(indent+"%c[error] "+str, "color: red;"); }

logExtensionMessage("--------------- Starting the detection engine ---------------");


///////////////////////////////////////////
////////////////  GLOBALS  ////////////////
///////////////////////////////////////////

var currentTab, globalDetectionCounter, pageSource;

function resetEngine()
{
	currentTab = null;
	globalDetectionCounter = 0;
	pageSource = "";
	chrome.browserAction.setBadgeText({text: ""});
	logExtensionMessage("Global variables reseted");
}
resetEngine();


///////////////////////////////////////////
///////////////  FUNCTIONS  ///////////////
///////////////////////////////////////////

function addAttackBlacklistHandler(attack)
{
	if (attack["blacklist"].length > 0) {
		chrome.webRequest.onBeforeRequest.addListener(
			function(info) {
				logWarning("Intercepted a request to a blacklisted domain providing " + attack["description"] + "!")
				logInfo("Resource requested: " + info.url, "    ");
				globalDetectionCounter++;
				chrome.browserAction.setBadgeText({text: ""+globalDetectionCounter});
				//return {redirectUrl: loldogs[i]};
			},
			{
				urls: attack["blacklist"],
			},
			["blocking"]
		);
		logOK("Blacklist-based detection ready.", "    ");
	} else {
		logWarning("The database's blacklist for this attack is empty!", "    ");
	}
}

function getSource_wrapper() {
	var tabURL = "";
	chrome.tabs.getSelected(null, function(tab) {
		tabURL = tab.url;
		if (tabURL.length && tabURL.indexOf("chrome://") == -1 && tabURL.indexOf("chrome-devtools://") == -1 && tabURL.indexOf("view-source:") == -1) {
			logDebugMessage("Getting source of current tab : " + tabURL);
			chrome.tabs.executeScript(null, { file: "getPageSource.js", runAt: 'document_end' }, function() {} );
		}
	});
}
