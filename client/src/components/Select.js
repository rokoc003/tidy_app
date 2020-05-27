import styled from '@emotion/styled';
import colors from '../utils/colors';

const Select = styled.select`
  font: 400 1.2rem 'Ubuntu';
  border-radius: 5px;
  background-color: ${colors.inputBackground};
  box-shadow: 8px 6px 10px 1px ${colors.boxShadow};
  border: none;
  height: 35px;
  color: ${colors.inputFont};
  &:focus {
    outline: none;
  }
`;

export default Select;
