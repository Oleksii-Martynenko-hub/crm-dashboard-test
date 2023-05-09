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
  pageList: PageList[];
  activePage: string;
  setActivePage: (page: string) => void;
}

const StyledNavigation = styled.ul`
  margin-bottom: auto;
`;

const NavItem = styled.li<{ dataActive: boolean }>`
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
`;

const NavLink = styled.a`
  display: contents;
  color: inherit;
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

export function Navigation({
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
            dataActive={activePage === href}
            onClick={handleOnClick(href)}
          >
            <NavLink href={href}>
              <NavIconWrapper>
                <Icon />
              </NavIconWrapper>
              <NavText>{title}</NavText>
              <ArrowRightIcon />
            </NavLink>
          </NavItem>
        );
      })}
    </StyledNavigation>
  );
}

export default Navigation;
