import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';

import Login from './components/Login';
import Customizer from "./components/Customizer";
import Home  from './components/Home';
import Header from './components/Header';
import Register  from './components/Register';
import { Suspense } from "react";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
      <Routes>

      <Route element={<Home></Home>} path="/" />
      <Route element={<Home></Home>} path="/homepage" />
      <Route element={<Login></Login>} path="login" />
       <Route element={<Suspense fallback={null}>
          <Customizer />
        </Suspense>} path="customizer/:name" />
        <Route element={<Register></Register>} path="register" />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
