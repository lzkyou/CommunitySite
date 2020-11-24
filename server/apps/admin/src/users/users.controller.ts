import { User } from '@libs/db/models/user.model';
import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';




@Crud({
  model: User
})

@Controller('users')
@ApiTags('用户管理API')
export class UsersController {
  constructor(@InjectModel(User) private readonly model) { }
  @Get('option')
  option(){
    return {
      title: "用户管理",
      align: "center",
      headerAlign: "center",
      border: true,
      stripe: true,
      column: [
        { prop: "username", label: "用户名" },
        // { prop: "password", label: "密码" },
      ],
    }
  }
}





