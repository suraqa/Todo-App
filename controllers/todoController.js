const bodyParser = require("body-parser")
const encodedUrl = bodyParser.urlencoded({ extended: false })

let data = {};

const admin = require("firebase-admin");
const serviceAccount = require("../todo-app-40948-firebase-adminsdk-zzafr-fee4ead95d.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://todo-app-40948-default-rtdb.firebaseio.com/"
})
const db = admin.database();
const todoRef = db.ref(`todos`);

todoRef.on("value", snapShot => {
    data = snapShot.val();
    console.log(data)
}, err => {
    console.log(err.message)
})






module.exports = (app) => {

    app.get("/todo", (req, res) => {
        res.render("index", { todo: data })
    })

    app.post("/todo", encodedUrl, (req, res) => {
        todoRef.push({
            item: req.body.todo
        })
        res.render("index", { todo: data })
    })

    app.delete("/todo", (req, res) => {
        let val1, val2;
        for(let key in data) {
            if(data.hasOwnProperty(key)) {
                val1 = data[key].item.toString().replace(/ /g,"-");
                val2 = req.query.item
                if(val1 === val2) {
                    delete data[key];
                    todoRef.child(key).remove();
                    res.render("index", { todo: data });
                }
            }
        }
    });

}

