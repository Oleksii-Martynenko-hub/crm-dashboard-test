import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PageContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const StyledPageContainer = styled.main`
  height: 100dvh;
  height: 100vh;
  padding: 41px 95px 41px 71px;
  background-color: #fafbff;
  flex: auto;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1024px) {
    padding: 26px 35px 31px 31px;
  }

  @media (max-width: 768px) {
    padding: 20px 0px 0px 47px;
  }
`;

export function PageContainer(props: PageContainerProps) {
  return <StyledPageContainer>{props.children}</StyledPageContainer>;
}

export default PageContainer;
