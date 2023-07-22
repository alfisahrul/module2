const express = require('express');
const Router = express.Router();

const PlaylistControllers = require('../controllers/playlistControllers');

Router.get('/', PlaylistControllers.getAll);
Router.get('/popular', PlaylistControllers.getMostPlayedSong);
Router.put('./:id', PlaylistControllers.getPlayedSong);
Router.post('/', PlaylistControllers.addSongToPlaylist);

module.exports = Router;
