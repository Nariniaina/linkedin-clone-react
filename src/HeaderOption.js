import React from 'react'
import "./HeaderOption.css"
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

// props inside HeaderOption(props)
function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className='headerOption__icon' />}
            {/* old code for static avatar NB: avatar change to boolean avatar={true} if we don't do that avatar gonna be show for all HeaderOption
            {avatar && <Avatar className='headerOption__icon' src={avatar} />} */}
            {avatar && (<Avatar className='headerOption__icon' src={user?.photoUrl} >{user?.email[0]}</Avatar>
            )}
            {/* user? means we don't need to have a value at the beginning */}
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    )
}

export default HeaderOption
