import React from 'react';
import Input from '../components/Input';
import InputLine from '../components/InputLine';
import InputCircle from '../components/InputCircle';
import InputCheck from '../components/InputCheck';

export default {
  title: 'Input',
};

export const Default = () => <Input />;

export const RoomInput = () => <InputLine placeholder="Add room" />;
export const HouseholdMemberInput = () => <InputLine placeholder="Add name" />;
export const TaskInput = () => <InputLine placeholder="Taskname" />;
export const EmailInput = () => (
  <InputCircle placeholder="E-Mail" type="email" />
);
export const PasswordInput = () => (
  <InputCircle placeholder="Password" type="password" />
);
export const ForenameInput = () => <InputCircle placeholder="First name" />;
export const SurnameInput = () => <InputCircle placeholder="Last name" />;
export const HouseholdNameInput = () => (
  <InputCircle placeholder="Enter Householdname" />
);

export const TaskInputwithCheck = () => {
  const [active, setActive] = React.useState(false);

  return <InputCheck value={active} onButtonClick={() => setActive(!active)} />;
};
