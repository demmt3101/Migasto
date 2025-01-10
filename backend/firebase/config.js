const admin = require("firebase-admin");
const serviceAccount = require("./migasto-4d831-firebase-adminsdk-3z8iq-dc39c410ea.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://console.firebase.google.com/u/0/project/migasto-4d831/firestore/databases/-default-/data?hl=es-419",
});

const db = admin.firestore();
module.exports = db;
