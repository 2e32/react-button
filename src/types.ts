type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl';

type ButtonLoadingPosition = 'left' | 'center' | 'right';

type ButtonVariant = 'default' | 'filled' | 'light' | 'outlined' | 'text' | 'link';

type ButtonPalette = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'dark';

/**
 * Интерфейс кнопки.
 */
interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  /**
   * Цвет текста кнопки.
   */
  color?: string;
  /**
   * Фон кнопки.
   */
  background?: string;
  /**
   * Отображать индикатор загрузки.
   */
  loading?: boolean;
  /**
   * Иконка индикатора загрузки.
   */
  loadingIcon?: React.ReactNode;
  /**
   * Позиция индикатора загрузки.
   */
  loadingPosition?: ButtonLoadingPosition;
  /**
   * Размер кнопки.
   */
  size?: ButtonSize;
  /**
   * Закругление углов кнопки.
   */
  radius?: ButtonRadius;
  /**
   * Кнопка круглая.
   */
  round?: boolean;
  /**
   * Кнопка занимает всю ширину контейнера.
   */
  block?: boolean;
  /**
   * Текст кнопки в верхнем регистре.
   */
  uppercase?: boolean;
  /**
   * Вариант отображения кнопки.
   */
  variant?: ButtonVariant;
  /**
   * Цветовая схема кнопки.
   */
  palette?: ButtonPalette;
  /**
   * Иконка перед содержимым кнопки.
   */
  prependIcon?: React.ReactNode;
  /**
   * Иконка после содержимого кнопки.
   */
  appendIcon?: React.ReactNode;
}

export type {
  ButtonSize,
  ButtonRadius,
  ButtonLoadingPosition,
  ButtonVariant,
  ButtonPalette,
  ButtonProps,
};
