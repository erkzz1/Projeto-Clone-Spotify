import { artistArray } from '../../FRONT_END/src/assets/database/artists.js'
import { songsArray } from '../../FRONT_END/src/assets/database/songs.js'
import { db } from './connect.js'

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj }
  delete newArtistObj.id

  return newArtistObj
})

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj }
  delete newSongObj.id

  return newSongObj
})

const resSongs = await db.collection('songs').insertMany(newSongsArray)
const resArtist = await db.collection('artists').insertMany(newArtistArray)

console.log(resSongs)
console.log(resArtist)
