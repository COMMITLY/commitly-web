import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import LoginCallbackPage from './pages/logincallback/LoginCallbackPage';
import MainPage from './pages/main/MainPage';
import TopAppBar from './components/appbar/TopAppBar';
import InfoPage from './pages/info/InfoPage';
import BottomBar from './components/appbar/BottomBar';

function App() {
  return (
    <Router>
      <TopAppBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login/callback" element={<LoginCallbackPage/>} />
        <Route path="/main" element={<MainPage/>} />
        <Route path='info' element={<InfoPage/>}></Route>
      </Routes>
      <BottomBar/>
    </Router>
  );
}

export default App;
