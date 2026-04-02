import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {user} = useContext(UserContext)
    return (
        <div className='max-w-md mx-auto p-4'>
            {user ? <h2 className='text-xl font-bold mb-4'>Welcome {user.username}</h2> : <p className='text-xl font-bold mb-4'>Please login to view your profile</p>}
        </div>
    )
}

export default Profile
