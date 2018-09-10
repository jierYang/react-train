import React from 'react';
import ReactDOM from 'react-dom';
import ArticleContainer from './ArticleContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ArticleContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
