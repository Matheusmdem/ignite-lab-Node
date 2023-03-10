import { Module } from '@nestjs/common'
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controller/notifcations.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    NotificationsController
  ],
  providers: [SendNotification]
})

export class HttpModule { }