let playlist = []


function getPlaylist(){
    return playlist;
}

function addSong(title,artists,album){
    playlist.push({
        id:playlist.length+1,
        title:title,
        artists:artists,
        album:album,
        countPlayed:0
    })
    return playlist
}

function findById(id){

}

function playedSong(id){
    let getSongId = playlist.filter(song => song.id === parseInt(id))
    return getSongId;
}

function playedSong(id){
    let getSongId = playlist.filter(song => song.id === parseInt(id)) 
    getSongId[0].countPlayed += 1
    return getSongId;
}

function popularSongs(){
    
  
    let getmostPopular = playlist.sort((a,b)=>{
        
        return b.countPlayed - a.countPlayed
    })
}

module.exports = [getPlaylist,playlist,addSong,playedSong,popularSongs];