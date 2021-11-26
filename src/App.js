import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout, login } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {
  const dispatch = useDispatch();

  // REDUX -> USER
  const user = useSelector(selectUser);

  // Create a useEffect for carry our login because it's log out us if we refresh the App
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is log in
        dispatch(login({
          email: userAuth.email,
          // user email
          uid: userAuth.uid,
          // from firebase
          displayName: userAuth.displayName,
          // our name
          photoUrl: userAuth.profilePic,
          // photo : profilePic
        }))
      } else {
        // user log out
        dispatch(logout());
      }
    });
    // This line in commentary MUST BE WRITE >>>>
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <Header />  
      {/* ES6 : if there are no user => Login, or our app */}
      {!user ? (
        <div className="login">
          <Login />
        </div>
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
