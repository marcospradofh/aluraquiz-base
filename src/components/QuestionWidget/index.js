import React from 'react';
import Button from '../Button';
import Widget from '../Widget';

export const LoadingWidget = () => (
  <Widget>
    <Widget.Header>
      Carregando...
    </Widget.Header>
    <Widget.Content>
      [Desafio do loading]
    </Widget.Content>
  </Widget>
);
export const ResultWidget = () => (
  <Widget>
    <Widget.Content>
      Quiz finalizado com sucesso!
    </Widget.Content>
  </Widget>
);

function QuestionWidget({
  totalQuestions, question, questionIndex, handleClick,
}) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        src={question.image}
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
      />
      <Widget.Content>
        <form>
          <h2>{question.title}</h2>
          <p>
            {question.description}
          </p>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button
            type="submit"
            onClick={handleClick}
          >
            Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

export default QuestionWidget;
