import styled from 'styled-components';

import { User } from '../side-bar';

export interface ProfileBannerProps {
  currentUser: User;
  isMobile: boolean;
  isCollapsed: boolean;
}

const StyledProfileBanner = styled.div`
  display: flex;
  align-items: center;
`;

const InfoWrapper = styled.p``;

const Avatar = styled.img`
  width: 42px;
  aspect-ratio: 1;
  border-radius: 50%;
  margin: 0 12px 0 0;
`;

const Name = styled.span`
  display: block;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.01em;
  color: #000000;
`;

const Position = styled(Name)`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #757575;
`;

export function ProfileBanner({ currentUser }: ProfileBannerProps) {
  const { avatar, name, position } = currentUser;

  return (
    <StyledProfileBanner>
      <Avatar src={avatar} alt={name + '`s avatar'} />

      <InfoWrapper>
        <Name>{name}</Name>

        <Position>{position}</Position>
      </InfoWrapper>
    </StyledProfileBanner>
  );
}

export default ProfileBanner;
