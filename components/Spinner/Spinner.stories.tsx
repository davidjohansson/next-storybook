import React from 'react';
import { Spinner } from './Spinner';

const defaultStory = {
  title: 'Spinner',
  component: Spinner,
};

export default defaultStory;

export const Default = () => <Spinner size="128px" />;
