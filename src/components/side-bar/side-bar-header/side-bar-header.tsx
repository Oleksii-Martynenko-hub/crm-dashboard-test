import styled from 'styled-components';

import settingsIcon from 'src/assets/images/setting-icon.svg';

export interface SideBarHeaderProps {
  isCollapsed: boolean;
}

const SettingsIcon = styled.img`
  margin: 0 8px 0 0;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  letter-spacing: 0.01em;
  color: #000000;
  margin: 1px 4px 0 0;
`;

const VersionText = styled.p`
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.01em;
  color: #838383;
  margin-top: 11px;
`;

const StyledSideBarHeader = styled.header<{ isCollapsed: boolean }>`
  display: flex;
  align-items: center;
  margin: 0 0 53px 0;

  @media (max-width: 768px) {
    margin: 0 0 33px 0;

    ${SettingsIcon} {
      width: ${({ isCollapsed }) => (isCollapsed ? '28px' : '37px')};
      padding: ${({ isCollapsed }) => (isCollapsed ? '0 9px' : '0')};
      margin: ${({ isCollapsed }) => (isCollapsed ? '0' : '0 8px 0 0')};
      box-sizing: content-box;
      transition: all 0.2s ease-in-out;
    }

    ${Title} {
      transition: all 0.2s ease-in-out;
      font-size: ${({ isCollapsed }) => (isCollapsed ? '0' : '26px')};
      opacity: ${({ isCollapsed }) => (isCollapsed ? '0' : '1')};
      margin: ${({ isCollapsed }) =>
        isCollapsed ? '1px 0 0 0' : '1px 4px 0 0'};
    }
    ${VersionText} {
      transition: all 0.2s ease-in-out;
      font-size: ${({ isCollapsed }) => (isCollapsed ? '0' : '10px')};
      opacity: ${({ isCollapsed }) => (isCollapsed ? '0' : '1')};
    }
  }
`;

export function SideBarHeader({ isCollapsed }: SideBarHeaderProps) {
  return (
    <StyledSideBarHeader isCollapsed={isCollapsed}>
      <SettingsIcon src={settingsIcon} alt="settings icon" />

      <Title>Dashboard</Title>

      <VersionText>v.01</VersionText>
    </StyledSideBarHeader>
  );
}

export default SideBarHeader;
