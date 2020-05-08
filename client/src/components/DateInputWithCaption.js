import React from 'react';
import styled from '@emotion/styled';
import InputCircle from './InputCircle';
import InputCaption from './InputCaption';
import InputContainer from './InputContainer';
import colors from '../utils/colors';

const DateContainer = styled(InputContainer)`
  display: flex;
  justify-content: center;
`;
const DateCaption = styled(InputCaption)`
  color: ${colors.inputFont};
`;

const DateInput = styled(InputCircle)`
  width: 40%;
  font: 1.3rem;
  padding-left: 15px;
`;

function DateInputWithCaption() {
  return (
    <DateContainer>
      <DateCaption htmlFor="date">Choose time:</DateCaption>
      <DateInput type="time" />
    </DateContainer>
  );
}

export default DateInputWithCaption;
