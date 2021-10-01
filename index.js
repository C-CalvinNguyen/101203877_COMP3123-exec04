// Chi Calvin Nguyen 101203877

let express = require('express')
let app = express()

app.get('/hello', (req, res) => {
    res.send("<h1>Hello Express JS</h1>")
})

app.get('/user', (req, res) => {
    let firstname = req.query.fname
    let lastname = req.query.lname

    let output = {
        firstname, lastname
    }

    res.send(JSON.stringify(output))
})

app.post("/user/:fname/:lname", (req, res) => {
    let f_Name = req.params.fname
    let l_Name = req.params.lname

    let output = {
        firstname: f_Name,
        lastname: l_Name
    }

    res.send(JSON.stringify(output))
})

let server = app.listen(8081, () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`${host} : ${port}`)
})