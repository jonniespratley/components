import {faker} from '@faker-js/faker';

export function createActivity(o) {
  return {
    ...o,
    roomID: 'room1',
    personID: `user${faker.random.number({
      min: 1,
      max: 5,
    })}`,
    text: faker.lorem.paragraphs(1),
    created: faker.date.past(),
  };
}

export function createAttachment() {
  return {
    id: faker.random.uuid(),
    fileSize: faker.random.number(),
    displayName: faker.random.word(),
    mimeType: 'image/gif',
    url: faker.image.city(),
    type: 'images',
  };
}

export function createActivities(count = 20) {
  const out = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < count; i++) {
    const act = createActivity({
      ID: `activity-${i}`,
      //attachments: [createAttachment()]
    });

    out.push(act);
  }

  return out;
}

export const mockActivities = createActivities(50);
export const allActivityIds = mockActivities.map((a) => a.ID);
