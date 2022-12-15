import { Notification } from "@application/entities/notification";
import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../respositories/notificaiton-repository";

interface GetNotificationRequest {
  recipientId: string;
}

interface GetNotificationResponse {
  notification: Notification[]
}

@Injectable()
export class GetNotification {
  constructor(private notificationsRepository: NotificationRepository) { }

  async execute(request: GetNotificationRequest): Promise<GetNotificationResponse> {
    const { recipientId } = request

    const notification = await this.notificationsRepository.findManyByRecipientId(recipientId)

    return {
      notification
    }
  }
}