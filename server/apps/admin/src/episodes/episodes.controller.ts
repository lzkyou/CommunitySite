import { Episode } from '@libs/db/models/episode.model';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
  model: Episode
})
@Controller('episodes')
@ApiTags('单视频管理API')
export class EpisodesController {
  constructor(@InjectModel(Episode) private readonly model){}
  @Get('option')
  option(){
    return {
      title: "视频管理",
      align: "center",
      headerAlign: "center",
      border: true,
      stripe: true,
      column: [
        { prop: "name", label: "视频名称" },
        { prop: "file", label: "视频文件" },
      ],
    }
  }
}
