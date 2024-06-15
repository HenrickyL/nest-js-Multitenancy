import { Injectable } from '@nestjs/common';
import { LoginDTO } from './login.dto';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { NotAllowedException } from 'src/_infra/httpExceptions/Exceptions';
@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async login(data: LoginDTO) {
    const user = await this.userService.findOne(data.email);
    if (!user || !bcrypt.compareSync(data.password, user.password)) {
      throw new NotAllowedException('Email or password invalid!');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    return {
      access_token: this.jwtService.sign(result),
    };
  }
}
