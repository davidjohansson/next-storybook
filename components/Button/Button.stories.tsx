import React from "react";
import { withKnobs, boolean, radios, text } from "@storybook/addon-knobs";

import { Button as ButtonComponent } from "./Button";
import { IconButton as IconButtonComponent } from "./IconButton";
import { ButtonUIType, ButtonSize } from "./Models";
import { Container } from "../Container";
import { IconName } from "../Icon";

const defaultStory = {
  title: "Button",
  component: ButtonComponent,
  decorators: [withKnobs],
};

const typeOptions = {
  oldprimary: ButtonUIType.OLDPRIMARY,
  primary: ButtonUIType.PRIMARY,
  secondary: ButtonUIType.SECONDARY,
  disabled: ButtonUIType.DISABLED,
};

const sizeOptions = {
  medium: ButtonSize.MEDIUM,
  small: ButtonSize.SMALL,
};

export const Button = () => {
  return (
    <Container>
      <ButtonComponent
        id="primary-button"
        onClick={() => console.log("Clicked button!")}
        buttonUIType={radios(
          "ButtonType",
          typeOptions,
          ButtonUIType.OLDPRIMARY
        )}
        isLoading={boolean("Loading", true)}
        fullWidth={boolean("Fullwidth", false)}
        buttonSize={radios("ButtonSize", sizeOptions, ButtonSize.MEDIUM)}
        href={text("HREF", undefined)}
      >
        I'm a fabulous button
      </ButtonComponent>
    </Container>
  );
};

export const NoPropButton = () => (
  <Container>
    <ButtonComponent
      id="primary-button"
      onClick={() => console.log("Clicked button!")}
    >
      I'm a fabulous button
    </ButtonComponent>
  </Container>
);

export const IconButton = () => (
  <Container>
    <IconButtonComponent
      id="icon-button"
      iconName={IconName.CHEVRON_RIGHT}
      onClick={() => console.log("Clicked button!")}
      buttonUIType={radios("ButtonType", typeOptions, ButtonUIType.OLDPRIMARY)}
      buttonSize={radios("ButtonSize", sizeOptions, ButtonSize.MEDIUM)}
    />
  </Container>
);

export default defaultStory;
