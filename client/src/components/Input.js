import styled from '@emotion/styled';

const Input = styled.input`
  display: flex;
  justify-content: center;
  padding: 2px 8px;
  color: #bc325b;
  border: none;
  font-size: 1.2rem;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #a3a3a3;
  }
`;

export default Input;
