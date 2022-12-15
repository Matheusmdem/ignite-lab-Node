import { Content } from "@application/entities/content"
import { Notification } from "@application/entities/notification"
import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notification-repository"
import { CountNotification } from "./count-notification"



describe('Count recipients notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const countRecipient = new CountNotification(notificationRepository)

    await notificationRepository.create(new Notification(makeNotification({
      recipientId: 'teste1'
    })))
    await notificationRepository.create(new Notification(makeNotification({
      recipientId: 'teste1'
    })))
    await notificationRepository.create(new Notification(makeNotification({
      recipientId: 'teste2'
    })))


    const { count } = await countRecipient.execute({
      recipientId: 'teste1'
    })

    expect(count).toEqual(2)
  })
})