import React from 'react';
import Footer from '../components/Footer';
import Home from '../assets/icons/Home';
import List from '../assets/icons/List';
import Plus from '../assets/icons/Plus';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Footer',
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <Footer
      links={[
        { label: 'Home', Icon: Home },
        { label: 'List', Icon: List },
        { label: 'Plus', Icon: Plus },
      ]}
      isActive={text('value', 'Home')}
      onItemClick={action('item-click')}
    />
  );
};
