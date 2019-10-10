import styled from 'styled-components';
import { system } from 'styled-system';

interface PageLayoutProps {
  readonly mx: Array<number>;
};

const PageLayout = styled.div<PageLayoutProps>`
  margin: 0 auto;

  ${system({
    mx: {
      property: 'maxWidth',
      transform: (mx) => `calc(100vw - ${mx}px)`,
    }
  })}
`;

const PlaceHolder = styled.div`
  height: 80px;
  line-height: 80px;

  font-size: 20px;
  font-weight: 500;
`;

export default ({ children } : { children: any }) => (
  <PageLayout mx={[0,0,200]}>
    <PlaceHolder>GOAT APP HEADER PLACEHOLDER</PlaceHolder>
    <div>
      {children}
    </div>

    <PlaceHolder>GOAT APP FOOTER PLACEHOLDER</PlaceHolder>
  </PageLayout>
);


