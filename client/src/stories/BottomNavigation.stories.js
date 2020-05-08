import React from 'react';
import BottomNavigation from '../components/BottomNavigation';
import House from '../assets/icons/House';
import List from '../assets/icons/List';
import Plus from '../assets/icons/Plus';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'BottomNavigation',
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <BottomNavigation
      links={[
        { label: 'Home', Icon: House },
        { label: 'List', Icon: List },
        { label: 'Plus', Icon: Plus },
      ]}
      isActive={text('value', 'Home')}
      onItemClick={action('item-click')}
    />
  );
};
