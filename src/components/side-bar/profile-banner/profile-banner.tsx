import styled from 'styled-components';

import { User } from '../side-bar';

export interface ProfileBannerProps {
  currentUser: User;
  isCollapsed: boolean;
}

const NavLink = styled.a`
  display: contents;
  color: inherit;
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

const StyledProfileBanner = styled.div<{ isCollapsed: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    ${Avatar} {
      width: ${({ isCollapsed }) => (isCollapsed ? '30px' : '42px')};
      margin: ${({ isCollapsed }) => (isCollapsed ? '0 0 0 0' : '0 12px 0 0')};
      padding: ${({ isCollapsed }) => (isCollapsed ? '0 8px' : '0')};
      box-sizing: content-box;
      transition: all 0.2s ease-in-out;
    }

    ${Name} {
      font-size: ${({ isCollapsed }) => (isCollapsed ? '0' : '14px')};
      opacity: ${({ isCollapsed }) => (isCollapsed ? '0' : '1')};
      transition: all 0.2s ease-in-out;
    }

    ${Position} {
      font-size: ${({ isCollapsed }) => (isCollapsed ? '0' : '12px')};
      opacity: ${({ isCollapsed }) => (isCollapsed ? '0' : '1')};
      transition: all 0.2s ease-in-out;
    }
  }
`;

export function ProfileBanner({
  currentUser,
  isCollapsed,
}: ProfileBannerProps) {
  const { avatar, name, position } = currentUser;

  const handleClickProfile = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <StyledProfileBanner
      className="no-select"
      isCollapsed={isCollapsed}
      onClick={handleClickProfile}
    >
      <NavLink href="/profile">
        <Avatar src={avatar} alt={name + '`s avatar'} />

        <InfoWrapper>
          <Name>{name}</Name>

          <Position>{position}</Position>
        </InfoWrapper>
      </NavLink>
    </StyledProfileBanner>
  );
}

export default ProfileBanner;
