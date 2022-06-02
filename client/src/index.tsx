import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/antd.css';
import Layout from './Layout'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Home from './components/Home'
import Performance from './components/Performance'
import Error from './components/Error'
import Behavior from './components/Behavior'
import NotFound from "./components/404";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/performance' element={<Performance/>}/>
                    <Route path='/behavior' element={<Behavior/>}/>
                    <Route path='/error' element={<Error/>}/>
                    <Route path='/*' element={<NotFound/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
