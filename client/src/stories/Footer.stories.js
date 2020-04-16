import React from 'react';
import Footer from '../components/Footer';
import Home from '../assets/icons/Home';
import List from '../assets/icons/List';
import Plus from '../assets/icons/Plus';

export default {
  title: 'Footer',
  component: 'Footer',
};

export const Default = () => {
  return (
    <Footer
      links={[
        { label: 'Home', icon: <Home /> },
        { label: 'List', icon: <List /> },
        { label: 'Plus', icon: <Plus /> },
      ]}
    />
  );
};
