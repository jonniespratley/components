import {allActivityIds} from './utils';

export default {
  room1: {
    ID: 'room1',
    title: 'Developer Standup',
    roomType: 'group',
  },
  'room1-previous-activities': ['activity1', 'activity3', ...allActivityIds.splice(0, 20)],
  'room1-activities': [
    'ActivityWithReplys',
    'ActivityWithFile',
    'ActivityWithGiff',
    'activity4',
    'activity5',
    'activity6',
    'activity7',
    'activity8',
    'activity9',
    ...allActivityIds
  ],
  room2: {
    ID: 'room2',
    title: 'UI/UX Design',
    roomType: 'group',
  },
  'room2-activities': [
    'activity6',
    {date: '2019-08-15T21:00:07.047'},
    'activity7',
    {date: '2019-08-20T21:00:07.047'},
    'activity8',
  ],
  room3: {
    ID: 'room3',
    title: 'Marketing Campaign',
    roomType: 'space',
  },
  'room3-activities': [],
  room4: {
    ID: 'room4',
    title: 'Brandon Seege',
    roomType: 'direct',
  },
  'room4-activities': [],
};
