import React from 'react'

const FavCard = props => {
    return (
        <div className="fav-card">
            <h5>{props.favorite.artist_name}</h5>
            <img src= {props.favorite.img}></img>
            <button onClick={event => props.dltFavorite(props.favorite)}>Delete Favorite</button>
        </div>
    )
}



export default FavCard
