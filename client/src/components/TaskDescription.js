import styled from '@emotion/styled';
import colors from '../utils/colors';

const TaskDescription = styled.textarea`
  background-color: ${colors.inputBackground};
  color: ${colors.inputFont};
  font: 400 1.2rem 'Ubuntu';
  border-radius: 5px;
  border: none;
  ::placeholder {
    color: ${colors.inputPlaceholderFont};
  }
  &:focus {
    outline: none;
  }
`;

export default TaskDescription;
