import { useState } from 'react';
import styled from 'styled-components';

import SideBarHeader from './side-bar-header/side-bar-header';
import Navigation from './navigation/navigation';

import userAvatar from 'src/assets/images/user-avatar.jpg';
import ProfileBanner from './profile-banner/profile-banner';

export interface PageList {
  icon: string;
  title: string;
  href: string;
}

export interface User {
  avatar: string;
  name: string;
  position: string;
}

/* eslint-disable-next-line */
export interface SideBarProps {}

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  height: 100vh;
  padding: 36px 28px 76px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export function SideBar(props: SideBarProps) {
  const pageList: PageList[] = [
    {
      icon: 'key-square-icon',
      title: 'Dashboard',
      href: '/',
    },
    {
      icon: 'cube-square-icon',
      title: 'Product',
      href: '/product',
    },
    {
      icon: 'user-square-icon',
      title: 'Customers',
      href: '/customers',
    },
    {
      icon: 'wallet-money-icon',
      title: 'Income',
      href: '/income',
    },
    {
      icon: 'discount-shape-icon',
      title: 'Promote',
      href: '/promote',
    },
    {
      icon: 'message-question-icon',
      title: 'Help',
      href: '/help',
    },
  ];

  const currentUser: User = {
    avatar: userAvatar,
    name: 'Evano',
    position: 'Project Manager',
  };

  const [activePage, setActivePage] = useState(pageList[2].href);

  return (
    <StyledSideBar>
      <SideBarHeader />

      <Navigation
        pageList={pageList}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <ProfileBanner currentUser={currentUser} />
    </StyledSideBar>
  );
}

export default SideBar;
