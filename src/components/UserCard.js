import React from 'react'
import { useHistory } from 'react-router';




const UserCard = props => {
    let history = useHistory()

    const openUser = () => {
        props.pickUser(props.user)
        history.push('/user')
    }

    return (
        <div>
            <h5>{props.user.username}</h5>
            <img onClick={openUser} src= {props.user.profile_pic}></img>
        </div>
    )
}



export default UserCard
