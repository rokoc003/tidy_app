import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const FooterIcon = styled.button`
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
`;

function Footer({ links }) {
  return (
    <FooterContainer>
      {links.map((link) => (
        <FooterIcon key={link.Label}>{link.icon}</FooterIcon>
      ))}
    </FooterContainer>
  );
}

Footer.propTypes = {
  links: PropTypes.array,
};

export default Footer;
