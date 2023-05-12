import styled from 'styled-components';

import SideBar from 'src/components/side-bar/side-bar';
import CustomersPage from 'src/components/pages/customers-page/customers-page';
import PageContainer from 'src/components/common/page-container/page-container';

const StyledApp = styled.div`
  height: 100vh;
  height: 100svh;
  height: 100dvh;
  display: flex;
`;

export function App() {
  return (
    <StyledApp>
      <SideBar />

      <PageContainer>
        <CustomersPage />
      </PageContainer>
    </StyledApp>
  );
}

export default App;
