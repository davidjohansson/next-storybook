import React from "react";
import { Icon, IconName } from "./Icon";
import { Container } from "../Container";

const defaultStory = {
  title: "Icon",
  component: Icon,
};

export default defaultStory;

export const Default = () => {
  return (
    <Container>
      <Icon iconName={IconName.SEARCH} />
    </Container>
  );
};
