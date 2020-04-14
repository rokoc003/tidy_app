import styled from '@emotion/styled';
import colors from '../utils/colors';

const Button = styled.button`
  background-image: ${colors.buttonBackground};
  cursor: pointer;
  color: ${colors.buttonFont};
  border-radius: 10px;
  box-shadow: 2px 4px 7px ${colors.boxShadow};
  border: none;
  font-size: 1.1rem;
  padding: 8px 20px;
  &:focus {
    outline: none;
  }
`;

export default Button;
