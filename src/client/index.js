import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Store from './../store'
import Main from './MapState';
import './index.css'

ReactDOM.render(<Provider store={Store}><Main /></Provider>, document.getElementById('root'));