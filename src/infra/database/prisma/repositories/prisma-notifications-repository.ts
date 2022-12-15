import { Injectable } from "@nestjs/common/decorators";
import { Notification } from "@application/entities/notification";
import { NotificationRepository } from "@application/respositories/notificaiton-repository";
import { PrismaService } from "../prisma.service";
import { PrismaNotificationMapper } from "../mapper/prisma-notification-mapper";


@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(
    private prismaService: PrismaService
  ) { }

  async findById(notification: string): Promise<Notification> {
    throw new Error("Method not implemented.");
  }

  async save(notification: Notification): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification)

    await this.prismaService.notification.create({
      data: raw
    })
  }

}