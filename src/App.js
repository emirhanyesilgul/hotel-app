import Home from './pages/Home/Home'
import './App.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import { Route, Routes } from 'react-router-dom';
import Header from  './components/Common/Header/Header';
import Footer from  './components/Common/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Destinations from './pages/Destinations/Destinations';
import PhotoGallery from './pages/PhotoGallery/PhotoGallery';
import Rooms from './pages/Rooms/Rooms';
import Hotels from './pages/Hotels/Hotels';
import Blog from './pages/Blog/Blog';
import OnlineRes from './pages/OnlineReservation/OnlineRes';
import RoomsDetail from './pages/Rooms/RoomsDetail';

function App() {
  return (
   <>
   <Header />
   <ScrollToTop /> 
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='about-us' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='destinations' element={<Destinations />} />
    <Route path='photo-gallery' element={<PhotoGallery />} />
    <Route path='rooms' element={<Rooms />} />
    <Route path='hotels' element={<Hotels />} />
    <Route path='blog' element={<Blog />} />
    <Route path='OnlineRes' element={<OnlineRes/>}/>
    <Route path="/rooms/:title" element={<RoomsDetail />} />
   </Routes>
   <Footer />
   </>
  );
}

export default App;
