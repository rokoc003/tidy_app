import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const SVG = styled.svg`
  stroke: #ef1846;
  fill: ${(props) => (props.active ? 'url(#linear-gradient)' : '#fffffc')};
  filter: url(#Icon_awesome-clipboard-list);
`;

function List({ active }) {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="38"
      viewBox="-3 0 35 38"
      active={active}
    >
      <defs>
        <filter
          id="Icon_awesome-clipboard-list"
          x="0"
          y="0"
          width="53.967"
          height="60.771"
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
        id="Icon_awesome-clipboard-list"
        data-name="Icon awesome-clipboard-list"
        d="M23.625,4.5H18a4.5,4.5,0,0,0-9,0H3.375A3.376,3.376,0,0,0,0,7.875v24.75A3.376,3.376,0,0,0,3.375,36h20.25A3.376,3.376,0,0,0,27,32.625V7.875A3.376,3.376,0,0,0,23.625,4.5ZM6.75,29.813a1.688,1.688,0,1,1,1.688-1.687A1.683,1.683,0,0,1,6.75,29.813Zm0-6.75a1.688,1.688,0,1,1,1.688-1.687A1.683,1.683,0,0,1,6.75,23.063Zm0-6.75a1.688,1.688,0,1,1,1.688-1.687A1.683,1.683,0,0,1,6.75,16.313Zm6.75-13.5A1.688,1.688,0,1,1,11.813,4.5,1.683,1.683,0,0,1,13.5,2.813Zm9,25.875a.564.564,0,0,1-.562.563H11.813a.564.564,0,0,1-.562-.562V27.563A.564.564,0,0,1,11.813,27H21.938a.564.564,0,0,1,.563.563Zm0-6.75a.564.564,0,0,1-.562.563H11.813a.564.564,0,0,1-.562-.562V20.813a.564.564,0,0,1,.563-.562H21.938a.564.564,0,0,1,.563.563Zm0-6.75a.564.564,0,0,1-.562.563H11.813a.564.564,0,0,1-.562-.562V14.063a.564.564,0,0,1,.563-.562H21.938a.564.564,0,0,1,.563.563Z"
      />
    </SVG>
  );
}

List.propTypes = {
  active: PropTypes.bool,
};

export default List;
