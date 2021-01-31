// const data = [
//     {
//         todo: "Upgrade JS"
//     },
//     {
//         todo: "Learn node"
//     },
//     {
//         todo: "Eat dinner"
//     }
// ]



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
    // todoRef.child("asdasdsad").remove();
}, err => {
    console.log(err.message)
})

// ref.on("value", snapshot => {
//   console.log(snapshot.val());
// });





module.exports = (app) => {

    app.get("/todo", (req, res) => {
        res.render("index", { todo: data })
    })

    app.post("/todo", encodedUrl, (req, res) => {
        // data.push(req.body)
        // console.log(data)

        // console.log(req.body.todo)
        // ref.push({
        //     item: req.body.todo
        // })
        // ref.child(`todo_${uid++}`).setValue({
        //     item: req.body.todo
        // })
        // ref.on("child_added", snapshot => {
        //     console.log(snapshot.val())
        // })
        // todoRef.push({
        //     item: req.body.todo
        // })
        todoRef.push({
            item: req.body.todo
        })

        res.render("index", { todo: data })
    })

}

