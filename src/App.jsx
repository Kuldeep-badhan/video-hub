import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Freevideos from './components/Freevideos';
import Freevideoview from './components/Freevideoview';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Upload from './components/Upload';
import Videos from './components/Videos';

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/uploadvideos" element={<Upload/>} />
        <Route path="/freevideos" element={<Freevideos/>} />
        <Route path="/videos/:id" element={<Freevideoview/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer/> 
    </Router>
  );
}

export default App;
