const express = require('express');
const app = express();
const playlistRouter = require('./src/router/playlist');

app.use(express.json())

app.use('/playlist',playlistRouter);

const port = 3000;
app.listen(port, ()=>{
    console.log(`Listening server port ${port}`);
});

