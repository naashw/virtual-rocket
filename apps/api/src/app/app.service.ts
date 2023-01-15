import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }

  async setData(): Promise<string> {
    const prisma = new PrismaClient();

    const newDataTest = await prisma.user.create({
      data: {
        name: 'dza ssdsada'
      }
    });

    return newDataTest.name;
  }
}
