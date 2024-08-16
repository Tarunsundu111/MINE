import React from 'react'
import './albumimage.css'

export default function Albumimage({url}) {    
    return (
        <div className="albumImage flex">
          <img src={url} alt="album art" className="albumImage-art" />
          <div className="albumImage-shadow">
            <img src={url} alt="shadow" className="albumImage-shadow" />
          </div>
        </div>
      );
}
