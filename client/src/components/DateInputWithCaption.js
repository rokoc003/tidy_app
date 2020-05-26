import React from 'react';
import styled from '@emotion/styled';
import InputCircle from './InputCircle';
import InputCaption from './InputCaption';
import InputContainer from './InputContainer';
import colors from '../utils/colors';

const DateContainer = styled(InputContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const DateCaption = styled(InputCaption)`
  color: ${colors.inputFont};
  padding-right: 3em;
`;

const DateInput = styled(InputCircle)`
  max-width: 40%;
  font: 1.1rem;
  padding-left: 5px;
  box-shadow: 8px 6px 10px 1px ${colors.boxShadow};
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
