import '@custom-design-system/react-components-layout/style.css';
import { Text as _Text } from '@custom-design-system/react-components-layout';
import { classes, vars } from '@custom-design-system/themes'

export default {
  title: 'ReactComponents/Layout/Typography/Text',
  component: _Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["p", "span", "div", "b", "i", "u", "strong", "em"],
      control: "select",
    },
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: 'select'
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: 'select'
    }
  }
};

export const TextStory = {
  args: {
    as: "p",
    children: "Text Story",
    fontSize: 'sm',
    color: 'gray'
  }
};