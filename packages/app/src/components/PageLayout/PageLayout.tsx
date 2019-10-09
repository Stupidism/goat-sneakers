import styled from 'styled-components';

const PageLayout = styled.div`
  max-width: calc(100vw - 200px);
  margin: 0 auto;
`;

const AppBar = styled.div`
  height: 80px;
  line-height: 80px;

  font-size: 20px;
  font-weight: 500;
`;

export default ({ children } : { children: any }) => (
  <PageLayout>
    <AppBar>GOAT APP HEADER PLACEHOLDER</AppBar>
    <div>
      {children}
    </div>
  </PageLayout>
);


