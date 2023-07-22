const express = require('express');
const app = express();
const playlistRouter = require('./router/playlist');

app.use(express.json())

app.use('/playlist',playlistRouter);

app.listen(process.env.PORT, ()=>{
    console.log(`Listening server port ${process.env.PORT}`);
});

