import React, { useEffect, useContext } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import Loading from './Components/Loading/Loading';
import { AuthContext, FirebaseContext } from './store/Context'
import Post from './store/PostContext';
import ViewPost from './Pages/ViewPost';

/**
 * ?  =====Import Components=====
 */

function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>
      <BrowserRouter basename={window.location.pathname || ''}>
      <Post>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/create' element={<Create/>} ></Route>
          <Route path='/view' element={<ViewPost/>}></Route>
          <Route path='/loading' element={<Loading/>} ></Route>
        </Routes>
      </Post>
      </BrowserRouter>

    </div>
  );
}

export default App;
