import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const LoginButton = () => (
  <Button onClick={action('clicked')}>Login</Button>
);
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
