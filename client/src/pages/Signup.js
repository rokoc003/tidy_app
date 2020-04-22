import React from 'react';
import styled from '@emotion/styled';
import Dishes from '../assets/images/Dishes.png';
import PageContainer from '../components/PageContainer';
import Button from '../components/Button';
import ButtonContainer from '../components/ButtonContainer';
import InputCircle from '../components/InputCircle';
import InputContainer from '../components/InputContainer';
import PageCaption from '../components/PageCaption';
import { Link } from 'react-router-dom';

const IMG = styled.img`
  max-width: 300px;
  height: auto;
`;

function Signup() {
  return (
    <PageContainer>
      <IMG src={Dishes} alt="Drawing of a woman washing dishes" />
      <PageCaption>Create Account</PageCaption>
      <InputContainer>
        <InputCircle placeholder="First name" type="text" />
        <InputCircle placeholder="Last name" type="text" />
        <InputCircle placeholder="Email" type="email" />
        <InputCircle placeholder="Password" type="password" />
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
