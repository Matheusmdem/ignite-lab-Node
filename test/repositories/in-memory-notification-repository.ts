import { Notification } from "@application/entities/notification"
import { NotificationRepository } from "@application/respositories/notificaiton-repository"


export class InMemoryNotificationRepository implements NotificationRepository {
  public notificationsArray: Notification[] = []

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notificationsArray.filter((notification) => {
      notification.recipientId === recipientId
    })
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notificationsArray.filter(
      (notification) => notification.recipientId === recipientId
    ).length
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notificationsArray.find(
      (item) => item.id === notificationId
    )

    if (!notification) {
      return null
    }

    return notification
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notificationsArray.findIndex(
      (item) => item.id === notification.id
    )

    if (notificationIndex >= 0) {
      this.notificationsArray[notificationIndex] = notification
    }
  }

  async create(notification: Notification) {
    this.notificationsArray.push(notification)
  }
}