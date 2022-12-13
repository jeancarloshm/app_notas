const database = require('./database');
const notasDb = require ('./notes.json');

const loadDb = async()=>{
    database.insertMany(notasDb);
    console.log("Successfully!");
    console.log("Reload your page!");
}

loadDb();