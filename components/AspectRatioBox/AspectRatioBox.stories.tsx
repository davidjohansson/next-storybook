import React from 'react';
import AspectRatioBox, { ARSetting } from './AspectRatioBox';
import { withKnobs, radios } from '@storybook/addon-knobs';

const defaultStory = {
  title: 'AspectRatioBox',
  component: AspectRatioBox,
  decorators: [withKnobs],
};

const typeOptions = {
  GoldenRatio: ARSetting.GOLDEN,
  '14:9': ARSetting.RATIO_14_9,
  '16:9': ARSetting.RATIO_16_9,
  '1:1': ARSetting.RATIO_1_1,
  '1:2': ARSetting.RATIO_1_2,
  '1:3': ARSetting.RATIO_1_3,
  '3:1': ARSetting.RATIO_3_1,
};

export const Default = () => (
  <div style={{ width: '250px' }}>
    <AspectRatioBox ratio={radios('ButtonType', typeOptions, ARSetting.GOLDEN)}>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#0c71bf',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <span style={{ color: 'white', textAlign: 'center' }}>
          I'm a box with a specific aspect ratio. Watch me go.
        </span>
      </div>
    </AspectRatioBox>
  </div>
);

export default defaultStory;
