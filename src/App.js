import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageProfile from './Pages/ManageProfile/ManageProfile';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className="body">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/manage-profile' element={<ManageProfile></ManageProfile>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
