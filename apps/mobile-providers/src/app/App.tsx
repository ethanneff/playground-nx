import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Card, Text, Button } from '@nx/ui-mobile';
import { Biometrics } from '@nx/feature-biometrics';
import { User } from '@nx/data-access';
import { Sentry } from '@nx/feature-sentry';

const App = () => {
  Biometrics();
  User();
  Sentry();
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

export default App;
