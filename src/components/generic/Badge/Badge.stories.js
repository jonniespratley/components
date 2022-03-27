import React from 'react';
import Badge from './Badge';

export default {
  title: 'Common/Badge',
  component: Badge,
};
const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
