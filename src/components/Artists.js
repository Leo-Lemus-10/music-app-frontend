import React from 'react'
import ArtistCard from './ArtistCard'
import { useHistory } from 'react-router';


const Artists = props => {
    let history = useHistory()
    const goBack = () => {
        history.push('/menu')
    }
    return (
        <div>
            <button onClick={goBack}>Return to menu</button>
            {props.artistList.map(artist => <ArtistCard artist={artist} addFavorite ={props.addFavorite}/>)}
        </div>
    )
}



export default Artists
