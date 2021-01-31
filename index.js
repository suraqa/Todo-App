const express = require("express")
const todoController = require('./controllers/todoController')
const app = express();


app.set("view engine", "ejs")
app.use(express.static("./"))

todoController(app);



app.listen(3000)