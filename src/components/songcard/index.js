import React from 'react'
import './songcard.css'
import Albumimage from './albumimage'
import Albuminfo from './albuminfo'

export default function SongCard({album}) {
  return (
    <div className='songCard-body'>
      <Albumimage url= {album?.images[0]?.url}/>
      <Albuminfo album={album}/>
    </div>
  )
}
