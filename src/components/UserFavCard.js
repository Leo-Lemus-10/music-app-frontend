import React from 'react'


const UserFavCard = props => {
    return (
        <div>
            <h5>{props.favorite.artist_name}</h5>
            <img src= {props.favorite.img}></img>
        </div>
    )
}

export default UserFavCard
