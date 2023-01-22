import { Module } from '@nestjs/common';

import { IdentifierController } from './identifier.controller';
import { IdentifierService } from './identifier.service';

@Module({
  imports: [],
  controllers: [IdentifierController],
  providers: [IdentifierService]
})
export class IdentifierModule {}
