import classNames from 'classnames';
import { ButtonUIType } from './Models';

import styles from './Button.module.css';
import { ButtonSize } from './Models';

export const getClassNamesFromButtonUIType = (buttonUIType: ButtonUIType): string => {
  switch (buttonUIType) {
    case ButtonUIType.OLDPRIMARY:
      return classNames(styles.Button, styles['Button-oldPrimary']);
    case ButtonUIType.PRIMARY:
      return classNames(styles.Button, styles['Button-primary']);
    case ButtonUIType.SECONDARY:
      return classNames(styles.Button, styles['Button-secondary']);
    case ButtonUIType.DISABLED:
      return classNames(styles.Button, styles['Button-disabled']);
    default:
      return classNames(styles.Button, styles['Button-primary']);
  }
};

export const getSmallButtonClassNamesFromButtonSize = (buttonSize: ButtonSize): string => {
  switch (buttonSize) {
    case ButtonSize.SMALL:
      return classNames(styles['IconButton-small']);
    case ButtonSize.MEDIUM:
      return classNames(styles['IconButton-medium']);
    default:
      return classNames(styles['IconButton-medium']);
  }
};
