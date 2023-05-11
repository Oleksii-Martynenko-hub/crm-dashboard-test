import styled from 'styled-components';

import { PageList } from '../side-bar';

import { ReactComponent as KeySquareIcon } from 'src/assets/images/nav-icons/key-square-icon.svg';
import { ReactComponent as CubeSquareIcon } from 'src/assets/images/nav-icons/cube-square-icon.svg';
import { ReactComponent as UserSquareIcon } from 'src/assets/images/nav-icons/user-square-icon.svg';
import { ReactComponent as WalletMoneyIcon } from 'src/assets/images/nav-icons/wallet-money-icon.svg';
import { ReactComponent as DiscountShapeIcon } from 'src/assets/images/nav-icons/discount-shape-icon.svg';
import { ReactComponent as MessageQuestionIcon } from 'src/assets/images/nav-icons/message-question-icon.svg';
import { ReactComponent as ArrowRightIcon } from 'src/assets/images/nav-icons/arrow-right-icon.svg';

const icons = {
  'key-square-icon': KeySquareIcon,
  'cube-square-icon': CubeSquareIcon,
  'user-square-icon': UserSquareIcon,
  'wallet-money-icon': WalletMoneyIcon,
  'discount-shape-icon': DiscountShapeIcon,
  'message-question-icon': MessageQuestionIcon,
} as { [key: string]: any };

export interface NavigationProps {
  isCollapsed: boolean;
  pageList: PageList[];
  activePage: string;
  setActivePage: (page: string) => void;
}

const StyledNavigation = styled.ul`
  margin-bottom: auto;
`;

const NavLink = styled.a`
  color: inherit;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const NavIconWrapper = styled.div`
  height: 24px;
  color: inherit;
  margin: 0 14px 0 0;
`;

const NavText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: inherit;
  margin: 1px auto 0 0;
`;

const StyledArrowRightIcon = styled(ArrowRightIcon)`
  width: 16px;
`;

const NavItem = styled.li<{ dataActive: boolean; isCollapsed: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 250px;
  padding: 11px 8px 11px 11px;
  background: ${({ dataActive }) => (dataActive ? '#5932ea' : 'transparent')};
  border-radius: 8px;
  color: ${({ dataActive }) => (dataActive ? '#ffffff' : '#9197b3')};
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({ dataActive }) => (dataActive ? '#6a46ed' : '#f5f5f5')};
  }

  &:not(:last-child) {
    margin: 0 0 18px 0;
  }

  @media (max-width: 768px) {
    padding: ${({ isCollapsed }) =>
      isCollapsed ? '11px' : '11px 8px 11px 11px'};
    min-width: ${({ isCollapsed }) => (isCollapsed ? '0' : '250px')};
    border-radius: ${({ isCollapsed }) => (isCollapsed ? '0' : '8px')};
    transition: all 0.2s ease-in-out;

    ${NavIconWrapper} {
      transition: margin 0.2s ease-in-out;
      margin: ${({ isCollapsed }) => (isCollapsed ? '0' : '0 14px 0 0')};
    }

    ${NavText} {
      transition: all 0.2s ease-in-out;
      font-size: ${({ isCollapsed }) => (isCollapsed ? '0' : '14px')};
      opacity: ${({ isCollapsed }) => (isCollapsed ? '0' : '1')};
    }

    ${StyledArrowRightIcon} {
      transition: all 0.2s ease-in-out;
      width: ${({ isCollapsed }) => (isCollapsed ? '0' : '16px')};
      opacity: ${({ isCollapsed }) => (isCollapsed ? '0' : '1')};
    }
  }
`;

export function Navigation({
  isCollapsed,
  pageList,
  activePage,
  setActivePage,
}: NavigationProps) {
  const handleOnClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (activePage === page) return;

    setActivePage(page);
  };

  return (
    <StyledNavigation>
      {pageList.map(({ icon, title, href }) => {
        const Icon = icons[icon];

        return (
          <NavItem
            key={href}
            className="no-select"
            isCollapsed={isCollapsed}
            dataActive={activePage === href}
            onClick={handleOnClick(href)}
          >
            <NavLink href={href} />
            <NavIconWrapper>
              <Icon />
            </NavIconWrapper>
            <NavText>{title}</NavText>
            <StyledArrowRightIcon />
          </NavItem>
        );
      })}
    </StyledNavigation>
  );
}

export default Navigation;
