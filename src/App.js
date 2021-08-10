import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import LoginPage from './components/LoginPage';
import Menu from './components/Menu';
import Favorites from './components/Favorites';
import User from './components/User';
import Community from './components/Community';
import Artists from './components/Artists';
import SignUpPage from './components/SignUpPage';
import { useHistory } from 'react-router';


const backend = 'http://localhost:3000/'

function App() {
  let history = useHistory()
  let [currentUser, setCurrentUser] = useState({})
  let [userList, setUserList] = useState([])
  let [artistList, setArtistList] = useState([])
  let [selectedUser, setSelectedUser] = useState({})
  
  useEffect( () => {
    fetchLists()
    
  }, [])
  
  const fetchLists = () => {
    fetch(backend+'users')
    .then(r => r.json())
    .then(uList => setUserList(uList))

    fetch(backend+'artist')
    .then(r => r.json())
    .then(aList => setArtistList(aList))

  }
  
  const selectUser = (userObj) => {
    setCurrentUser(userObj)
  }

  const pickUser = (userObj) => {
    setSelectedUser(userObj)
  
  }
  
  const addFavorite = (artistObj) => {
    let newFavObj = {
      user_id: currentUser.id, 
      artist_id: artistObj.id,
      artist_name: artistObj.name,
      img: artistObj.picture
    }
    let postConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFavObj),
    }
    fetch(backend+'favorites', postConfig)
    .then(r => r.json())
    .then(newFavorite => {
      fetchLists()
      fetch(backend+`users/${currentUser.id}`)
      .then(r => r.json())
      .then(newUser => setCurrentUser(newUser))
    })
  }

  const dltFavorite = (favObj) => {
    let deleteConfig = {
      method: "DELETE"
    }
    fetch(`http://localhost:3000/favorites/${favObj.id}`, deleteConfig)
    .then(r => r.json())
    .then(newFavorite => {
      fetchLists()
      fetch(backend+`users/${currentUser.id}`)
      .then(r => r.json())
      .then(newUser => setCurrentUser(newUser))
    })
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ='/'>
            <Welcome/>
          </Route>
          <Route exact path ='/login'>
            <LoginPage selectUser={selectUser} />
          </Route>
          <Route exact path ='/signup'>
            <SignUpPage selectUser={selectUser} />
          </Route>
          <Route exact path ='/menu'>
            <Menu user={currentUser} fetchLists={fetchLists} selectUser={selectUser} currentUser={currentUser}/>
          </Route>
          <Route exact path ='/favs'>
            <Favorites favList={currentUser.favorites} dltFavorite ={dltFavorite}/>
          </Route>
          <Route exact path ='/community'>
            <Community userList={userList} pickUser= {pickUser}/>
          </Route>
          <Route exact path ='/user'>
            <User user={selectedUser}/>
          </Route>
          <Route exact path ='/artists'>
            <Artists artistList={artistList} addFavorite={addFavorite}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
