import React from 'react';
import { BrowserRouter, Route, Routes ,Navigate } from 'react-router-dom';
import Login from './Component/login'
import SignUp from './Component/signup'

function App() {
  return (
    <>
    <BrowserRouter>
         
         <Routes>
           <Route path='/login' element={<Login />} />
           <Route path='/' element={<Navigate to='/signup' replace />} />
           <Route path='/signup' element={<SignUp />} />
          </Routes>
    </BrowserRouter> 
    
    
  </>
  );
}

export default App;
