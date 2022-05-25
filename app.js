const express = require('express')
const app = express()


app.use(express.json())

app.use('/',express.static("public/home"))
app.use('/webcam',express.static("public/webcamPage"))

const port = process.env.PORT || 5000;

const start = async() =>{
    app.listen(port, () => {
      console.log(`Sercer is listening to port ${port}...`)
    })

}
start()