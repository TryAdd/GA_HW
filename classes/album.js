// Create a new file in your Classes folder called Albums.js : done
// Create a RecordAlbums Class - Lab done
// It should have the following properties...
// artistName(string)/
// albumName(string)/
// songs (array of strings)
// currentSong (string from array)
// It should have the following methods...
// nextSong(method), which prints out its result
// previousSong(method), which prints out its result
// Bonus
// Create a “getter” and “setter” methods for retrieving and updating
//  artistName, albumName, and songs.

class RecordAlbums{
    constructor(artistName, albumName, songs=[], currentSong){
    this.artistName =  artistName     
    this.albumName = albumName
    this.songs =  songs
    this.currentSong = currentSong
    }
    nextSong(){
        let index =this.songs.indexOf(this.currentSong)+1
        return this.songs[index];
        
        
    }
    previousSong(){
        let index2 = this.songs.indexOf(this.currentSong)-1 
        return this.songs[index2];

    }

}
// const rec = new RecordAlbums
const a = new RecordAlbums('ali',"ahmed",['m7md','a7lam' ,'mosa','1','2'], 'a7lam')
console.log(a)

// RecordAlbums.nextSong()