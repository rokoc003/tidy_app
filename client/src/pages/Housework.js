import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import PageCaption from '../components/PageCaption';
import ButtonContainer from '../components/ButtonContainer';
import Button from '../components/Button';
import InputContainer from '../components/InputContainer';
import InputLine from '../components/InputLine';
import DateInputWithCaption from '../components/DateInputWithCaption';
import CaptionWrapper from '../components/CaptionWrapper';
import TaskDescription from '../components/TaskDescription';
import Select from '../components/Select';
import { ReactComponent as ArrowButton } from '../assets/icons/Icon-arrow.svg';

function Housework() {
  const [taskname, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <PageContainer>
      <CaptionWrapper>
        <Link to="/home">
          <ArrowButton />
        </Link>
        <PageCaption>Plan your housework</PageCaption>
      </CaptionWrapper>
      <InputContainer>
        <InputLine
          value={taskname}
          onChange={(event) => setTaskName(event.target.value)}
          type="text"
          placeholder="Taskname"
        />
      </InputContainer>
      <InputContainer>
        <TaskDescription
          rows="8"
          cols="27"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Please make a precise description"
        />
      </InputContainer>
      <InputContainer>
        <Select name="members">
          <option value="jane">Household member</option>
          <option value="jane">Jane</option>
          <option value="john">John</option>
        </Select>
      </InputContainer>
      <InputContainer>
        <Select name="rooms">
          <option value="">Room</option>
          <option value="bathroom">bathroom</option>
          <option value="living room">living room</option>
          <option value="kitchen">kitchen</option>
        </Select>
      </InputContainer>
      <DateInputWithCaption />
      <ButtonContainer>
        <Button>Create Task</Button>
      </ButtonContainer>
    </PageContainer>
  );
}

export default Housework;
