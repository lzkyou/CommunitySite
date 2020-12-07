import { User, UserDocument } from '@libs/db/models/user.model';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/reg.dto';
import { CurrentUser } from './current-user.decorator';
import { JwtService } from '@nestjs/jwt';



@Controller('auth')
@ApiTags('用户')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>
  ) { }

  //注册接口
  @Post('register')
  @ApiOperation({ summary: '注册' })
  async register(@Body() dto: RegisterDto) {
    try {
      const { username, password } = dto
      const user = await this.userModel.create({
        username,
        password
      })
      return user
    }
    catch (e) {
      return '用户名已存在！'
    }

  }
  //登录接口
  @Post('login')
  @ApiOperation({ summary: '登录' })
  //请求接口前验证
  @UseGuards(AuthGuard('local'))
  async login(@Body() dto: LoginDto, @Req() req) {
    return {
      token: this.jwtService.sign({
        id: String(req.user._id)
      })
    };
  }
  //验证接口
  @Get('user')
  @ApiOperation({ summary: '获取个人信息' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async user(@Req() req) {
    return req.user
  }
}
