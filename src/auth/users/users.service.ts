import { Injectable } from '@nestjs/common';
import { CreatePartnerUserDTO } from './dto/create-partner-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRoles } from './user-roles';
import * as bcrypt from 'bcrypt';
import { CreateCommonUserDTO } from './dto/create-common-user.dto';
@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  createPartnerUser(data: CreatePartnerUserDTO) {
    return this.create(data, UserRoles.PARTNER);
  }

  createCommonUser(data: CreateCommonUserDTO) {
    return this.create(data, UserRoles.USER);
  }

  private create(data: CreatePartnerUserDTO, userType: UserRoles) {
    return this.prismaService.user.create({
      data: {
        ...data,
        password: this.generateHash(data.password),
        roles: [userType],
      },
    });
  }

  private generateHash(password: string) {
    return bcrypt.hashSync(password, 10);
  }
}
