import React, { useState, useEffect } from 'react';
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
// import the flip move
import FlipMove from "react-flip-move"

function Feed() {

    // When we need all the Post userData change : we change the code of Feed not the Post, and we also need to change the => sendPost
    const user = useSelector(selectUser);

    // initialize a stat
    const [posts, setPots] = useState([]);

    // link the input and the message props in the post object
    const [input, setInput] = useState("");

    // Peace of special hook to allow us to 
    // fire our code when the Feed Component log
    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => (
            // orderBy timestamp, desc like this
            setPots(snapshot.docs.map(doc => (
                {
                    // we need to return a object
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
        // onSnapshot : give us realtime listening connection, to the database
        // everytime something change : we have a snapshot
        // docs : in many connection we have a docs, we need to get the docs
    }, [])
    // What's happening there, we directly map our post wuth our database, in all in realtime

    const sendPost = e => {
        e.preventDefault();
        // for avoid reloading : like in VueJS
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoURL: user.photoUrl || "",
            // || "" : means we have no image

            // // old static code
            // name: 'Nariniaina',
            // description: 'This is a test',
            // message: input,
            // photoURL: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
            // timestamp from server for have a realtime data 
            //from users who push in different timestamp (location)
        });
        // when I send a post

        setInput("")
    };

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        {/* If we link value of input with the 
                        variable here this gonna be stuck So we give parameter OnChange*/}
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>

                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title='Write artice' color="#7FC15E" />
                </div>
            </div>

            {/* This is how we add animation of our choice to a object 
            wathever animation need keys here key is our keys
            */}
            <FlipMove>
                {posts.map(({id, data: {name, description, message, photoURL} }) => (
                    <Post 
                        key={id}
                        // new element add to a list, react gonna render the new element
                        // the key help him to know who is the new element
                        // if we don't do this react gonna retrun all the element everytime
                        name={name}
                        description={description}
                        message={message}
                        photoURL={photoURL}
                    />
                ))}
            </FlipMove>
            <Post name='Nariniaina' description='This is a test' message='wow this work'/>
            <Post name='Nariniaina' description='This is a test' message='wow this work'/>
            <Post name='Nariniaina' description='This is a test' message='wow this work'/>
            <Post name='Nariniaina' description='This is a test' message='wow this work'/>
            <Post name='Nariniaina' description='This is a test' message='wow this work'/>
            <Post name='Nariniaina' description='This is a test' message='wow this work'/>
            <Post name='Nariniaina' description='This is a test' message='wow this work'/>
            <Post name='Nariniaina' description='This is a test' message='wow this work'/>
        </div>
    )
}

export default Feed
