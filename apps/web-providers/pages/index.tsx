import styled from 'styled-components';
import { Card, Button, Text } from '@nx/ui-web';
import { Sentry } from '@nx/feature-sentry';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  Sentry();
  return (
    <StyledPage>
      <Card>
        <Text title="hello world" emphasis="none" type="h1" color="positive" />
        <Button
          title="none"
          color="accent"
          inverse
          onClick={() => alert('hello')}
        />
      </Card>
    </StyledPage>
  );
}

export default Index;
