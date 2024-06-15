import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

// design pattern decorator / annotations
@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
