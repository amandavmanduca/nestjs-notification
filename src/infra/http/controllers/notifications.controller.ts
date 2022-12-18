import { CancelNotification } from '@app/use-cases/cancel-notification';
import { SendNotification } from '@app/use-cases/send-notification';
import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModule } from '../view-models/notification-view-module';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly sendNotification: SendNotification,
    private cancelNotification: CancelNotification
  ) {}

  @Post('create')
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category
    });
    return {
      notification: NotificationViewModule.toHTTP(notification)
    };
  }

  @Patch(':id/cancel')
  async cancel(@Param() params: { id: string }) {
    const { id } = params;
    await this.cancelNotification.execute(id);
  }
}
