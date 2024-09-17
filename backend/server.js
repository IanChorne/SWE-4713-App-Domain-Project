//This is the api that is the main bridge between the front and back ends.
//It is currently populated with test data and an app.listen function that won't be necessary in the final product.

const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
})

app.listen(5000, () => { console.log("Server started on port 5000")})