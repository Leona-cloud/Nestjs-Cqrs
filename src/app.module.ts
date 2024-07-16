import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseModule } from './database';
import { APIModule } from './api';

@Module({
  imports: [DatabaseModule, APIModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
