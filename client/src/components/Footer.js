import React from 'react';
import styled from '@emotion/styled';
import HomeIcon from '../assets/icons/Icon-home.svg';
import ListIcon from '../assets/icons/Icon-list.svg';
import CreateIcon from '../assets/icons/Icon-plus-circle.svg';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const FooterIcon = styled.input`
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const Footer = () => (
  <FooterContainer>
    <FooterIcon
      type="image"
      src={ListIcon}
      alt="icon which represents a clipboard"
    />
    <FooterIcon
      type="image"
      src={HomeIcon}
      alt="icon which represents a house"
    />
    <FooterIcon
      type="image"
      src={CreateIcon}
      alt="icon which represents a plus sign"
    />
  </FooterContainer>
);

export default Footer;
