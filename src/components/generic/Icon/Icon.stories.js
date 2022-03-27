import React from 'react';
import Icon, {icons} from './Icon';

const allIcons = Object.keys(icons);

export default {
  title: 'Common/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: allIcons,
      control: {type: 'select'},
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: allIcons[0],
};
