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
      searchMenuSpan:8,
      column: [
        { prop: "name", label: "专辑名称", row:true, span:24, sortable: true, search: true, reg: true },
        { prop: "cover", label: "专辑封面", type:"upload", listType: "picture-img", action: 'upload' },
      ],
    }
  }
}
