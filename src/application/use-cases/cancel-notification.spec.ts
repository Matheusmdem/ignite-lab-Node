import { Content } from "@application/entities/content"
import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notification-repository"
import { CancelNotification } from "./cancel-notification"
import { NotificationNotFound } from "./errors/notifcation-not-found"



describe('Cancel notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const cancelNotification = new CancelNotification(notificationRepository)

    const notification = makeNotification()

    await notificationRepository.create(notification)

    await cancelNotification.execute({
      notificationid: notification.id
    })

    expect(notificationRepository.notificationsArray[0].canceledAt).toEqual(expect.any(Date)
    )
  })

  it('should be able to cancel a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const cancelNotification = new CancelNotification(notificationRepository)



    expect(() => {
      return cancelNotification.execute({
        notificationid: 'fakeID'
      })
    }).rejects.toThrow(NotificationNotFound)
  })
})