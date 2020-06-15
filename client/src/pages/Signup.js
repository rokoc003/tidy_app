import React, { useState } from 'react';
import styled from '@emotion/styled';
import Dishes from '../assets/images/Dishes.png';
import PageContainer from '../components/PageContainer';
import Button from '../components/Button';
import ButtonContainer from '../components/ButtonContainer';
import InputCircle from '../components/InputCircle';
import InputContainer from '../components/InputContainer';
import PageCaption from '../components/PageCaption';
import Form from '../components/Form';
import { Link } from 'react-router-dom';

const IMG = styled.img`
  max-width: 300px;
  height: auto;
`;

function Signup() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <PageContainer>
      <IMG src={Dishes} alt="Drawing of a woman washing dishes" />
      <PageCaption>Create Account</PageCaption>
      <InputContainer>
        <Form>
          <InputCircle
            placeholder="First name"
            type="text"
            value={firstname}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          <InputCircle
            placeholder="Last name"
            type="text"
            value={lastname}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
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
      <span>Already have an acoount?</span>
      <span>
        <Link to="/">Login</Link>
      </span>
      <ButtonContainer>
        <Button>Sign up</Button>
      </ButtonContainer>
    </PageContainer>
  );
}
export default Signup;
