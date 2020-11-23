import { ApiProperty } from '@nestjs/swagger'
import { modelOptions, prop } from '@typegoose/typegoose'

@modelOptions({
  schemaOptions:{
    timestamps: true
  }
})
export class User{
  @ApiProperty({description: '用户名', example: '用户名'})
  @prop()
  username: string


  @ApiProperty({description: '密码', example:'密码'})
  @prop()
  password: string
}