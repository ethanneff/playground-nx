import { lightTheme, MonoMultiColor, padding } from '@nx/ui-tokens';

type Props = {
  color?: keyof MonoMultiColor;
  title: string;
  onClick: () => void;
  inverse?: boolean;
};

export const Button = ({
  onClick,
  color = 'accent',
  title,
  inverse,
}: Props) => {
  const textColor = inverse
    ? lightTheme.text.primaryB
    : lightTheme.text.primaryA;
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        padding: `${padding(2)} ${padding(6)}`,
        borderRadius: padding(4),
        borderStyle: 'solid',
        border: `1px solid ${lightTheme.border[color]}`,
        backgroundColor: lightTheme.background[color],
      }}
    >
      <p style={{ color: textColor }}>{title}</p>
    </button>
  );
};
