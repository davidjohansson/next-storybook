import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';
import { Spinner } from '../Spinner';
import { ButtonTypes, ButtonUIType, ButtonSize } from './Models';
import { getClassNamesFromButtonUIType } from './Button.helpers';

interface Props extends HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
  /** id of the button */
  id: string;
  /** Type: BUTTON | SUBMIT | RESET | LINK*/
  type?: ButtonTypes;
  /** ButtonUIType: OLDPRIMARY | PRIMARY | SECONDARY | DISABLED */
  buttonUIType?: ButtonUIType;
  /** ButtonSize: SMALL | NORMAL - Does not work for OLDPRIMARY type.  */
  buttonSize?: ButtonSize;
  /** href: string */
  href?: string;
  /** children:  */
  children?: React.ReactNode;
  /** Listen to focus events */
  onFocus?: (e: React.FocusEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  /** Listen to blur events */
  onBlur?: (e: React.FocusEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  /** Listen to click events */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  /** Listen to onKeyDown events */
  onKeyDown?: (e: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  /** aria-label: string */
  ariaLabel?: string;
  /** if button renders as a anchor tag we need to be able to add rel */
  rel?: string;
  /** target for anchor tags */
  target?: string;
  /** id used for automated tests */
  dataTestId?: string;
  /** Full width */
  fullWidth?: boolean;
  /** loading state on button */
  isLoading?: boolean;
  /** optional css class name for button */
  className?: string;
  /** CSS class for children wrapper */
  childrenClassName?: string;
}

const Button = (props: Props) => {
  const { id, dataTestId = id, ariaLabel } = props;
  const {
    type = ButtonTypes.BUTTON,
    buttonSize = ButtonSize.MEDIUM,
    buttonUIType = ButtonUIType.OLDPRIMARY,
    children,
    fullWidth = false,
    isLoading = false,
  } = props;
  const {
    onFocus,
    onBlur,
    onClick,
    onKeyDown,
    rel,
    target,
    href,
    className: buttonClassName,
    childrenClassName,
  } = props;

  // If we got a href value we should render a link.
  if (href) {
    return (
      <a
        id={id}
        href={href}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          if (buttonUIType === ButtonUIType.DISABLED) {
            event.stopPropagation();
            event.preventDefault();
          }
        }}
        data-test-id={dataTestId}
        className={classNames(
          getClassNamesFromButtonUIType(buttonUIType),
          styles['Button-link'],
          fullWidth && styles['Button-fullWidth'],
          isLoading && styles['Button-loading'],
          buttonSize === ButtonSize.SMALL && styles['Button-small'],
          buttonClassName,
        )}>
        <span className={classNames(childrenClassName)}>{isLoading ? <Spinner size={'24px'} /> : <>{children}</>}</span>
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
      onKeyDown={onKeyDown}
      aria-label={ariaLabel}
      data-test-id={dataTestId}
      className={classNames(
        getClassNamesFromButtonUIType(buttonUIType),
        fullWidth && styles['Button-fullWidth'],
        isLoading && styles['Button-loading'],
        buttonSize === ButtonSize.SMALL && styles['Button-small'],
        buttonClassName,
      )}
      disabled={buttonUIType === ButtonUIType.DISABLED}>
      <span className={classNames(childrenClassName)}>{isLoading ? <Spinner size={'24px'} /> : <>{children}</>}</span>
    </button>
  );
};

Button.displayName = 'Button';

export { Button };

export default Button;
