import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import UserRegistration from './Components/UserRegistration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPost from './Components/AddPost';
import ViewPost from './Components/ViewPost';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Login/>} />
      <Route path='/regu' exact element={<UserRegistration/>} />
      <Route path='/addp' exact element={<AddPost/>}/>
      <Route path='/viewp' exact element={<ViewPost/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
