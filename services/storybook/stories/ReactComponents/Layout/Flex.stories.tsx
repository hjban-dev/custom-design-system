import '@custom-design-system/react-components-layout/style.css';
import { Flex as _Flex } from '@custom-design-system/react-components-layout';
import React from 'react'

export default {
  title: 'ReactComponents/Layout/Flex',
  component: _Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const FlexStory = {
  args: {
    as: "button",
    padding: '5',
    background: 'pink',
    baxShadow: 'xl',
    borderRadius: 'md',
    justify: 'space-between',
    style: {
      width: '300px'
    }
  },
  render: (args) => (
    <_Flex {...args}>
      <div>Flex</div>
      <div>입니다</div>
    </_Flex>
  )
};