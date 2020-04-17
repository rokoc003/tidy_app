import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
`;

const NavigationItem = styled.button`
  display: flex;
  justify-content: center;
  min-width: 100px;
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
        <NavigationItem
          key={link.label}
          active={isActive === link.label}
          onClick={() => onItemClick(link.label)}
        >
          <link.Icon active={isActive === link.label} />
        </NavigationItem>
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
