import styled from 'styled-components';
import { Card, Button, Text } from '@nx/ui-web';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Sentry } from '@nx/feature-sentry';

const StyledPage = styled.div`
  .page {
  }
`;

const Component = () => {
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
};

const queryClient = new QueryClient();

const App = () => {
  Sentry();
  return (
    <QueryClientProvider client={queryClient}>
      <Component />
    </QueryClientProvider>
  );
};

export default App;
