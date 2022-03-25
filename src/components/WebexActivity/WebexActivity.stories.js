import React from 'react';
import {addDays, getDay, subDays} from 'date-fns';
import activities from '../../data/activities';
import WebexActivity from './WebexActivity';
import Activity from './Activity';

export default {
  title: 'Messaging/Webex Activity',
  component: WebexActivity,
};

const ActivityTemplate = (args) => <Activity {...args} />;
const Template = (args) => <WebexActivity {...args} />;

export const DefaultState = ActivityTemplate.bind({});
DefaultState.args = {
  ...activities.activity3,
  personID: 'user2',
  activityID: 'activity3',
  displayHeader: true,
  selected: false,
  unread: false,
};

// Modify time data on the fly
DefaultState.parameters = {
  mockData: {
    activities: {
      activity3: {
        ...activities.activity3,
      },
    },
  },
};

export const CreatedLongBack = Template.bind({});
CreatedLongBack.args = {
  activityID: 'activity6',
};
// Modify time data on the fly
CreatedLongBack.parameters = {
  mockData: {
    activities: {
      ...activities,
      activity6: {
        ...activities.activity6,
        created: subDays(new Date(), 7).toString(),
      },
    },
  },
};

export const CreatedThisWeek = Template.bind({});
CreatedThisWeek.args = {
  activityID: 'activity8',
};
// Modify time data on the fly
CreatedThisWeek.parameters = {
  mockData: {
    activities: {
      ...activities,
      activity8: {
        ...activities.activity8,
        // If it's Sunday, make it a Monday, otherwise pick the day before today
        created: getDay(new Date()) === 0
          ? addDays(new Date(), 1)
          : subDays(new Date(), 2).toString(),
      },
    },
  },
};

export const CreatedYesterday = Template.bind({});
CreatedYesterday.args = {
  activityID: 'activity7',
};
// Modify time data on the fly
CreatedYesterday.parameters = {
  mockData: {
    activities: {
      ...activities,
      activity7: {
        ...activities.activity7,
        created: subDays(new Date(), 1).toString(),
      },
    },
  },
};

export const CreatedToday = Template.bind({});
CreatedToday.args = {
  activityID: 'activity5',
};
// Modify time data on the fly
CreatedToday.parameters = {
  mockData: {
    activities: {
      ...activities,
      activity5: {
        ...activities.activity5,
        created: new Date().toString(),
      },
    },
  },
};

export const NoHeader = Template.bind({});
NoHeader.args = {
  activityID: 'activity2',
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  activityID: 'activity3',
};

export const AdaptiveCard = Template.bind({});
AdaptiveCard.args = {
  activityID: 'activity9',
};
// Modify time data for actions on the fly
AdaptiveCard.parameters = {
  mockData: {
    activities: {
      ...activities,
      activity9: {
        ...activities.activity9,
        actions: [
          {
            ...activities.activity9.actions[0],
            created: new Date().toISOString(),
          },
          {
            ...activities.activity9.actions[1],
            created: new Date().toISOString(),
          },
        ],
      },
    },
  },
};

export const WithGif = ActivityTemplate.bind({});
WithGif.args = {
  ...activities.ActivityWithGiff,
};
export const WithFile = ActivityTemplate.bind({});
WithFile.args = {
  ...activities.ActivityWithFile,
};
export const WithReplys = Template.bind({});
WithReplys.args = {
  activityID: 'ActivityWithReplys',
};
