import styled from '@emotion/styled';
import colors from '../utils/colors';

const Input = styled.input`
  display: flex;
  justify-content: center;
  padding: 2px 8px;
  color: ${colors.inputFont};
  border: none;
  font-size: 1.2rem;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: ${colors.inputPlaceholderFont};
  }
`;

export default Input;
