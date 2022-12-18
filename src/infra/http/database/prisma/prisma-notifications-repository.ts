import { Notification } from '@app/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from 'src/app/repositories/notifications-repository';
import { PrismaNotificationMapper } from './mappers/prisma-notification-mapper';
import { PrismaService } from './prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notification.create({
      data: raw
    });
  }

  async findById(notificationId: string): Promise<Notification> {
    const notification = await this.prismaService.notification.findUnique({
      where: {
        id: notificationId
      }
    });
    return PrismaNotificationMapper.toDomain(notification);
  }

  async save(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notification.update({
      where: {
        id: raw.id
      },
      data: raw
    });
  }
}
