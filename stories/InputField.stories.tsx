import { Meta, Story } from '@storybook/react';
import React from 'react';
import InputField, { IInputField } from '../src/InputField';

const meta: Meta = {
  title: 'InputField',
  component: InputField,
};

//something for storybook
export default meta;

//template is well uh.. the Template of the component
const Template: Story<IInputField> = args => <InputField {...args} />;

//stories = different variants of the component we just created
export const CoolInputField = Template.bind({});
