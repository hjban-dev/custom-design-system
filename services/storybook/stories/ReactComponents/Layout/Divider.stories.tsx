import '@custom-design-system/react-components-layout/style.css';
import { Box, Divider as _Divider } from '@custom-design-system/react-components-layout';
import { vars } from '@custom-design-system/themes'

export default {
  title: 'ReactComponents/Layout/Divider',
  component: _Divider,
  decorators: [
    (Story) => <Box padding={3} style={{ width: '300px', height: '300px' }}><Story /></Box>
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: Object.keys(vars.colors.$scale),
      control: 'select'
    },
    variant: {
      options: ['solid', 'dashed'],
      control: 'select' 
    },
    orientation:{
      options: ['horizontal', 'vertical'],
      control: 'select'
    }
  }
};

export const DividerStory = {
  args: {
    color: 'yellow',
    size: 1,
    variant: 'solid',
    orientation: 'horizontal'
  }
};