import '@custom-design-system/react-components-layout/style.css';
import { Box as _Box } from '@custom-design-system/react-components-layout';

export default {
  title: 'ReactComponents/Layout/Box',
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const BoxStory = {
  args: {
    as: "button",
    padding: '5',
    background: 'pink',
    baxShadow: 'xl',
    borderRadius: 'md',
  }
};