import React from "react";
import "@custom-design-system/react-components-input/style.css";
import {
  Input,
  InputGroup,
  InputLeftAddon,
} from "@custom-design-system/react-components-input";

export default {
  title: "React Components/Input",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const InputStory = {
  render: () => (
    <>
      <Input placeholder="dd" size={"xs"} />
      <Input placeholder="dd" size={"sm"} />
      <Input placeholder="dd" size={"md"} />
      <Input placeholder="dd" size={"lg"} />
    </>
  ),
};

export const InputStoryWithDisabled = {
  render: () => (
    <>
      <Input placeholder="dd" isDisabled />
    </>
  ),
};

export const AddonInputGroupStoryWithSizes = {
  render: () => (
    <>
      <InputGroup size="xs" color="red">
        <InputLeftAddon>$</InputLeftAddon>
        <Input placeholder="dd" />
      </InputGroup>
      <InputGroup size="sm" color="red">
        <InputLeftAddon>$</InputLeftAddon>
        <Input placeholder="dd" />
      </InputGroup>
      <InputGroup size="md" color="red">
        <InputLeftAddon>$</InputLeftAddon>
        <Input placeholder="dd" />
      </InputGroup>
      <InputGroup size="lg" color="red">
        <InputLeftAddon>$</InputLeftAddon>
        <Input placeholder="dd" />
      </InputGroup>
    </>
  ),
};
