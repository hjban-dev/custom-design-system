import "@custom-design-system/react-components-layout/style.css";
import React from "react";
import {
  OrderedList,
  ListItem,
  UnorderedList,
  List,
} from "@custom-design-system/react-components-layout";

export default {
  title: "ReactComponents/Layout/List",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const OrderedListStory = {
  render: () => (
    <OrderedList spacing={3}>
      <ListItem fontSize="md">1번</ListItem>
      <ListItem fontSize="md">2번</ListItem>
      <ListItem fontSize="md">3번</ListItem>
    </OrderedList>
  ),
};

export const UnorderedListStory = {
  render: () => (
    <UnorderedList spacing={3}>
      <ListItem fontSize="md">1번</ListItem>
      <ListItem fontSize="md">2번</ListItem>
      <ListItem fontSize="md">3번</ListItem>
    </UnorderedList>
  ),
};

export const ListStory = {
  render: () => (
    <List variant="unordered" spacing={3}>
      <ListItem fontSize="md">1번</ListItem>
      <ListItem fontSize="md">2번</ListItem>
      <ListItem fontSize="md">3번</ListItem>
    </List>
  ),
};
