import React from 'react';

import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import QuestionWidget, { LoadingWidget, ResultWidget } from '../src/components/QuestionWidget';

import db from '../db.json';

const screenStates = {
  quiz: 'QUIZ',
  loading: 'LOADING',
  result: 'RESULT',
};

function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.loading);

  const [questionIndex, setQuestionIndex] = React.useState(0);

  function handleClick(event) {
    event.preventDefault();
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < db.questions.length) {
      setQuestionIndex((question) => question + 1);
    } else {
      setScreenState(screenStates.result);
    }
  }

  React.useEffect(() => {
    setTimeout(() => setScreenState(screenStates.quiz), 1 * 1000);
  }, []);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.quiz && (
        <QuestionWidget
          questionIndex={questionIndex}
          question={db.questions[questionIndex]}
          totalQuestions={db.questions.length}
          handleClick={handleClick}
        />
        )}
        {screenState === screenStates.loading && <LoadingWidget />}
        {screenState === screenStates.result && <ResultWidget />}
      </QuizContainer>
    </QuizBackground>
  );
}

export default QuizPage;
