import styled from 'styled-components';
import { Card, Button, Text } from '@nx/ui-web';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return (
    <StyledPage>
      <Card>
        <Text title="hello world" emphasis="none" type="h2" color="positive" />
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
