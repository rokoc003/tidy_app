import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createHousehold } from '../api/household';
import DeleteIcon from '../assets/icons/Icon-trash.svg';
import InputCircle from '../components/InputCircle';
import InputLine from '../components/InputLine';
import InputContainer from '../components/InputContainer';
import InputCaption from '../components/InputCaption';
import Header from '../components/Header';
import PageCaption from '../components/PageCaption';
import Button from '../components/Button';
import ButtonContainer from '../components/ButtonContainer';
import Form from '../components/Form';
import Wrapper from '../components/Wrapper';
import PageContainer from '../components/PageContainer';
import styled from '@emotion/styled';

const DeleteButton = styled.img`
  display: flex;
  justify-content: center;
  width: 20px;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
`;

function Household() {
  const [name, setName] = useState('');
  const [rooms, setRooms] = useState([]);
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState('');
  const [room, setRoom] = useState('');

  function addToRoomList(newRoom) {
    const newItem = [...rooms, newRoom];
    setRooms(newItem);
  }

  function addToMemberList(newMember) {
    const newItem = [...members, newMember];
    setMembers(newItem);
  }

  const handleSubmitRoom = (event) => {
    event.preventDefault();
    if (!room) return;
    addToRoomList(room);
    setRoom('');
  };

  const handleSubmitMember = (event) => {
    event.preventDefault();
    if (!member) return;
    addToMemberList(member);
    setMember('');
  };

  const handleDeleteRoom = (index) => {
    const newRooms = [...rooms];
    newRooms.splice(index, 1);
    setRooms(newRooms);
  };

  const handleDeleteMember = (index) => {
    const newMembers = [...members];
    newMembers.splice(index, 1);
    setMembers(newMembers);
  };

  return (
    <PageContainer>
      <Wrapper>
        <Header />
        <PageCaption>Your household</PageCaption>
      </Wrapper>
      <InputContainer>
        <InputCircle
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter householdname"
        />
      </InputContainer>
      <InputContainer>
        <InputCaption>Create household</InputCaption>
        <Form onSubmit={handleSubmitRoom}>
          <InputLine
            value={room}
            onChange={(event) => setRoom(event.target.value)}
            placeholder="Add room"
          />
        </Form>
        {rooms.map((room, index) => (
          <>
            <span key={index} room={room}>
              {room}
            </span>
            <DeleteButton
              src={DeleteIcon}
              onClick={() => {
                handleDeleteRoom(index);
              }}
            />
          </>
        ))}
      </InputContainer>
      <InputContainer>
        <InputCaption>Household members</InputCaption>
        <Form onSubmit={handleSubmitMember}>
          <InputLine
            value={member}
            onChange={(event) => setMember(event.target.value)}
            placeholder="Add name"
          />
        </Form>
        {members.map((member, index) => (
          <>
            <span key={index} member={member}>
              {member}
            </span>
            <DeleteButton
              src={DeleteIcon}
              onClick={() => {
                handleDeleteMember(index);
              }}
            />
          </>
        ))}
      </InputContainer>
      <ButtonContainer>
        <Button
          onClick={() => {
            createHousehold({ name, rooms, members });
          }}
        >
          Submit
        </Button>
      </ButtonContainer>
    </PageContainer>
  );
}

Household.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  onClick: PropTypes.func,
};
export default Household;
