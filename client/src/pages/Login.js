import React from 'react';
import styled from '@emotion/styled';
import Cleaning from '../assets/images/Cleaning.png';
import PageContainer from '../components/PageContainer';
import Header from '../components/Header';
import Button from '../components/Button';
import ButtonContainer from '../components/ButtonContainer';
import InputCircle from '../components/InputCircle';
import InputContainer from '../components/InputContainer';

const IMG = styled.img`
  max-width: 350px;
  height: auto;
`;

function Login() {
  return (
    <PageContainer>
      <IMG src={Cleaning} alt="Drawing of a woman vacuuming" />
      <Header />
      <InputContainer>
        <InputCircle placeholder="Email" type="email" />
        <InputCircle placeholder="Password" type="password" />
      </InputContainer>
      <textarea>New to tidyApp? Sign up now.</textarea>
      <ButtonContainer>
        <Button>Login</Button>
      </ButtonContainer>
    </PageContainer>
  );
}

export default Login;
