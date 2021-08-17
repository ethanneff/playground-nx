import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { padding, lightTheme } from '@nx/ui-tokens';

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props) => {
  return (
    <View
      style={{
        padding: padding(4),
        margin: padding(2),
        borderRadius: padding(2),
        borderWidth: 2,
        borderColor: lightTheme.border.secondary,
        backgroundColor: lightTheme.background.secondary,
      }}
    >
      {children}
    </View>
  );
};
