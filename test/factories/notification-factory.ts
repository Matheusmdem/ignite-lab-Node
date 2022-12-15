import { Content } from "@application/entities/content";
import { Notification, NotificationProps } from "@application/entities/notification";

type OverWrite = Partial<NotificationProps>

export function makeNotification(overwrite: OverWrite = {}) {
  return new Notification({
    category: 'social',
    content: new Content('this is a notification'),
    recipientId: 'id-teste2',
    ...overwrite
  })
}