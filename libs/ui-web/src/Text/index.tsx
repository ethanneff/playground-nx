import React from 'react';
import { Text as Original } from 'react-native';
import {
  FontEmphasis,
  MonoMultiColor,
  FontType,
  fontSizes,
  colorWithOpacity,
  fontEmphases,
  lightTheme,
} from '@nx/ui-tokens';

type Props = {
  title: string;
  type?: FontType;
  emphasis?: FontEmphasis;
  color?: keyof MonoMultiColor;
};

export const Text = ({
  title,
  type = 'body2',
  color = 'primaryA',
  emphasis = 'none',
}: Props) => {
  const textColor = colorWithOpacity(
    lightTheme.text[color],
    fontEmphases[emphasis]
  );
  const style = { ...fontSizes[type], color: textColor };
  return <p style={style}>{title}</p>;
};
