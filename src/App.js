import React from 'react';
import './index.scss';
import { Game } from './components/Game';
import { Result } from './components/Result';

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://63b49fa00f49ecf5089012e6.mockapi.io/questions')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const question = items[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== items.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
