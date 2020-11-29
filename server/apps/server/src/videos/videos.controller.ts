import { Video } from '@libs/db/models/video.model';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
  model: Video,
  routes: {
    create: false,
    update: false,
    delete: false
  }
})
@Controller('videos')
@ApiTags('专辑')
export class VideosController {
  constructor(@InjectModel(Video) private readonly model) { }
}
