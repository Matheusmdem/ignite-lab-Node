import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../respositories/notificaiton-repository";
import { NotificationNotFound } from "./errors/notifcation-not-found";

interface CancelNotificationRequest {
  notificationid: string;
}

type CancelNotificationResponse = void

@Injectable()
export class CancelNotification {
  constructor(private notificationsRepository: NotificationRepository) { }

  async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
    const { notificationid } = request

    const notification = await this.notificationsRepository.findById(notificationid)

    if (!notification) {
      throw new NotificationNotFound()
    }

    notification.cancelAt()

    await this.notificationsRepository.save(notification)
  }
}