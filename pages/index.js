import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

import db from '../db.json'


export const Input = styled.input`
  padding-left: 16px;
  margin-top: 12px;
  height: 38px;
  width: 100%;
  border-radius: 3.5px;
  flex: 1;
`

export const Button = styled.button`
  border-radius: 4px;
  flex: 2;
  width: 100%;
  height: 48px;
  margin-top: 24px;
  text-transform: uppercase;
  letter-spacing: 1.25px;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
`

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
    <Head>
      <title>Quiz viagens</title>
    </Head>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>Quiz - Viajando pelo mundo!</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Teste seus conhecimentos sobre os países do mundo</p>
              <form onSubmit={ function (event) {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}>
                <Input 
                  type="text" 
                  placeholder='Insira seu nome...'
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <Button type='submit' disabled={ !name }>Jogar {name}</Button>  
              </form> 
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
        <Footer />
        </QuizContainer>
    <GitHubCorner />
    </QuizBackground>
  );
}
