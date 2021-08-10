import React from 'react'
import { useHistory } from 'react-router';
import UserFavCard from './UserFavCard';

const User = props => {
    let history = useHistory()
    const goBack = () => {
        history.push('/menu')
    }
    return (
        <div>
            <button onClick={goBack}>Back</button>
            <div>
            <h5>{props.user.username}</h5>
            <img src= {props.user.profile_pic}></img>
            <h6>User's Favorites</h6>
            <div>
                {props.user.favorites.map(fav => <UserFavCard favorite={fav}/>)}
            </div>
            </div>
        </div>
    )
}


export default User
