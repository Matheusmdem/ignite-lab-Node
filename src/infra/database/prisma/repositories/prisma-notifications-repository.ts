import { Notification } from "../../../../application/entities/notification";
import { NotificationRepository } from "../../../../application/respositories/notificaiton-repository";
import { PrismaService } from "../prisma.service";



export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(
    private prismaService: PrismaService
  ) { }

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt
      }
    })
  }

}