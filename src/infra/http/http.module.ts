import { CancelNotification } from '@app/use-cases/cancel-notification';
import { SendNotification } from '@app/use-cases/send-notification';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification, CancelNotification]
})
export class HttpModule {}
