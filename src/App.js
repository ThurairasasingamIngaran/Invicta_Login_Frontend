import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes, RouterProvider } from 'react-router-dom';
import Register from './Pages/Register';
import Details from './Pages/Details';
import Login from './Pages/Login';
import { routes } from './Routes';
import Layout1 from './Layout/Layout1';


function App() {
  return (
     <div>
     <RouterProvider router={routes}/>
     
      </div>
  );
}

export default App;
