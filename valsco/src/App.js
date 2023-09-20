import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LoadingPage} from './components/Loading/LoadingPage';
import ProductsPage from './components/Products/ProductsPage';
import Navbar from './components/Blogs/Components/Navbar';
import BlogHome from './components/Blogs/Components/BlogHome';
import CreateBlog from './components/Blogs/Components/CreateBlog';
import Login from './components/Blogs/Components/Login';
import DetailedBlog from './components/Blogs/Components/DetailedBlog';
import Slider from './components/Blogs/Components/Slider';
import Contact from './components/Contact/Contact';
import LandingPage from './components/Landing/LandingPage';
import Hoverimage from './components/hoverImage/Hoverimage';
import Alert from "./components/Blogs/Components/Alert";
import Newnav from './components/Newnav/Newnav';

function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated"));

  const [alertMsg,setAlertMsg] = useState(localStorage.getItem("alertMsg"));
  const [alertColor,setAlertColor] = useState(localStorage.getItem("alertColor"));

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingComplete(true);
    }, 4000);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<>{!isLoadingComplete ? (<LoadingPage />) : (<><div><Newnav/><LandingPage></LandingPage><Hoverimage/><ProductsPage /><Slider authenticated={authenticated} /><Contact /> </div></>)}</>}/>
        <Route path="/BlogHome" element={<><Navbar authenticated={authenticated} setAuthenticated={setAuthenticated} alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/><Alert alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/><BlogHome authenticated={authenticated} alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/></>}/>
        <Route path="/CreateBlog" element={<><Navbar authenticated={authenticated} setAuthenticated={setAuthenticated} alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/><Alert alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/><CreateBlog authenticated={authenticated} alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/></>}/>
        <Route path="/Login" element={<><Navbar authenticated={authenticated} setAuthenticated={setAuthenticated} alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/><Alert alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/><Login setAuthenticated={setAuthenticated} authenticated={authenticated} alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/></>}/>
        <Route path="/DetailedBlog/:ID" element={<><Navbar authenticated={authenticated} setAuthenticated={setAuthenticated} alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/><Alert alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/><DetailedBlog authenticated={authenticated} alertMsg={alertMsg} setAlertMsg={setAlertMsg} alertColor={alertColor} setAlertColor={setAlertColor}/></>}/>
      </Routes>
    </Router>
  );
}

export default App;