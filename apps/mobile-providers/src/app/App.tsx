import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Card, Text, Button } from '@nx/ui-mobile';
import { Sentry } from '@nx/feature-sentry';
import { Biometrics } from '@nx/feature-biometrics';
import { QueryClient, QueryClientProvider } from 'react-query';

const Component = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Card>
            <Text
              title="hello world"
              emphasis="none"
              type="h2"
              color="positive"
            />
            <Button
              inverse
              title="none"
              color="accent"
              onPress={() => alert('hello')}
            />
          </Card>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const queryClient = new QueryClient();

const App = () => {
  Sentry();
  Biometrics();
  return (
    <QueryClientProvider client={queryClient}>
      <Component />
    </QueryClientProvider>
  );
};

export default App;
