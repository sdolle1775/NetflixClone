import React, { useEffect, useState } from 'react'
import Home from './pages/Home/Home'
import { Navigate, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, async (user)=>{
      setUser(user);
      setAuthReady(true);

      if(user){
        console.log("Logged In");
      }else{
        console.log("Logged Out");
      }
    })

    return () => unsubscribe();
  },[])

  if (!authReady) {
    return <ToastContainer theme='dark'/>;
  }

  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={user ? <Home/> : <Navigate to='/login' replace />}/>
        <Route path='/login' element={user ? <Navigate to='/' replace /> : <Login/>}/>
        <Route path='/player/:id' element={user ? <Player/> : <Navigate to='/login' replace />}/>
      </Routes>
      
    </div>
  )
}

export default App
