import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
`;

const NavigationItem = styled.button`
  display: flex;
  justify-content: center;
  min-width: 100px;
  background: transparent;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
`;

function BottomNavigation({ links, isActive, onItemClick }) {
  return (
    <Container>
      {links.map((link) => (
        <Link to={`/${link.id}`} key={link.id}>
          <NavigationItem
            id={link.id}
            active={isActive === link.label}
            onClick={() => onItemClick(link.label)}
          >
            <link.Icon active={isActive === link.label} />
          </NavigationItem>
        </Link>
      ))}
    </Container>
  );
}

BottomNavigation.propTypes = {
  links: PropTypes.array,
  isActive: PropTypes.string,
  onItemClick: PropTypes.func,
};

export default BottomNavigation;
