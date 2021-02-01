const bodyParser = require("body-parser")
const encodedUrl = bodyParser.urlencoded({ extended: false })

let todos = {};

const admin = require("firebase-admin");
const serviceAccount = require("../todo-app-40948-firebase-adminsdk-zzafr-fee4ead95d.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://todo-app-40948-default-rtdb.firebaseio.com/"
})
const db = admin.database();
const todoRef = db.ref(`/todos/`);

let flag = true;

if(flag) {
    todoRef.on("value", snapShot => {
        todos = snapShot.val();
        console.log(todos)
    }, err => {
        console.log(err.message)
    })

}








module.exports = (app) => {

    app.get("/todo", (req, res) => {
        flag = true;
        res.render("index", { todo: todos })
    })

    app.post("/todo", encodedUrl, (req, res) => {
        flag = true;
        todoRef.push({
            item: req.body.todo
        })
        res.render("index", { todo: todos })
    })

    app.delete("/todo", (req, res) => {
        flag = false;
        let val1, val2;
        for(let key in todos) {
            if(todos.hasOwnProperty(key)) {
                val1 = todos[key].item.toString().replace(/ /g,"-");
                val2 = req.query.item
                if(val1 === val2) {
                    todoRef.child(key).remove();
                    // console.log(`Delete console ${JSON.stringify(todos)}`)
                    // console.log(todos)
                    // console.log(key)
                }
            }
        }
        // res.render("index", { todo: todos });
        res.end()
    });

}


