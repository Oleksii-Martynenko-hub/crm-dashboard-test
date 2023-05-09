import styled from 'styled-components';

import settingsIcon from 'src/assets/images/setting-icon.svg';

/* eslint-disable-next-line */
export interface SideBarHeaderProps {}

const StyledSideBarHeader = styled.header`
  display: flex;
  align-items: center;
  margin: 0 0 53px 0;
`;

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

export function SideBarHeader(props: SideBarHeaderProps) {
  return (
    <StyledSideBarHeader>
      <SettingsIcon src={settingsIcon} alt="settings icon" />

      <Title>Dashboard</Title>

      <VersionText>v.01</VersionText>
    </StyledSideBarHeader>
  );
}

export default SideBarHeader;
