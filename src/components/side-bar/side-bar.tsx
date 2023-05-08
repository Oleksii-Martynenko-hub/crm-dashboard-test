import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SideBarProps {}

const StyledSideBar = styled.div`
  height: 100dvh;
  height: 100vh;
  padding: 36px 28px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export function SideBar(props: SideBarProps) {
  return (
    <StyledSideBar>
      {/* 
      1. SideBar title
       */}

      <h1>Welcome to SideBar!</h1>
      <p>This is a SideBar component.</p>
      {/* 
      2. SideBar navigation
       */}
      <ul>
        <li>Home</li>
        <li>About</li>

        <li>Contact</li>
        <li>Profile</li>
        <li>Login</li>
        <li>Register</li>
      </ul>

      {/* 
      3. Profile
       */}
      <div>
        <img src="https://picsum.photos/100/100" alt="" />
        <h3>Name</h3>
        <p>Email</p>
      </div>
    </StyledSideBar>
  );
}

export default SideBar;
