import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { ButtonTypes, ButtonUIType, ButtonSize } from './Models';
import { getClassNamesFromButtonUIType, getSmallButtonClassNamesFromButtonSize } from './Button.helpers';
import { Icon, IconName, IconSize } from '../Icon/Icon';

import styles from './Button.module.css';

interface Props extends HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
  /** id of the button */
  id: string;
  /** Type: BUTTON | SUBMIT | RESET | LINK*/
  type?: ButtonTypes;
  /** ButtonUIType: OLDPRIMARY | PRIMARY | SECONDARY | DISABLED */
  buttonUIType?: ButtonUIType;
  /** ButtonSize: SMALL | NORMAL - Does not work for OLDPRIMARY type.  */
  buttonSize?: ButtonSize;
  /** Listen to focus events */
  onFocus?: (e: React.FocusEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  /** Listen to blur events */
  onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  /** Listen to click events */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  /** Listen to onKeyDown events */
  onKeyDown?: (e: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  /** aria-label: string */
  ariaLabel?: string;
  /** id used for automated tests */
  dataTestId?: string;
  /** Icon */
  iconName: IconName;
}

const IconButton = (props: Props) => {
  const {
    id,
    dataTestId = id,
    ariaLabel,
    type = ButtonTypes.BUTTON,
    buttonSize = ButtonSize.MEDIUM,
    buttonUIType = ButtonUIType.OLDPRIMARY,
    iconName,
  } = props;
  const { onFocus, onBlur, onClick, onKeyDown } = props;

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
        styles['IconButton'],
        getClassNamesFromButtonUIType(buttonUIType),
        getSmallButtonClassNamesFromButtonSize(buttonSize),
      )}
      disabled={buttonUIType === ButtonUIType.DISABLED}>
      <Icon iconName={iconName} size={buttonSize === ButtonSize.MEDIUM ? IconSize.MEDIUM : IconSize.SMALL} />
    </button>
  );
};

IconButton.displayName = 'IconButton';

export { IconButton };

export default IconButton;
