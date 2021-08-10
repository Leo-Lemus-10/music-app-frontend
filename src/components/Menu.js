import React from 'react'
import { useHistory } from 'react-router';


const Menu = props => {

    let history = useHistory()
    const joinArtists = () => {
        props.fetchLists()
        history.push('/artists')
    }
    const joinFavs = () => {
        props.fetchLists()
        
        history.push('/favs')
    }
    const joinCom = () => {
        props.fetchLists()
        history.push('/community')
    }


    return (
        <div className = "menu">
            <h3>Welcome {props.user.username}</h3>
            <div className="menu-buttons">
                <button onClick={joinArtists}>Artists</button>
                <button onClick={joinFavs}>Favorites</button>
                <button onClick={joinCom}>Community</button>
            </div>
        </div>
    )
}


export default Menu
