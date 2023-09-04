import './App.css';
import Main from './components/public/Main';
import  {Navbar}  from './components/public/Navbar';
import  {Footer}  from './components/public/Footer';
import UserForm from './components/public/UserForm';
import  {Detail}  from './components/public/Detail';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Faq from './pages/FAQ';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>

        <Route exact path= '/'  element={<Main/>}/>
        <Route path= '/details/:id' element={<Detail/>}/>
        <Route path='/user-form' element={<UserForm/>}/>
 
        
        
      </Routes>
      <Footer/>
     
    </div>

  );
}

export default App;
