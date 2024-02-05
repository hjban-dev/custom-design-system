import '@custom-design-system/react-components-layout/style.css';
import { Grid as _Grid, GridItem } from '@custom-design-system/react-components-layout';
import React from 'react'

export default {
  title: 'ReactComponents/Layout/Grid',
  component: _Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const GridStory = {
  args: {
    as: "div",
    baxShadow: 'xl',
    borderRadius: 'md',
    templateColumns: 'repeat(2, 1fr)',
    style: {
      width: '300px'
    }
  },
  render: (args) => (
    <_Grid {...args}>
      <GridItem>Grid</GridItem>
      <GridItem>입니다</GridItem>
    </_Grid>
  )
};