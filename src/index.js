let express = require('express');
let app = express();
let personRoute = require('./routes/playlist');
let artistRoute = require('./routes/artist')
let path = require('path')

let bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use((req, res, next)=>{
    console.log(`${new Date().toString()}=>${req.originalUrl}`);
    next();
})
app.use(personRoute);
app.use(artistRoute);
app.use(express.static('public'));

//handler for 404 err
app.use((req,res,next)=>{
    res.status(404).send('Error')
})

//handler for err 500
app.use((err, req, res, next)=>{
    console.error(err.stack)

    res.sendFile(path.join(__dirname, '../public/500.html'))
})


const PORT=process.env.PORT || 3090;
app.listen(PORT, ()=> console.info(`Playlist is created/edited on ${PORT}`)); 