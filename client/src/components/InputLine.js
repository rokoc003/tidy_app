import styled from '@emotion/styled';
import Input from './Input';
import colors from '../utils/colors';

const InputLine = styled(Input)`
  padding: 2px 8px;
  height: 25px;
  border-bottom: 2px solid ${colors.InputLine};
  margin-bottom: 15px;
`;

export default InputLine;
