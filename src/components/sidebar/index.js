import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import Sidebarbutton from './sidebarbutton'
import { MdFavorite, MdSpaceDashboard } from 'react-icons/md'
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa'
import { IoLibrary } from 'react-icons/io5'
import apiClient from '../../spotify'
export default function Sidebar() {
  const [image , setImage] = useState("https://avatars.mds.yandex.net/i?id=b507a2b8d9382967a186c654f1eeaa74-5262078-images-taas-consumers&n=27&h=480&w=480")
  useEffect(()=>{
    apiClient.get("me").then(response =>{
      (response.data.image) ? setImage(response.data.images[0].url):(setImage(image));
      });
  },[])

  return (
    <div className='sidebar-container'>
        <img src={image} className='profile-img' alt='profile'/>
        <div>
          <Sidebarbutton title="Feed" to = "/feed" icon={<MdSpaceDashboard/>} />
            <Sidebarbutton title="Trending" to = "/trending" icon={< FaGripfire/>} />
            <Sidebarbutton title="Player" to = "/player" icon={< FaPlay/>} />
            <Sidebarbutton title="Favorites" to = "/favorites" icon={<MdFavorite/>} />     
            <Sidebarbutton title="Library" to = "/" icon={<IoLibrary/>} />
        </div>  
          <Sidebarbutton title="SignOut" to = "" icon={<FaSignOutAlt/>} />
    </div>
  )
}
