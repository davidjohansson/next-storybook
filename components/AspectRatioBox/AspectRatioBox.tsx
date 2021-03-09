import React from 'react';
import classNames from 'classnames';

import styles from './AspectRatioBox.module.css';

export enum ARSetting {
  GOLDEN = 'golden',
  RATIO_16_9 = 'ratio_16_9',
  RATIO_14_9 = 'ratio_14_9',
  RATIO_1_1 = 'ratio_1_1',
  RATIO_1_2 = 'ratio_1_2',
  RATIO_1_3 = 'ratio_1_3',
  RATIO_3_1 = 'ratio_3_1',
}

export interface Props {
  ratio: ARSetting;
  children: any;
}

export const AspectRatioBox = (props: Props): React.ReactElement => {
  const { children, ratio } = props;

  const getARClassFromProps = (ratio: ARSetting): string => {
    switch (ratio) {
      case ARSetting.GOLDEN:
        return styles.ARGolden;

      case ARSetting.RATIO_16_9:
        return styles.AR16_9;
      case ARSetting.RATIO_14_9:
        return styles.AR14_9;
      case ARSetting.RATIO_1_1:
        return styles.AR1_1;
      case ARSetting.RATIO_1_2:
        return styles.AR1_2;
      case ARSetting.RATIO_1_3:
        return styles.AR1_3;
      case ARSetting.RATIO_3_1:
        return styles.AR3_1;
    }
  };

  return (
    <div className={styles.ARBoxWrapper}>
      <div className={classNames(styles.ARBox, getARClassFromProps(ratio))}>
        <div className={styles.ARBoxInside}>{children}</div>
      </div>
    </div>
  );
};

export default AspectRatioBox;
