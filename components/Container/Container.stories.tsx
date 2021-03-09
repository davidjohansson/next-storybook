import React from 'react';
import { Container, ContainerMaxWidth } from './Container';
import { withKnobs, radios } from '@storybook/addon-knobs';

const defaultStory = {
  title: 'Container',
  component: Container,
  decorators: [withKnobs],
};

const maxWidthOptions = {
  default: ContainerMaxWidth.DEFAULT,
  narrow: ContainerMaxWidth.NARROW,
  none: ContainerMaxWidth.NONE,
};

export default defaultStory;

export const Default = () => {
  return (
    <Container maxWidthSetting={radios('Max width', maxWidthOptions, ContainerMaxWidth.DEFAULT)}>
      “My dear Frodo!’ exclaimed Gandalf. ‘Hobbits really are amazing creatures, as I have said before. You can learn
      all that there is to know about their ways in a month, and yet after a hundred years they can still surprise you
      at a pinch.”
    </Container>
  );
};
