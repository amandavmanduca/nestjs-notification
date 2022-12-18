import { NotificationNotFound } from '@app/use-cases/errors/notification-not-found';
import { Notification } from '../../src/app/entities/notification';
import { NotificationsRepository } from '../../src/app/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification> {
    const foundNotification = await this.notifications.find(
      (n) => n.id === notificationId
    );
    if (!foundNotification) {
      throw new NotificationNotFound();
    }
    return foundNotification;
  }
  async save(notification: Notification): Promise<void> {
    const foundNotification = await this.findById(notification.id);
    const notifications = [
      ...this.notifications.filter((n) => n.id !== foundNotification.id),
      notification
    ];
    this.notifications = notifications;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
