const { getAllPlaylist,addSong,playedSong,popularSongs,findIdSong } = require("../models/playlist")


module.exports = {
    getAll(req, res) {
        const get = getAllPlaylist();
        res.send(get);
    },

    addSongToPlaylist(req, res) {
        const { title, artists, album } = req.body;
        const add = addSong(title, artists, album);
        
        res.send(add);
    },

    getPlayedSong(req, res) {
        const {id} = req.params;
        const song = playedSong(id);
        
        res.send(song);
    },

    getMostPlayedSong(req, res) {
        
        const play = popularSongs(id);

        res.send(play);
    }
}