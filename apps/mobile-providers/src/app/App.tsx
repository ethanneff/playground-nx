import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Card, Text, Button } from '@nx/ui-mobile';

const App = () => {
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
