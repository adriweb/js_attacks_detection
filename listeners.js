// Adrien Bertrand
// INSE 6130 Projet - Concordia Fall 2014

chrome.extension.onMessage.addListener( function(request, sender) {
	var action = request.action;
	switch (action) {
		case "gotSource":
			pageSource = request.source;
			logDebugMessage("Got page source (" + pageSource.length + " chars). Scanning...");
			pageSource = pageSource.replace(/\s+/g, '').replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:([\s;])+\/\/(?:.*)$)/gm, ''); // remove spaces and comments
			for (var key in attacks) {
				var att = attacks[key];
				var detected = false;
				logDebugMessage("    Will look for patterns of : " + att["description"]);
				for (var idx in att["patterns"]) {
					var pattern = att["patterns"][idx];
					logDebugMessage("        Looking for pattern : \"" + pattern + "\"");
					if ((pageSource.match(new RegExp(pattern))||[]).length)
						detected = true;
				}
				if (detected) {
					globalDetectionCounter++;
					chrome.browserAction.setBadgeText({text: ""+globalDetectionCounter});
					logWarning("Potential attack! A " + att["description"] + " pattern has been found on this page!");
				}
			}
			break;
		case "resetEngine":
			resetEngine();
			break;
	}
});

chrome.tabs.onUpdated.addListener( function(tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete' && tab.active) {
		logDebugMessage("Active tab loading complete, requesting source code...");
		getSource_wrapper();
	}
});