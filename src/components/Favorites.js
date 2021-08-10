import React from 'react'
import { useHistory } from 'react-router';
import FavCard from './FavCard';

const Favorites = props => {
    let history = useHistory()
    const goBack = () => {
        history.push('/menu')
    }

    return (
        <div className="fav-page">
        <button onClick={goBack}>Return to menu</button>
            <div className= "favorites">
                
                {props.favList.map(fav => <FavCard favorite={fav} dltFavorite = {props.dltFavorite}/>)}
            </div>
        </div>
    )
}


export default Favorites
