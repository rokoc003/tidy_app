import styled from '@emotion/styled';
import colors from '../utils/colors';

const Input = styled.input`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 5px 0px;
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
