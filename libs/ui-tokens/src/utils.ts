export const isReactNative =
  typeof navigator != 'undefined' && navigator?.product === 'ReactNative';

export const padding = (value: number): number | string => getPx(value * 4);

export const colorWithOpacity = (colorCode: string, opacity = 0.5): string => {
  const boundedOpacity = opacity < 0 ? 0 : opacity > 1 ? 1 : opacity;
  const leading = 4;
  if (!colorCode || !colorCode.startsWith('hsl')) return colorCode;
  const substr = colorCode.substring(leading, colorCode.length - 1);
  return `hsla(${substr}, ${boundedOpacity})`;
};

export const getPx = (value: number): number | string =>
  isReactNative ? value : `${value}px`;
