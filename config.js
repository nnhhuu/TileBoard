
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//var Orientation =  window.outerWidth > window.outerHeight ? 90 : 0;
var Orientation =  window.outerWidth > window.outerHeight ? MENU_POSITIONS.BOTTON : MENU_POSITIONS.LEFT;

//     state: function () {
//       CONFIG.menuPosition = window.outerWidth > window.outerHeight ? MENU_POSITIONS.BOTTON : MENU_POSITIONS.LEFT;
//       return  false;
//     },


if(isMobile) {    // mobile
      var CONFIG = {
       customTheme: CUSTOM_THEMES.MOBILE, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
       transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
       entitySize: ENTITY_SIZES.SMALL, //NORMAL, //SMALL, BIG are available

       //ignoreErrors: true,

       tileSize: 100,
       tileMargin: 5,
       groupMargin: 5,

       serverUrl: "http://nnhhuu.ddns.net:8123",
       wsUrl: "ws://nnhhuu.ddns.net:8123/api/websocket",
       password: "NelsoN01",
       authToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDA5MTc2MjIsImlzcyI6IjdhZGUzZWJmMzAwMjRkMjliMDJkNGMyMmU1MjU0Mjk1IiwiZXhwIjoxODU2Mjc3NjIyfQ.MVr6KKarLx8DtQD92TBLT6R9PJ6yTwLBOIQyJUy3cYU',
       //passwordType: PASSWORD_TYPES.PROMPT_AND_SAVE,
       passwordType: PASSWORD_TYPES.MANUAL,
       //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
       debug: false, // Prints entities and state change info to the console.
       doorEntryTimeout: 30,

       timeFormat: 24,
       menuPosition: Orientation, // MENU_POSITIONS.BOTTOM,  // LEFT, // or BOTTOM
       hideScrollbar: true, // horizontal scrollbar
       groupsAlign: GROUP_ALIGNS.VERTICALLY, //HORIZONTALLY, // or VERTICALLY

       header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
         styles: {
           //padding: '20x 20px 0 20px',
           margin: '5px 5px 5px',
           fontSize: '18px'
         },
         right: [
           {
             type: HEADER_ITEMS.WEATHER,
             styles: {
               margin: '3px 3px 3px'
             },
             icon: '&sensor.dark_sky_icon.state',
             icons: {
               'clear-day': 'clear',
               'clear-night': 'nt-clear',
               'cloudy': 'cloudy',
               'rain': 'rain',
               'sleet': 'sleet',
               'snow': 'snow',
               'wind': 'hazy',
               'fog': 'fog',
               'partly-cloudy-day': 'partlycloudy',
               'partly-cloudy-night': 'nt-partlycloudy'
             },
             fields: {
               summary: '&sensor.dark_sky_summary.state',
               temperature: '&sensor.dark_sky_temperature.state',
               temperatureUnit: '&sensor.dark_sky_temperature.attributes.unit_of_measurement',
             }
           }
         ],
         left: [
           {
             type: HEADER_ITEMS.DATETIME,
             dateFormat: 'EEEE, LLLL dd', //https://docs.angularjs.org/api/ng/filter/date
           }
         ]
       },

       // next fields are optional
       events: [
         /* Example: Start the screensaver on a tablet with Fully Kiosk Browser */
         {  command: 'screen_off',

           /* action: Function to execute when the command is received
            * The variable e contains the full event_data from HomeAssistant
            */
           action: function(e) {
             window.showScreensaver();
             /*if (typeof fully !== undefined) {
                 fully.startScreensaver();
             }*/
           },
         },

         /* Example: End the screensaver and make sure Fully Kiosk Browser is in
          * the foreground.
          */
         { command: 'screen_on',
           action: function(e) {
             window.hideScreensaver();
             /*if (typeof fully !== undefined) {
               fully.stopScreensaver();
               fully.bringToForeground();
             }*/
           },
         },

         /* Example: Play a sound file
          * Include sound_url in the event_data from Home Assistant
          */
         { command: 'play_sound',
           action: function(e) {
             playSound(e.sound_url);
           }
         },

         /* Example: Open a specific TileBoard page
          * Include a page field in the event_data from Home Assistant
          * that matches the id: of a page in the TileBoard CONFIG
          */
         { command: 'open_page',
           action: function(e) {

             window.hideScreensaver();
             window.openPage(CONFIG.pages[e.page]);
           }
         },

         { command: 'notify',
           action: function(e) {
              Noty.addObject(e);
            },
          }

       ],

       pages: [
          p_mobile,
          p_media,
          p_sensors,
          p_lights,
          p_switches,
          p_weather_m,
          p_main_m,
       ]
      }
}
else {   // no Mobile
      var CONFIG = {
         customTheme: null, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
         transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
         entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available

         //ignoreErrors: true,

         tileSize: 150,
         tileMargin: 6,

         serverUrl: "http://nnhhuu.ddns.net:8123",
         wsUrl: "ws://nnhhuu.ddns.net:8123/api/websocket",
         password: "NelsoN01",
         authToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDA5MTc2MjIsImlzcyI6IjdhZGUzZWJmMzAwMjRkMjliMDJkNGMyMmU1MjU0Mjk1IiwiZXhwIjoxODU2Mjc3NjIyfQ.MVr6KKarLx8DtQD92TBLT6R9PJ6yTwLBOIQyJUy3cYU',
         //passwordType: PASSWORD_TYPES.PROMPT_AND_SAVE,
         passwordType: PASSWORD_TYPES.MANUAL,
         //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
         debug: false, // Prints entities and state change info to the console.
         doorEntryTimeout: 30,

         timeFormat: 24,
         menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
         hideScrollbar: false, // horizontal scrollbar
         groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // or VERTICALLY

         header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
           styles: {
             padding: '20x 20px 0 20px',
             fontSize: '18px'
           },
           right: [
             {
               type: HEADER_ITEMS.WEATHER,
               styles: {
                 margin: '10px 10px 10px'
               },
               icon: '&sensor.dark_sky_icon.state',
               icons: {
                 'clear-day': 'clear',
                 'clear-night': 'nt-clear',
                 'cloudy': 'cloudy',
                 'rain': 'rain',
                 'sleet': 'sleet',
                 'snow': 'snow',
                 'wind': 'hazy',
                 'fog': 'fog',
                 'partly-cloudy-day': 'partlycloudy',
                 'partly-cloudy-night': 'nt-partlycloudy'
               },
               fields: {
                 summary: '&sensor.dark_sky_summary.state',
                 temperature: '&sensor.dark_sky_temperature.state',
                 temperatureUnit: '&sensor.dark_sky_temperature.attributes.unit_of_measurement',
               }
             }
           ],
           left: [
             {
               type: HEADER_ITEMS.DATETIME,
               dateFormat: 'EEEE, LLLL dd', //https://docs.angularjs.org/api/ng/filter/date
             }
           ]
         },

         screensaver: {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
           timeout: 180, // after 5 mins of inactive
           slidesTimeout: 10, // 10s for one slide
           styles: { fontSize: '40px' },

           leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }], // put datetime to the left-bottom of screensaver

           rightTop: [
             {
               type: HEADER_ITEMS.WEATHER,
               styles: {
                 margin: '10px 10px 10px'
               },
               icon: '&sensor.dark_sky_icon.state',
               icons: {
                 'clear-day': 'clear',
                 'clear-night': 'nt-clear',
                 'cloudy': 'cloudy',
                 'rain': 'rain',
                 'sleet': 'sleet',
                 'snow': 'snow',
                 'wind': 'hazy',
                 'fog': 'fog',
                 'partly-cloudy-day': 'partlycloudy',
                 'partly-cloudy-night': 'nt-partlycloudy'
               },
               fields: {
                 summary: '&sensor.dark_sky_summary.state',
                 temperature: '&sensor.dark_sky_temperature.state',
                 temperatureUnit: '&sensor.dark_sky_temperature.attributes.unit_of_measurement',
               }
             }
           ],

           rightBottom: [
             {
               type: SCREENSAVER_ITEMS.CUSTOM_HTML,
               html: '<b>Alram : </b>',
               styles: { fontSize: '40px' }
             }],

             slides: [
               { bg: 'images/DSC_3868.JPG' },
               { bg: 'images/DSC_2735.JPG' },
               { bg: 'images/DSC_2702.JPG' },
               { bg: 'images/DSC_3889.JPG' },
               { bg: 'images/DSC_1709.JPG' }
             ]
           },

         // next fields are optional
         events: [
           /* Example: Start the screensaver on a tablet with Fully Kiosk Browser */
           {  command: 'screen_off',

             /* action: Function to execute when the command is received
              * The variable e contains the full event_data from HomeAssistant
              */
             action: function(e) {
               window.showScreensaver();
               /*if (typeof fully !== undefined) {
                   fully.startScreensaver();
               }*/
             },
           },

           /* Example: End the screensaver and make sure Fully Kiosk Browser is in
            * the foreground.
            */
           { command: 'screen_on',
             action: function(e) {
               window.hideScreensaver();
               /*if (typeof fully !== undefined) {
                 fully.stopScreensaver();
                 fully.bringToForeground();
               }*/
             },
           },

           /* Example: Play a sound file
            * Include sound_url in the event_data from Home Assistant
            */
           { command: 'play_sound',
             action: function(e) {
               playSound(e.sound_url);
             }
           },

           /* Example: Open a specific TileBoard page
            * Include a page field in the event_data from Home Assistant
            * that matches the id: of a page in the TileBoard CONFIG
            */
           { command: 'open_page',
             action: function(e) {

               window.hideScreensaver();
               window.openPage(CONFIG.pages[e.page]);
             }
           },

           { command: 'notify',
             action: function(e) {
                Noty.addObject(e);
              },
            }

         ],

         pages: [
            p_main,
            p_media,
            p_sensors,
            p_lights,
            p_switches,
            p_weather,
            p_mobile,
         ]
      }
}
