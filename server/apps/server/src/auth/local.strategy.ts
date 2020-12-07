import { User } from '@libs/db/models/user.model';
import { BadRequestException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ReturnModelType } from '@typegoose/typegoose';
import { compareSync } from 'bcryptjs';
import { InjectModel } from 'nestjs-typegoose';
import { Strategy, IStrategyOptions } from 'passport-local'



export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>
  ) {
    super({
      usernameField: 'username',
      passwordField: 'password'
    } as IStrategyOptions)
  }

  async validate(username: string, password: string) {
    const user = await this.userModel.findOne({ username }).select('+password')
    if (!user){
      throw new BadRequestException('用户名不正确！')
    }
    //比较提交密码与库密码
    if(!compareSync(password,user.password)){
      throw new BadRequestException('用户名或密码错误！')
    }
    return user
  }
}