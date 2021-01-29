import React from 'react';

import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import QuestionWidget, { LoadingWidget, ResultWidget } from '../src/components/QuestionWidget';

import db from '../db.json';

const [results, setResults] = React.useState([true, false]);

const screenStates = {
  quiz: 'QUIZ',
  loading: 'LOADING',
  result: 'RESULT',
};

function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.result);

  const [questionIndex, setQuestionIndex] = React.useState(0);

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < db.questions.length) {
      setQuestionIndex((question) => question + 1);
    } else {
      setScreenState(screenStates.result);
    }
  }

  /* React.useEffect(() => {
    setTimeout(() => setScreenState(screenStates.quiz), 1 * 1000);
  }, []); */

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.quiz && (
        <QuestionWidget
          questionIndex={questionIndex}
          question={db.questions[questionIndex]}
          totalQuestions={db.questions.length}
          onSubmit={handleSubmit}
        />
        )}
        {screenState === screenStates.loading && <LoadingWidget />}
        {screenState === screenStates.result && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}

export default QuizPage;
