import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notification-repository"
import { SendNotification } from "./send-notification"



describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const sendNotification = new SendNotification(notificationRepository)

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'this is a notification',
      recipientId: 'id-teste'
    })
    expect(notificationRepository.notificationsArray).toHaveLength(1)
    expect(notificationRepository.notificationsArray[0]).toEqual(notification)
  })
})