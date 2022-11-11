import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Click Me!',
    },
  },
};

//something for storybook
export default meta;

//template is well uh.. the Template of the component
const Template: Story<Props> = args => <Button {...args} />;

//stories = different variants of the component we just created
export const CoolButton = Template.bind({});
