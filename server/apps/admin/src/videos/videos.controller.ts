import { Video } from '@libs/db/models/video.model';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
  model: Video
})
@Controller('videos')
@ApiTags('专辑视频管理API')
export class VideosController {
  constructor(@InjectModel(Video) private readonly model) { }

  @Get('option')
  option() {
    return {
      title: "专辑管理",
      align: "center",
      headerAlign: "center",
      border: true,
      stripe: true,
      column: [
        { prop: "name", label: "专辑名称" },
        { prop: "cover", label: "专辑封面" },
      ],
    }
  }
}
