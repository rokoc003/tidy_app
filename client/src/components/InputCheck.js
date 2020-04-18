import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import CheckCircle from '../assets/icons/CheckCircle';
import InputCircle from '../components/InputCircle';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  min-width: 50px;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
`;

function InputCheck({ value, onButtonClick }) {
  return (
    <Container>
      <Button active={value} onClick={() => onButtonClick()}>
        <CheckCircle active={value} />
      </Button>
      <InputCircle />
    </Container>
  );
}

InputCheck.propTypes = {
  value: PropTypes.bool,
  onButtonClick: PropTypes.func,
};

export default InputCheck;
