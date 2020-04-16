import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const SVG = styled.svg`
  stroke: #ef1846;
  fill: ${(props) => (props.active ? 'url(#linear-gradient)' : '#fffffc')};
  filter: url(#Icon_awesome-clipboard-list);
`;

function Plus({ active }) {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="35"
      viewBox="-1 0 37 34.875"
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
          id="Icon_awesome-plus-circle"
          x="0"
          y="0"
          width="56.24"
          height="56.775"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood floodpacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <path
        id="Icon_awesome-plus-circle"
        data-name="Icon awesome-plus-circle"
        d="M18,.563A17.438,17.438,0,1,0,35.438,18,17.434,17.434,0,0,0,18,.563ZM28.125,19.969a.846.846,0,0,1-.844.844H20.813v6.469a.846.846,0,0,1-.844.844H16.031a.846.846,0,0,1-.844-.844V20.813H8.719a.846.846,0,0,1-.844-.844V16.031a.846.846,0,0,1,.844-.844h6.469V8.719a.846.846,0,0,1,.844-.844h3.938a.846.846,0,0,1,.844.844v6.469h6.469a.846.846,0,0,1,.844.844Z"
        transform="translate(-0.563 -0.563)"
      />
    </SVG>
  );
}

Plus.propTypes = {
  active: PropTypes.bool,
};

export default Plus;
