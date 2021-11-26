import React, { forwardRef } from 'react';
// forwardRef : for the animation
import './Post.css';
import { Avatar } from '@material-ui/core';
import InputOption from './InputOption';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

// if you want to do an animation from a 
// Post component you need to add => to this one
// and change to const not function

// Add animation code into the Feed.js too

// old code :
// function Post({ name, description, message, photoUrl }) {

// forwardRef(beginning -> last code in the const)

const Post = forwardRef( ({ name, description, message, photoUrl }, ref) => {
    // ref : react need to know where point things (pointer things)
    return (
        <div ref={ref} className='post'>
            {/* This is where the animation works */}
            <div className="post__header">
                <Avatar src={photoUrl} >{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpIcon} title="Like" />
                <InputOption Icon={MessageIcon} title="Comment" />
                <InputOption Icon={ShareIcon} title="Share" />
                <InputOption Icon={SendIcon} title="Send" />
            </div>
        </div>
    )
})

export default Post
