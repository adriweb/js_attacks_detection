// Adrien Bertrand
// INSE 6130 Projet - Concordia Fall 2014

for (var att in attacks) {
	logInfo("Setting up " + attacks[att]["description"] + " attacks detection...");
	addAttackBlacklistHandler(attacks[att]);
	
	if (attacks[att]["patterns"].length)
		logOK("Pattern-based detection will take place when a page finishes loading.", "    ");
	else
		logWarning("The database's patterns for this attack is empty!", "    ");
}

logExtensionMessage("------------- Detection engine loaded and ready -------------");
