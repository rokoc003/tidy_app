import styled from '@emotion/styled';

const Input = styled.input`
  padding: 2px 8px;
  color: /* #f7efba */ #a3a3a3;
  width: 200px;
  height: 20px;
  background-color: #e2e2e2;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #a3a3a3;
  }
`;

export default Input;
