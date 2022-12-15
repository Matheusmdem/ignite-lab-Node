import { Module } from "@nestjs/common";
import { NotificationRepository } from "src/application/respositories/notificaiton-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationsRepository } from "./prisma/repositories/prisma-notifications-repository";


@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository
    }
  ],
  exports: [
    NotificationRepository
  ]
})

export class DatabaseModule { }