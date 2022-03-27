import React from 'react';
import InputField from './InputField';

export default {
  title: 'Common/InputField',
  component: InputField,
};
const Template = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Enter some text..',
};
