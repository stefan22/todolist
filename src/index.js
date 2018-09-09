import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app-root';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const rootHandle = document.getElementById('react-container');

ReactDOM.render(

    <div className='main-wrapper'>
      <App />
    </div>,
    rootHandle

);

registerServiceWorker();


