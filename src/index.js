import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import 'antd/dist/antd.css';
import Index from './App';
import Layout from './layout';
import Test from './test';
import NotFound from './nf';
import Home from './home';
import Register from './register';
import Login from './login';
import reportWebVitals from './reportWebVitals';
export default function App(){
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='*' element={<NotFound/>}/>
  <Route path='/dashboard' element={<Layout />}>
  <Route index element={<Index/>}/>
  <Route path='test' element={<Test/>}/>
  <Route path='*' element={<NotFound/>}/>
  </Route>
  </Routes>
  </BrowserRouter>
  )
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
