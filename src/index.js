import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/app.css';
import SideBar from './components/SideBar';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import SearchMovies from './components/SearchMovies'
import Footer from './components/Footer';

ReactDOM.render(
  <BrowserRouter>
    <SideBar/>
    <SearchMovies/>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
