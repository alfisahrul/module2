const express = require('express');
const playlist = require('./src/models/playlist');
const app = express();

const playlistRoutes = require('./route/playlistRoute');

app.use('/playlist',playlistRoutes);



app.get ('/',(req,res) => {
    res.send("BERHASIL")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listening server port ${process.env.PORT}`);
});

