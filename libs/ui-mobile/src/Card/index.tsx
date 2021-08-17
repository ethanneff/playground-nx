import React, { ReactNode } from 'react';
import { View } from 'react-native';
// import { padding } from '@nx/ui-tokens';

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props) => {
  return <View style={{ padding: 4, margin: 2 }}>{children}</View>;
};
