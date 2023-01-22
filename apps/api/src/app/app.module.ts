import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdentifierModule } from './identifier/identifier.module';

@Module({
  imports: [IdentifierModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
