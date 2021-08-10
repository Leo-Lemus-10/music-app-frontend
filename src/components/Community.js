import React from 'react'
import { useHistory } from 'react-router';
import UserCard from './UserCard';

const Community = props => {
    let history = useHistory()

    const goBack = () => {
        history.push('/menu')
    }

    return (
        <div>
            <button onClick={goBack}>Return to menu</button>
            <div className="community">
                {props.userList.map(user => <UserCard user={user} pickUser = {props.pickUser}/>)}
            </div>
        </div>
    )
}



export default Community
