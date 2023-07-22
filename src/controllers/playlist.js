const { find, create, findById, play, popular } = require("../models/playlist")

module.exports = {
    getAllPlaylist: (req,res) =>{
        const get = find()
        res.send(get);
    },
    addToPlaylist: (req,res)=>{
        const {title,artist,album} = req.body
        const createData = create(title,artist,album)
        res.send(createData);
    },
    play:(req,res) =>{
        const { id } = req.params
        const playThis = play(id)
        res.send(playThis);
       
    },
    getMostPopular:(req,res)=>{
        const mostPopular = popular()
        res.send(mostPopular);
       
    }
}

//CommonJS
//ES6 JS

