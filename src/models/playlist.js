let playlist = []


function getAllPlaylist(){
    return playlist;
}

function findIdSong(id){
    let filtered = playlist.filter(song => song.id === parseInt(id))
    
    return filtered
}
function playedSong(id){
    let filtered = playlist.filter(song => song.id === parseInt(id))
    filtered[0].countPlayed += 1
    return filtered;
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

function popularSongs(){
  
    let mostPopular = playlist.sort((a,b)=>{
        
        return b.countPlayed - a.countPlayed
    })
    return mostPopular 
}

module.exports = [getAllPlaylist,playlist,addSong,playedSong,popularSongs,findIdSong];