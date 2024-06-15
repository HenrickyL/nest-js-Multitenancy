import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRoles } from './user-roles';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  create(data: CreateUserDTO) {
    return this.prismaService.user.create({
      data: {
        ...data,
        roles: UserRoles.USER,
      },
    });
  }
}
