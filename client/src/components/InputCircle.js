import styled from '@emotion/styled';
import Input from './Input';
import colors from '../utils/colors';

const InputCircle = styled(Input)`
  padding: 2px 8px;
  height: 35px;
  background-color: ${colors.inputBackground};
  border-radius: 5px;
  font: 400 1.2rem 'Ubuntu';
`;

export default InputCircle;
