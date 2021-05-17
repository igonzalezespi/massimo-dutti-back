import { Module } from '@nestjs/common';
import { ShipsService } from './ships.service';

@Module({
  providers: [ShipsService],
  exports: [ShipsService],
})
export class ShipsModule {}