import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Store from './../store'
import MapState from './App';
import './index.css'

ReactDOM.render(<Provider store={Store}><MapState /></Provider>, document.getElementById('root'));