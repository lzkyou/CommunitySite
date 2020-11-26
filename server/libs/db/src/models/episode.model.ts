import { modelOptions, prop, Ref } from '@typegoose/typegoose'
import { Video } from './video.model'

@modelOptions({
  schemaOptions:{
    timestamps: true
  }
})

export class Episode{
  @prop()
  name: string

  @prop()
  file: string

  @prop({ref: 'Video'})
  belong: Ref<Video>
}