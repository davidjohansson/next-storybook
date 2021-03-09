import React from 'react';
import classNames from 'classnames';

import styles from './Icon.module.css';

enum IconName {
  SEARCH = 'icon-search',
  CLOSE = 'icon-close',
  CHEVRON_RIGHT = 'icon-chevron-right',
}

enum IconSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

interface Props {
  iconName: IconName;
  size?: IconSize;
  hoverText?: string;
}

const Icon = (props: Props) => {
  const { iconName, hoverText, size = IconSize.MEDIUM } = props;

  const getClassnameFromSize = (size: IconSize) => {
    switch (size) {
      case IconSize.SMALL:
        return styles['Icon-small'];
      case IconSize.MEDIUM:
        return styles['Icon-medium'];
    }
  };

  return <i className={classNames(iconName, getClassnameFromSize(size))} title={hoverText} />;
};

Icon.displayName = 'Icon';

export { Icon, IconName, IconSize };
