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
`;

export function PageContainer(props: PageContainerProps) {
  return <StyledPageContainer>{props.children}</StyledPageContainer>;
}

export default PageContainer;
