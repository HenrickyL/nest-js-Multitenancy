import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRoles } from './user-roles';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  create(data: CreateUserDTO) {
    return this.prismaService.user.create({
      data: {
        ...data,
        password: this.generateHash(data.password),
        roles: [UserRoles.USER],
      },
    });
  }
  private generateHash(password: string) {
    return bcrypt.hashSync(password, 10);
  }
}
