import { ApiProperty } from '@nestjs/swagger'
import { modelOptions, prop } from '@typegoose/typegoose'
import { hashSync } from 'bcryptjs'

@modelOptions({
  schemaOptions:{
    timestamps: true
  }
})
export class User{
  @ApiProperty({description: '用户名', example: '用户名'})
  @prop({
    unique: true,
  })
  username: string


  @ApiProperty({description: '密码', example:'密码'})
  @prop({
    select: false,
    get(val){
      return val
    },
    //bcrypt 散列密码
    set(val){
      return val ? hashSync(val) :val
    }
  })
  password: string
}