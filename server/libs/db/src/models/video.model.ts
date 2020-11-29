import { ApiProperty } from '@nestjs/swagger'
import { modelOptions, prop, Ref } from '@typegoose/typegoose'
import { Episode } from './episode.model'

@modelOptions({
  schemaOptions:{
    timestamps: true,
    toJSON: {virtuals: true}
  }
})

export class Video{
  @ApiProperty({description: '专辑名称'})
  @prop()
  name: string


  @ApiProperty({description: '封面图片'})
  @prop()
  cover: string

  @ApiProperty({description: '发布日期'})
  @prop()
  publish: string

  @prop({
    ref: 'Episode',
    localField: '_id',
    foreignField: 'belong'
  })
  episodes: Ref<Episode>[]
}