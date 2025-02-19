import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx';
import Task from './component/task.jsx';

import Login from './component/login.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Register from './component/register.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/home" element={<App />} />
       <Route path="/task" element={<Task />} />
       <Route path="/register" element={<Register />} />
       
     </Routes>
   </BrowserRouter>
  </StrictMode>,
)
