const {getPlaylist, addSong, getSong, playSong, mostPlayed} = require('../models/playlist');


module.exports = {
    getPlaylist(req, res) {
        const get = getPlaylist();
        
        res.send(get);
    },

    addSong(req, res) {
        const { title, artists, album } = req.body;
        const add = addSong(title, artists, album);
        
        res.send(add);
    },

    getSong(req, res) {
        const {id} = req.params;
        const song = getSong(id);
        
        res.send(song);
    },

    playSong(req, res) {
        const {id} = req.params;
        const play = playSong(id);

        res.send(play);
    }
}