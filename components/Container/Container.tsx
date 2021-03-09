import React from 'react';
import classNames from 'classnames';

import styles from './Container.module.css';

enum ContainerMaxWidth {
  DEFAULT = 'default',
  NONE = 'none',
  NARROW = 'narrow',
}

interface Props {
  children: any;
  maxWidthSetting?: ContainerMaxWidth;
}

const getMaxWidthClass = (maxWidthSetting: ContainerMaxWidth) => {
  switch (maxWidthSetting) {
    case ContainerMaxWidth.NARROW:
      return styles.Narrow;
    case ContainerMaxWidth.NONE:
      return styles.NoMaxWidth;
    case ContainerMaxWidth.DEFAULT:
    default:
      return '';
  }
};

const Container = (props: Props) => {
  const { children, maxWidthSetting = ContainerMaxWidth.DEFAULT } = props;
  return <div className={classNames(styles.Container, getMaxWidthClass(maxWidthSetting))}>{children}</div>;
};

export { Container, ContainerMaxWidth };
