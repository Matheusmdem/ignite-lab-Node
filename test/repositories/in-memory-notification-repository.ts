import { Notification } from "../../src/application/entities/notification"
import { NotificationRepository } from "../../src/application/respositories/notificaiton-repository"


export class InMemoryNotificationRepository implements NotificationRepository {
  public notificationsArray: Notification[] = []

  async create(notification: Notification) {
    this.notificationsArray.push(notification)
  }
}