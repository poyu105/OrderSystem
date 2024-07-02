import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import OrderDetail from './pages/OrderDetail';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const [userMode, setMode] = useState('User');
  const handleMode = ()=>{
      setMode(prevMode => (prevMode === 'User' ? 'Admin' : 'User'));
  }

  return (
    <Router>
      <Navbar userMode={userMode} handleMode={handleMode} />
      <Routes>
        {/* 重定向 /OrderSystem 到 /home */}
        <Route path="/OrderSystem" element={<Navigate to="/" replace />} />
      
        <Route path="/" element={<Home userMode={userMode}/>} />
        <Route path="/OrderDetail" element={<OrderDetail />} />
        <Route path="/Orders" element={<Orders />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
