import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`
  stroke: #ef1846;
  fill: ${(props) => (props.active ? 'url(#linear-gradient)' : '#fffffc')};
  filter: url(#Icon_awesome-home);
`;

function CheckCircle() {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="35.484"
      height="35.65"
      viewBox="0 0 35.484 35.65"
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
          id="Icon_material-check-circle"
          x="0"
          y="0"
          width="35.484"
          height="35.65"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feFlood floodOpacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <path
        id="Icon_material-check-circle-2"
        data-name="Icon material-check-circle"
        d="M14.242,3A11.325,11.325,0,1,0,25.484,14.325,11.288,11.288,0,0,0,14.242,3ZM11.994,19.988,6.373,14.325l1.585-1.6,4.036,4.054,8.533-8.6L22.111,9.8Z"
        transform="translate(3.5 0.5)"
      />
    </SVG>
  );
}

export default CheckCircle;
