import { ApiProperty } from '@nestjs/swagger'
import { modelOptions, prop, DocumentType, Ref } from '@typegoose/typegoose'
import { hashSync } from 'bcryptjs'
import { Video } from './video.model'

export type UserDocument = DocumentType<User>

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