import { Controller, Get } from '@nestjs/common';
import { IdentifierService } from './identifier.service';

@Controller('identifier')
export class IdentifierController {
  constructor(private readonly identifierService: IdentifierService) {}
  @Get()
  getIdentifier() {
    return this.identifierService.getIdentifier();
  }
}
