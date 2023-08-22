export const getStyle = (style?: React.CSSProperties, color?: string, background?: string) => ({
  ...style,
  color: color ?? style?.color,
  background: background ?? style?.background,
});
