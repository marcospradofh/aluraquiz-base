import styled from 'styled-components';

import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

import db from '../db.json'

const BackgroundImage = styled.div`
background-image: url(${db.bg});
display: flex;
flex: 1;
background-size: cover;
background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>Quiz - Viajando pelo mundo!</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Legendnskdnskdnsdks dksjdskj</p>  
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>
              <h1>Quizes da Galera</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Conteudo</p>  
            </Widget.Content>
          </Widget>
        </QuizContainer>
      <Footer />
    <GitHubCorner />
    </QuizBackground>
  );
}
