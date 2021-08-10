import React from 'react'


const ArtistCard = props => {
    return (
        <div className="artist-card">
            <h5>{props.artist.name}</h5>
            <img src= {props.artist.picture}></img>
            <iframe src={props.artist.spotify_link} width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <button onClick= {event => props.addFavorite(props.artist)}>Favorite</button>
        </div>
    )
}


export default ArtistCard
