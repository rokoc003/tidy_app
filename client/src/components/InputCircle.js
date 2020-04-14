import styled from '@emotion/styled';
import Input from './Input';
import colors from '../utils/colors';

const InputCircle = styled(Input)`
  padding: 2px 8px;
  height: 25px;
  background-color: ${colors.inputBackground};
  border-radius: 5px;
`;

export default InputCircle;
