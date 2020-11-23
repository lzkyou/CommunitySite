import { Video } from '@libs/db/models/video.model';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
  model: Video
})
@Controller('videos')
@ApiTags('专辑视频管理API')
export class VideosController {
  constructor(@InjectModel(Video) private readonly model){}
}
