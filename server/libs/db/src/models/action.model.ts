import { modelOptions, prop, Ref } from '@typegoose/typegoose'
import { Episode } from './episode.model'
import { User } from './user.model'
import { Video } from './video.model'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})

export class Action {
  @prop({ ref: 'User' })
  user: Ref<User>

  @prop({ refPath: 'type' })
  object: Ref<Video | Episode>

  @prop({ enum: ['Videos', 'Episode'] })
  type: string

  @prop({ enum: ['like', 'upVote'] })
  action: string
}