import { ApiProperty } from '@nestjs/swagger'
import { modelOptions, prop, Ref } from '@typegoose/typegoose'
import { Episode } from './episode.model'

@modelOptions({
  schemaOptions:{
    timestamps: true
  }
})

export class Video{
  @ApiProperty({description: '专辑名称'})
  @prop()
  name: string


  @ApiProperty({description: '封面图片'})
  @prop()
  cover: string

}