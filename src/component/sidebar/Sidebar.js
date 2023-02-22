import React, { useEffect, useState } from 'react'
import './sidebar.css'
import apiClient from "../../Spotify";
import SidebarBtn from './SidebarBtn';
// import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
// import { MdSpaceDashboard } from "react-icons/md";
// import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU");


    useEffect(() => {
        apiClient.get("me").then((response) => {
            setImage(response.data.images[0].url);
        });
    }, []);

    return (
        <div className='sidebar-container'>
            <img src={image} className="profile-img" alt="profile" />
            <div>
                {/* <SidebarBtn title="Feed" to="/feed" icon={<MdSpaceDashboard />} /> */}
                {/* <SidebarBtn title="Trending" to="/trending" icon={<FaGripfire />} /> */}
                <SidebarBtn title="Player" to="/player" icon={<FaPlay />} />
                {/* <SidebarBtn
                    title="Favorites"
                    to="/favorite"
                    icon={<MdFavorite />}
                /> */}
                <SidebarBtn title="Library" to="/" icon={<IoLibrary />} />
            </div>
            <SidebarBtn title="Sign-Out" to="" icon={<FaSignOutAlt />} />
        </div>
    )
}

export default Sidebar