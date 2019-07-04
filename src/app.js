import React from 'react'
import ReactDOM from 'react-dom'
import DevOps from './Components/DevOps';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import './firebase/firebase'
import AppRouter from './Components/AppRouter';
    
ReactDOM.render(<AppRouter />, document.getElementById('app'));
