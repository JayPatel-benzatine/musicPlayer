import React, { useEffect, useState } from 'react'
import './home.css'
import { Route, Routes} from 'react-router-dom'
import Favorites from '../favroiter/Favorites'
import Library from '../library/Library'
import Feed from '../feed/Feed'
import Player from '../player/Player'
import Trending from '../trending/Trending'
import Sidebar from '../../component/sidebar/Sidebar'
import Login from '../../screens/auth/Login'
import { setClientToken } from '../../Spotify'

const Home = () => {
    const [token, setToken] = useState("");
    
    useEffect(() => {
        const token  = window.localStorage.getItem("token");
        const hash = window.location.hash;
        window.location.hash = "";
        if (!token && hash) {
            const _token = hash.split("&")[0].split("=")[1];
            window.localStorage.setItem("token", _token);
            setToken(_token);
            setClientToken(_token);
        } else {
            setToken(token);
            setClientToken(token);
        }
    }, []);

    return (
        !token ? (
            <Login />
        ) : (
            <>
                <div className="main-body">
                    <Sidebar />
                    <Routes>
                        <Route path='/' element={<Library />} />
                        <Route path='/feed' element={<Feed />} />
                        <Route path='/trending' element={<Trending />} />
                        <Route path='/player' element={<Player />} />
                        <Route path='/favorite' element={<Favorites />} />
                        <Route path='*' element={<h1>Page not found</h1>} />
                    </Routes>
                </div>
            </>
        )
    )
}

export default Home