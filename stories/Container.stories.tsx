import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Container, IContainer } from '../src/Container';

const meta: Meta = {
  title: 'Container',
  component: Container,
};

//something for storybook
export default meta;

//template is well uh.. the Template of the component
const Template: Story<IContainer> = args => <Container {...args} />;

//stories = different variants of the component we just created
export const CoolContainer = Template.bind({});

CoolContainer.args = {
  children: 'LOL WTF UH HI!?!?',
};
