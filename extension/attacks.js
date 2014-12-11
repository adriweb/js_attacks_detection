// Adrien Bertrand
// INSE 6130 Projet - Concordia Fall 2014

var attacks = {

	"history": {
		"description": "ʜɪsᴛᴏʀʏ sɴɪғғɪɴɢ",
		"patterns": [ "getComputedStyle\\(.*color" ],
		"blacklist": []
	},
	
	"cookie": {
		"description": "ᴄᴏᴏᴋɪᴇ sᴛᴇᴀʟɪɴɢ",
		"patterns": [ "=document\\.cookie" ],
		"blacklist": []
	},
	
	"behavior": {
		"description": "ʙᴇʜᴀᴠɪᴏʀ ᴛʀᴀᴄᴋɪɴɢ",
		"patterns": [ "\\.(mouse|key)(up|down)" ],
		"blacklist": [ "*://*.google-analytics.com/*.js" ]
		// For Google Analytics, that will match anything .js although most of it is /analytics.js or /ga.js (or /urchin.js for old stuff)
	},
	
	"location": {
		"description": "ʟᴏᴄᴀᴛɪᴏɴ ʜɪᴊᴀᴄᴋɪɴɢ",
		"patterns": [ "(document|window)\\.location(\\.href)?(=|\\.replace\\()" ],
		"blacklist": []
	}
	
};
