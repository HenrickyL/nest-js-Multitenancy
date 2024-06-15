import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PartnerUsersController } from './admin-users/partner-users.controller';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController, PartnerUsersController],
  providers: [UsersService],
})
export class AuthModule {}
