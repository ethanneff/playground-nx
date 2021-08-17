import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  FontEmphasis,
  MonoMultiColor,
  FontType,
  fontSizes,
  colorWithOpacity,
  fontEmphases,
  padding,
  lightTheme,
} from '@nx/ui-tokens';
import { Text } from '../Text';

type Props = {
  title: string;
  type?: FontType;
  emphasis?: FontEmphasis;
  color?: keyof MonoMultiColor;
  onPress: () => void;
  inverse?: boolean;
};

export const Button = ({
  title,
  type = 'button',
  color = 'primaryA',
  emphasis = 'none',
  inverse,
  onPress,
}: Props) => {
  const textColor = inverse ? 'primaryB' : 'primaryA';
  const backgroundColor = colorWithOpacity(
    lightTheme.background[color],
    fontEmphases[emphasis]
  );
  const style = {
    ...fontSizes[type],
    alignSelf: 'center',
    borderRadius: padding(2),
    backgroundColor,
    paddingHorizontal: padding(4),
    paddingVertical: padding(2),
  };
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text title={title} type={type} color={textColor} emphasis={emphasis} />
    </TouchableOpacity>
  );
};
