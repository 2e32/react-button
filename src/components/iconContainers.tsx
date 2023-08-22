import cn from 'classnames';

interface IconContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const IconContainer = ({ children, className }: IconContainerProps) => {
  return children != null ? (
    <span className={cn('e-button__icon', className)}>{children}</span>
  ) : null;
};

export const PrependIconContainer = (props: Pick<IconContainerProps, 'children'>) => (
  <IconContainer {...props} className="e-button__icon--prepend" />
);

export const AppendIconContainer = (props: Pick<IconContainerProps, 'children'>) => (
  <IconContainer {...props} className="e-button__icon--append" />
);
