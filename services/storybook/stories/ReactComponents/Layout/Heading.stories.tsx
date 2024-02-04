import '@custom-design-system/react-components-layout/style.css';
import { Heading as _Heading } from '@custom-design-system/react-components-layout';
import { classes, vars } from '@custom-design-system/themes'

export default {
  title: 'ReactComponents/Layout/Typography/Heading',
  component: _Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
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

export const HeadingStory = {
  args: {
    as: "h1",
    children: "Heading Story",
    fontSize: '2xl',
    color: 'gray'
  }
};