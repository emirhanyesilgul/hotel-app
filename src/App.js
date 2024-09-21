import Home from './pages/Home'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from  './components/Common/Header/Header';
import Footer from  './components/Common/Footer/Footer';

function App() {
  return (
   <>
   <Header /> 
   <Routes>
    <Route path='/' element={<Home />} />
   </Routes>
   <Footer />
   </>
  );
}

export default App;
