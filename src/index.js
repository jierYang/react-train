import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ArticleContainer from './ArticleContainer';
import registerServiceWorker from './registerServiceWorker';
import data from './data';

ReactDOM.render(<ArticleContainer articles={data.content}/>, document.getElementById('root'));
registerServiceWorker();
