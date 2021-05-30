import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Joke from './Joke';

const App = () => {
  return (
    <div className="container">
      <Joke />
    </div>
  );
};

render(<App />, document.querySelector('#app'));
