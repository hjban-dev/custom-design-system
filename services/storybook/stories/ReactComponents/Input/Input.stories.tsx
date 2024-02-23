import React from "react";
import "@custom-design-system/react-components-input/style.css";
import { Input } from "@custom-design-system/react-components-input";

export default {
  title: "React Components/Input",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const InputStory = {
  render: () => <Input placeholder="dd" />,
};
