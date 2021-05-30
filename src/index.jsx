import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Joke from './Joke';
import { jokes } from './jokes';

const App = () => {
  return (
    <div className="container">
      {jokes.map((item) => (
        <Joke
          key={item.id}
          userAvatar={item.avatar}
          userName={item.userName}
          text={item.text}
          likes={item.likes}
          dislikes={item.dislikes}
        />
      ))}
    </div>
  );
};

render(<App />, document.querySelector('#app'));
