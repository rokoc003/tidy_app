import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
`;

const FooterIcon = styled.button`
  display: flex;
  justify-content: center;
  min-width: 100px;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
`;

function Footer({ links, isActive, onItemClick }) {
  return (
    <FooterContainer>
      {links.map((link) => (
        <FooterIcon
          key={link.label}
          active={isActive === link.label}
          onClick={() => onItemClick(link.label)}
        >
          <link.Icon active={isActive === link.label} />
        </FooterIcon>
      ))}
    </FooterContainer>
  );
}

Footer.propTypes = {
  links: PropTypes.array,
  isActive: PropTypes.string,
  onItemClick: PropTypes.func,
};

export default Footer;
