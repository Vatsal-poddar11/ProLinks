import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import VerifyEmail from './pages/VerifyEmail';
import OpenRoute from './components/OpenRoute';
import Dashboard from "./pages/Dashboard";
import EditProfile from "./pages/EditProfile";
import AllLinks from './pages/AllLinks';

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="verify-email" element={<OpenRoute><VerifyEmail/></OpenRoute>}/>
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="edit" element={<EditProfile/>}/>
        <Route path="edit-links" element={<AllLinks/>} />
      </Routes>
    </div>
  );
}

export default App;
