import React from 'react';

import styles from './Button.module.css';

interface Props {
  id: string;
  children: any;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onEnter: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
}

const PlainButton = (props: Props): React.ReactElement => {
  const { children, onClick, onEnter, id, onKeyDown, onBlur, onFocus } = props;

  const onKeyDownInternal = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
    event.key === 'Enter' && onEnter(event);
    onKeyDown && onKeyDown(event);
  };

  const onBlurInternal = (event: React.FocusEvent<HTMLButtonElement>) => {
    onBlur && onBlur(event);
  };

  const onFocusInternal = (event: React.FocusEvent<HTMLButtonElement>) => {
    onFocus && onFocus(event);
  };

  return (
    <button
      id={id}
      className={styles['c-buttonPlain']}
      onClick={onClick}
      onKeyDown={onKeyDownInternal}
      onBlur={onBlurInternal}
      onFocus={onFocusInternal}>
      {children}
    </button>
  );
};

PlainButton.displayName = 'PlainButton';

export { PlainButton };
