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
        "patterns": [ "\\.(mouse|key)(up|down|over)" ],
        "blacklist": [  "*://*.google-analytics.com/*",                                             /*  Google Analytics stuff. Mostly analytics.js, ga.js, urchin.js... */
                        "*://*.quantserve.com/*.js",                                                /*  quantserve  */
                        "*://cdn.optimizely.com/*.js",                                              /*  optimizely  */
                        "*://*/mouseflow.js", "*://cdn.mouseflow.com/projects/*",                   /*  mouseflow   */
                        "*://pixel.facebook.com/*",                                                 /*  Facebook    */
                        "*://cdn.segment.com/analytics*",                                           /*  segment     */
                        "*://cdn.clicktale.net/*", "*://clicktalecdn.sslcs.cdngc.net/www/*",        /*  clicktale   */
                        "*://dnn506yrbagrg.cloudfront.net/pages/scripts/*",                         /*  crazyegg    */
                        "*://*/trak.io.min.js",                                                     /*  trak.io     */
                        "*://*/piwik.js",                                                           /*  piwik       */
                        "*://cdn.heapanalytics.com/js/heap.js",                                     /*  heap        */
                        "*://static.chartbeat.com/js/chartbeat.js",                                 /*  chartbeat   */
                        "*://i.kissmetrics.com/i.js", "*://doug1izaerwt3.cloudfront.net/*.js",      /*  kissmetrics */
                        "*://d1z2jf7jlzjs58.cloudfront.net/*.js", "*://static.parsely.com/*.js",    /*  parsely     */
                        "*://static.getclicky.com/js*",                                             /*  getclicky   */
                        "*://*.woopra.com/rest/*",                                                  /*  woopra      */
                        "*://api.calq.io/lib/js/core-1.0.js",                                       /*  calq.io     */
                        "*://api.indicative.com/service/*",                                         /*  indicative  */
                        "*://cdn.mxpnl.com/libs/*",                                                 /*  mixpanel    */
                        "*://d35tca7vmefkrc.cloudfront.net/*",                                      /*  foxmetrics  */
                        "*://*.gaug.es/track.js",                                                   /*  gaug.es     */
                        "*://*/s_code.js", "*://*/omniture.js",                                     /*  omniture... */
                        "*://*/*track*.js", "*://*/*track.js", "*://*/pix.gif"                      /*  *generic*   */
                    ]
    },
    
    "location": {
        "description": "ʟᴏᴄᴀᴛɪᴏɴ ʜɪᴊᴀᴄᴋɪɴɢ",
        "patterns": [ "(document|window)\\.location(\\.href)?(=|\\.replace\\()" ],
        "blacklist": []
    }

    // This is just a taste of the most popular stuff. For a much more complete list, take a look at 
    // https://easylist-downloads.adblockplus.org/easyprivacy.txt which is the list used by AdBlock Plus.
    
};
