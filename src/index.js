const express = require('express')
const cors = require('cors')
const connection = require('./config/db')
require('dotenv').config()
const multer = require('multer')
const formRouter = require('./route/formRoute')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'));

// form route 
app.use('/form',formRouter)


// uploading the image using multer 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./public")
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage })

app.post('/upload', upload.single('image'), (req, res) => {
    res.status(200).send(JSON.stringify(req.file.filename))
})

// till here 


// here is socket.io code and connection 
app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log('connected to db..')
    } catch (error) {
        console.log(error)
    }
})