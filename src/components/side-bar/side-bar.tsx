import { useMemo, useState } from 'react';
import styled from 'styled-components';

import SideBarHeader from './side-bar-header/side-bar-header';
import Navigation from './navigation/navigation';

import userAvatar from 'src/assets/images/user-avatar.jpg';
import ProfileBanner from './profile-banner/profile-banner';
import useWindowSize from '../common/hooks/useWidth';

import { ReactComponent as ArrowRightIcon } from 'src/assets/images/nav-icons/arrow-right-icon.svg';

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

const StyledSideBar = styled.aside<{ isCollapsed: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  height: 100vh;
  padding: 36px 28px 76px;
  flex-shrink: 0;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1024px) {
    padding: 28px 15px 36px;
  }

  @media (max-width: 768px) {
    transition: padding 0.2s ease-in-out;
    padding: ${({ isCollapsed }) =>
      isCollapsed ? '20px 0 20px' : '20px 15px 20px'};
  }
`;

const CollapseToggleButton = styled.button`
  display: flex;
  align-items: center;
  min-width: 250px;
  padding: 11px 8px 11px 11px;
  background: transparent;
  border: none;
  outline: none;
  color: #9197b3;
  transition: background 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }

  &:not(:last-child) {
    margin: 0 0 18px 0;
  }
`;

const CollapseToggleIconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  color: inherit;
  transition: margin 0.2s ease-in-out;
`;

const StyledArrowRightIcon = styled(ArrowRightIcon)`
  transition: transform 0.2s ease-in-out;

  &:first-of-type {
    margin-right: -8px;
  }
`;

const CollapseToggleText = styled.span`
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: inherit;
  margin: 1px auto 0 0;
  transition: all 0.2s ease-in-out;
`;

const CollapseBtnWrapper = styled.div<{ isCollapsed: boolean }>`
  margin: 24px 0 0 0;

  ${CollapseToggleButton} {
    border-radius: ${({ isCollapsed }) => (isCollapsed ? '0' : '8px')};
  }

  ${CollapseToggleText} {
    font-size: ${({ isCollapsed }) => (isCollapsed ? '0' : '14px')};
    opacity: ${({ isCollapsed }) => (isCollapsed ? '0' : '1')};
  }

  ${CollapseToggleIconWrapper} {
    margin: ${({ isCollapsed }) => (isCollapsed ? '0' : '0 14px 0 0')};
  }

  ${StyledArrowRightIcon} {
    transform: ${({ isCollapsed }) =>
      isCollapsed ? 'scaleX(1)' : 'scaleX(-1)'};
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
  const { width } = useWindowSize();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const isMobile = useMemo(() => width <= 768, [width]);

  const handleOnClickToggleCollapseBtn = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <StyledSideBar isCollapsed={isCollapsed}>
      <SideBarHeader isMobile={isMobile} isCollapsed={isCollapsed} />

      <Navigation
        isMobile={isMobile}
        isCollapsed={isCollapsed}
        pageList={pageList}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <ProfileBanner
        currentUser={currentUser}
        isMobile={isMobile}
        isCollapsed={isCollapsed}
      />

      {isMobile && (
        <CollapseBtnWrapper isCollapsed={isCollapsed}>
          <CollapseToggleButton onClick={handleOnClickToggleCollapseBtn}>
            <CollapseToggleIconWrapper>
              <StyledArrowRightIcon />
              <StyledArrowRightIcon />
            </CollapseToggleIconWrapper>
            <CollapseToggleText>Collapse</CollapseToggleText>
          </CollapseToggleButton>
        </CollapseBtnWrapper>
      )}
    </StyledSideBar>
  );
}

export default SideBar;
