import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Player from './Pages/Player/Player';
import { auth } from './firebase';

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("logged In");
        navigate('/');
      } else {
        console.log("Logged Out");
        navigate('/login');
      }
    });
  }, []);
  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:Id' element={<Player />} />
      </Routes>
    </div>
  );
}
export default App;
