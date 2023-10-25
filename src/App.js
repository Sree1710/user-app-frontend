import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import UserRegistration from './Components/UserRegistration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Login/>} />
      <Route path='/regu' exact element={<UserRegistration/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
