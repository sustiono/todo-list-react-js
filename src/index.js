import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoPanel from './component/TodoPanel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoPanel />, document.getElementById('todos'));
registerServiceWorker();
