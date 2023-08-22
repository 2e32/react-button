import { forwardRef } from 'react';
import cn from 'classnames';

import type { ButtonProps } from './types';
import { LoadingIcon, PrependIconContainer, AppendIconContainer } from './components';
import { getStyle } from './utils';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    prependIcon,
    appendIcon,
    disabled = false,
    loading = false,
    loadingIcon,
    loadingPosition = 'center',
    uppercase = false,
    block = false,
    round = false,
    size = 'md',
    radius = 'md',
    className,
    style,
    color,
    background,
    variant = 'default',
    palette,
    ...rest
  } = props;

  const loader = loadingIcon ?? <LoadingIcon />;

  const showLeftLoading = loading && loadingPosition === 'left';
  const showCenterLoading = loading && loadingPosition === 'center';
  const showRightLoading = loading && loadingPosition === 'right';

  return (
    <button
      {...rest}
      ref={ref}
      disabled={disabled}
      className={cn(
        'e-button',
        `e-button--size--${size}`,
        `e-button--variant--${variant}`,
        className,
        {
          [`e-button--radius--${radius}`]: !round,
          'e-button--disabled': disabled,
          'e-button--loading': loading,
          'e-button--block': block,
          'e-button--uppercase': uppercase,
          'e-button--round': !block && round,
          [`e-button--palette--${palette}`]: palette != null && variant !== 'default',
        }
      )}
      style={getStyle(style, color, background)}
    >
      {showCenterLoading && <div className="e-button__loader">{loader}</div>}

      <div className={cn('e-button__content', { 'e-button__content--hidden': showCenterLoading })}>
        <PrependIconContainer>{showLeftLoading ? loader : prependIcon}</PrependIconContainer>
        {children}
        <AppendIconContainer>{showRightLoading ? loader : appendIcon}</AppendIconContainer>
      </div>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
