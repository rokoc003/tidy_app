import styled from '@emotion/styled';
import Input from './Input';
import colors from '../utils/colors';

const InputLine = styled(Input)`
  padding: 2px 8px;
  height: 25px;
  border-bottom: 4px solid ${colors.InputLine};
`;

export default InputLine;
