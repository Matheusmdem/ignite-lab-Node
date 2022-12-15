import { Notification } from "@application/entities/notification"
import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notification-repository"
import { GetNotification } from "./get-recipient-notification"



describe('Get recipients notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const getRecipient = new GetNotification(notificationRepository)

    await notificationRepository.create(new Notification(makeNotification({
      recipientId: 'teste-1'
    })))
    await notificationRepository.create(new Notification(makeNotification({
      recipientId: 'teste-1'
    })))
    await notificationRepository.create(new Notification(makeNotification({
      recipientId: 'teste2'
    })))


    const { notification } = await getRecipient.execute({
      recipientId: 'teste-1'
    })

    expect(notification).toHaveLength(2)
    expect(notification).toEqual(expect.arrayContaining([
      expect.objectContaining({ recipientId: 'teste-1' }),
      expect.objectContaining({ recipientId: 'teste-1' })
    ]))
  })
})