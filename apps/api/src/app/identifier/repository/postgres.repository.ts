import { PrismaClient } from '@prisma/client';
import {
  IdentifierDTO,
  IdentifierInterface
} from '../interface/identifier.interface';

export class PostgresRepository implements IdentifierInterface {
  async generateIdentifier(): Promise<IdentifierDTO> {
    const prisma = new PrismaClient();

    const identifier = prisma.identifier
      .create({
        data: {
          empty: true
        }
      })
      .then((identifier) => {
        return { identifier: { name: identifier.name, code: identifier.code } };
      });

    return identifier;
  }
}
