import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx';
import Task from './component/task.jsx';

import Login from './component/login.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
     <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/" element={<App />} />
       <Route path="/task" element={<Task />} />
       
     </Routes>
   </BrowserRouter>
  </StrictMode>,
)
