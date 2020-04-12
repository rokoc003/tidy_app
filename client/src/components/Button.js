import styled from '@emotion/styled';

const Button = styled.button`
  background-image: linear-gradient(#fb8777, #ef1846);
  cursor: pointer;
  color: #f7efba;
  border-radius: 10px;
  box-shadow: 2px 4px 7px #aaaaaa;
  border: none;
  font-size: 14px;
  padding: 8px 20px;
  &:focus {
    outline: none;
  }
`;

export default Button;
