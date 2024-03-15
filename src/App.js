import React from 'react';
import EightBall from './EightBall';
import EightBallAnswers from './EightBallAnswers';
import './App.css';

function App() {
  return (
    <>
      <EightBall answers={EightBallAnswers} />
    </>

  );
}

export default App;
