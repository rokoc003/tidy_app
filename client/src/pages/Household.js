import React from 'react';
import InputCircle from '../components/InputCircle';
import InputLine from '../components/InputLine';
import InputContainer from '../components/InputContainer';
import InputCaption from '../components/InputCaption';
import Header from '../components/Header';
import PageCaption from '../components/PageCaption';
import Button from '../components/Button';
import ButtonContainer from '../components/ButtonContainer';
import Form from '../components/Form';
import Wrapper from '../components/Wrapper';
import PageContainer from '../components/PageContainer';

function Household() {
  return (
    <PageContainer>
      <Wrapper>
        <Header />
        <PageCaption>Your household</PageCaption>
      </Wrapper>
      <Form>
        <InputContainer>
          <InputCircle type="text" placeholder="Enter householdname" />
        </InputContainer>
        <InputContainer>
          <InputCaption>Create household</InputCaption>
          <InputLine type="text" placeholder="Add room" />
        </InputContainer>
        <InputContainer>
          <InputCaption>Household members</InputCaption>
          <InputLine type="text" placeholder="Add name" />
        </InputContainer>
      </Form>
      <ButtonContainer>
        <Button>Submit</Button>
      </ButtonContainer>
    </PageContainer>
  );
}

export default Household;
