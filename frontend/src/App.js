import './App.css';
import BlogDetail from './BlogDetail';
import Bloglist from './Bloglist';
import Create from './Create';
import Login from './Login';
import Register from './Register';
import Update from './Update';
import {Routes, Route} from 'react-router-dom';
import Header from './Header';

function App() {

  return (
    <div className="App">
      {/* <Bloglist/> */}
      <Header/>
       
      <Routes>
        <Route path='/' element={<Bloglist/>}/>
        <Route path='/blog' element={<BlogDetail/>}/>
        <Route path='/Create' element={<Create/>}/>
        <Route path='/Update' element={<Update/>}/>
        <Route path='/Update' element={<Update/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
