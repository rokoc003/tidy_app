import React, { useState } from 'react';
import { createHousehold } from '../api/household';
import { Link } from 'react-router-dom';
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
import DeleteButton from '../components/DeleteButton';
import ListItem from '../components/ListItem';
import ListWrapper from '../components/ListWrapper';

function Household() {
  const [name, setName] = useState('');
  const [rooms, setRooms] = useState([]);
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState('');
  const [room, setRoom] = useState('');

  function addToRoomList(newRoom) {
    const newRooms = [...rooms, newRoom];
    setRooms(newRooms);
  }

  function addToMemberList(newMember) {
    const newMembers = [...members, newMember];
    setMembers(newMembers);
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

  const handleDeleteRoom = (room) => {
    const newRooms = [...rooms];
    newRooms.splice(newRooms.indexOf(room), 1);
    setRooms(newRooms);
  };

  const handleDeleteMember = (member) => {
    const newMembers = [...members];
    newMembers.splice(newMembers.indexOf(member), 1);
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
        {rooms.map((room) => (
          <ListWrapper key={room}>
            <ListItem>{room}</ListItem>
            <DeleteButton
              src={DeleteIcon}
              onClick={() => {
                handleDeleteRoom(room);
              }}
            />
          </ListWrapper>
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
        {members.map((member) => (
          <ListWrapper key={member}>
            <ListItem>{member}</ListItem>
            <DeleteButton
              src={DeleteIcon}
              onClick={() => {
                handleDeleteMember(member);
              }}
            />
          </ListWrapper>
        ))}
      </InputContainer>
      <ButtonContainer>
        <Link to="/home">
          <Button
            onClick={() => {
              createHousehold({ name, rooms, members });
            }}
          >
            Submit
          </Button>
        </Link>
      </ButtonContainer>
    </PageContainer>
  );
}

export default Household;
