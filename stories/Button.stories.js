import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { addParameters, configure } from "@storybook/react";

import Button from "../src/components/Button/Button";

storiesOf("Button", module)
  .add(
    "with text",
    () => <Button onClick={action("clicked")}>Hello Button</Button>,
    { options: { disabled: true } }
  )
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
