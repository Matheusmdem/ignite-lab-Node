import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      category: 'social',
      recipientId: 'example-id',
      content: new Content('Vai caralho')
    })

    expect(notification).toBeTruthy();
  })
})