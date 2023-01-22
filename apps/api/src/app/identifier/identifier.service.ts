// create service with postgres repository on construct with getIdentifier method

import { Injectable } from '@nestjs/common';
import {
  IdentifierDTO,
  IdentifierInterface
} from './interface/identifier.interface';

@Injectable()
export class IdentifierService {
  constructor(private readonly repository: IdentifierInterface) {}

  async getIdentifier(): Promise<IdentifierDTO> {
    return await this.repository.generateIdentifier();
  }
}
