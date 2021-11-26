import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {

    // To acceed to the contain of our user store in the REDUX state, it's the select
    const user = useSelector(selectUser);

    // The power of JSX = return dom from JS
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img 
                    src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" 
                    alt=""
                />
                <Avatar 
                    src={user.photoUrl} 
                    className='sidebar__avatar'
                >
                    {user.email[0]}
                </Avatar>
                {/* This is how we build a condition in a component => if we dont have one src */}
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>
                        2,543
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>View on post</p>
                    <p className='sidebar__statNumber'>
                        2,448
                    </p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {/* How to use JSX function */}
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('software engennering')}
                {recentItem('desing')}
                {recentItem('developper')}
            </div>
        </div>
    )
}

export default Sidebar
