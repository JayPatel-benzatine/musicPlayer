import React from 'react'
import './song.css'
import AlbumImage from './albumImage';
import AlbumInfo from './albumInfo';

const index = ({album}) => {
  return (
    <div className="songCard-body flex">
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  )
}

export default index