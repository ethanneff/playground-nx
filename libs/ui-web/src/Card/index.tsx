import { ReactNode } from 'react';
import { lightTheme, padding } from '@nx/ui-tokens';

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props) => {
  return (
    <div
      style={{
        padding: padding(4),
        margin: padding(2),
        borderRadius: padding(4),
        borderStyle: 'solid',
        border: `1px solid ${lightTheme.border.secondary}`,
        backgroundColor: lightTheme.background.secondary,
      }}
    >
      {children}
    </div>
  );
};
