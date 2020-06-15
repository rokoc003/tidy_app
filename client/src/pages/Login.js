import React, { useState } from 'react';
import styled from '@emotion/styled';
import Cleaning from '../assets/images/Cleaning.png';
import PageContainer from '../components/PageContainer';
import Header from '../components/Header';
import Button from '../components/Button';
import ButtonContainer from '../components/ButtonContainer';
import InputCircle from '../components/InputCircle';
import InputContainer from '../components/InputContainer';
import Form from '../components/Form';
import { Link } from 'react-router-dom';

const IMG = styled.img`
  max-width: 350px;
  height: auto;
  padding: 15px 0px;
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <PageContainer>
      <IMG src={Cleaning} alt="Drawing of a woman vacuuming" />
      <Header />
      <InputContainer>
        <Form>
          <InputCircle
            placeholder="Email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <InputCircle
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Form>
      </InputContainer>
      <span>New to tidyApp?</span>
      <span>
        <Link to="/signup">Sign up now.</Link>
      </span>
      <ButtonContainer>
        <Link to="/household">
          <Button>Login</Button>
        </Link>
      </ButtonContainer>
    </PageContainer>
  );
}

export default Login;
