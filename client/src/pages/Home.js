import React, { useState } from 'react';
import BottomNavigation from '../components/BottomNavigation';
import PageContainer from '../components/PageContainer';
import Header from '../components/Header';
import House from '../assets/icons/House';
import List from '../assets/icons/List';
import Plus from '../assets/icons/Plus';

function Home() {
  const [activeNavigationItem, setActiveNavigationItem] = useState('Home');

  return (
    <PageContainer>
      <Header />
      <div>Home</div>
      <BottomNavigation
        links={[
          { label: 'List', Icon: List, id: 'list' },
          { label: 'Home', Icon: House, id: 'home' },
          { label: 'Plus', Icon: Plus, id: 'housework' },
        ]}
        isActive={activeNavigationItem}
        onItemClick={(item) => setActiveNavigationItem(item)}
      />
    </PageContainer>
  );
}

export default Home;
