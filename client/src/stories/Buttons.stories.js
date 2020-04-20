import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import ButtonContainer from '../components/ButtonContainer';

export default {
  title: 'Button',
  component: Button,
};

export const LoginButton = () => {
  return (
    <ButtonContainer>
      <Button onClick={action('clicked')}>Login</Button>
    </ButtonContainer>
  );
};
export const SignupButton = () => (
  <Button onClick={action('clicked')}>Sign up</Button>
);
export const SubmitButton = () => (
  <Button onClick={action('clicked')}>Submit</Button>
);
export const CreateTaskButton = () => (
  <Button onClick={action('clicked')}>Create Task</Button>
);
export const SaveButton = () => (
  <Button onClick={action('clicked')}>Save</Button>
);
