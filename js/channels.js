
var science = {
    name: "#Science",
    createdOn: new Date(2016, 03, 01), /* month 0 is jan. */
    createdBy: "minus.plus.yummy",
    starred: false,
    expiresIn: 100,
    messageCount: 999,
    messages: [{text:'science 1', 
                own: true, 
                expiresOn: Date.now() + 10 * 60 * 1000, 
                createdOn: Date(2018,04,04),
                createdBy:'shelf.jetted.purple', 
                latitude: 48.249586,
                longitude: 11.63443
               },
               {text: 'science 2', 
                own: false, 
                expiresOn: Date.now() + 15 * 60 * 1000, 
                createdOn: Date(2018,04,04),
                createdBy:'shelf.jetted.purple', 
                latitude: 48.249586,
                longitude: 11.63443}]           // #10 #message s property in #chl object
};

var art = {
    name: "#Art",
    createdOn: new Date(2016, 03, 02), /* month 0 is jan. */
    createdBy: "cheeses.yard.applies",
    starred: true,
    expiresIn: 60,
    messageCount: 5,
    messages : []           // #10 #message s property in #chl object

};

var literature = {
    name: "#Literature",
    createdOn: new Date(2016, 08, 30), /* month 0 is jan. */
    createdBy: "lodge.bits.fake",
    starred: false,
    expiresIn: 1,
    messageCount: 10351,
    messages : []           // #10 #message s property in #chl object

};

var music = {
    name: "#Music",
    createdOn: new Date(2016, 08, 28), /* month 0 is jan. */
    createdBy: "snipped.atom.grid",
    starred: true,
    expiresIn: 30003,
    messageCount: 2424,
    messages : [{text:'music 1', 
                own: true, 
                expiresOn: Date.now() + 10 * 60 * 1000, 
                createdOn: Date(2018,04,04),
                createdBy:'shelf.jetted.purple', 
                latitude: 48.249586,
                longitude: 11.63443
               },
               {text: 'music 2', 
                own: false, 
                expiresOn: Date.now() + 15 * 60 * 1000, 
                createdOn: Date(2018,04,04),
                createdBy:'shelf.jetted.purple', 
                latitude: 48.249586,
                longitude: 11.63443}]            // #10 #message s property in #chl object

};

var histor = {
    name: "#History",
    createdOn: new Date(2016, 08, 25), /* month 0 is jan. */
    createdBy: "vocally.clearly.crawled",
    starred: false,
    expiresIn: 60,
    messageCount: 321,
    messages : []           // #10 #message s property in #chl object

};