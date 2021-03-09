import React from "react";
import renderer from "react-test-renderer";

import { Button } from "./Button";

describe("[Component]: Button", () => {
  it("should match snapshot", () => {
    const component = renderer.create(<Button id="first-button" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
