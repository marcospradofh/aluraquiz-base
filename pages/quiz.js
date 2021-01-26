import React from 'react'
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

const quiz = () => {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Pergunta 1 a 5</h1>
          </Widget.Header>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  )
}

export default quiz;
