const express = require('express')
const app = express()
const port = process.env.PORT||3000
app.use(express.static('huruku'))
app.get('/', (req, res) => res.sendFile(__dirname + '/huruku/html/index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))