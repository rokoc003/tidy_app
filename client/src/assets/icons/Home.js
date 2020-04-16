import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const SVG = styled.svg`
  stroke: #ef1846;
  fill: ${(props) => (props.active ? 'url(#linear-gradient)' : '#fffffc')};
  filter: url(#Icon_awesome-home);
`;

function Home({ active }) {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="31.496"
      viewBox="-1 0 42 31.496"
      active={active}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#fb8777" />
          <stop offset="1" stopColor="#ef1846" />
        </linearGradient>
        <filter
          id="Icon_awesome-home"
          x="0"
          y="0"
          width="66.534"
          height="56.9"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood floodOpacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <path
        id="Icon_awesome-home"
        data-name="Icon awesome-home"
        d="M19.714,10.425,6.75,21.1V32.625A1.125,1.125,0,0,0,7.875,33.75l7.879-.02A1.125,1.125,0,0,0,16.874,32.6v-6.73A1.125,1.125,0,0,1,18,24.75h4.5a1.125,1.125,0,0,1,1.125,1.125V32.6a1.125,1.125,0,0,0,1.125,1.129l7.876.022a1.125,1.125,0,0,0,1.125-1.125V21.094L20.789,10.425A.857.857,0,0,0,19.714,10.425Zm20.477,7.257-5.878-4.845V3.1a.844.844,0,0,0-.844-.844H29.531a.844.844,0,0,0-.844.844V8.2l-6.3-5.179a3.375,3.375,0,0,0-4.289,0L.305,17.681A.844.844,0,0,0,.193,18.87l1.793,2.18a.844.844,0,0,0,1.189.115L19.714,7.542a.857.857,0,0,1,1.076,0l16.54,13.622a.844.844,0,0,0,1.188-.112l1.793-2.18a.844.844,0,0,0-.12-1.19Z"
        transform="translate(0.001 -2.254)"
      />
    </SVG>
  );
}

Home.propTypes = {
  active: PropTypes.bool,
};

export default Home;
