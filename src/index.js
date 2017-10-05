import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import BaseLayout from './components/BaseLayout';

ReactDOM.render(<BaseLayout />, document.getElementById('root'));
registerServiceWorker();
