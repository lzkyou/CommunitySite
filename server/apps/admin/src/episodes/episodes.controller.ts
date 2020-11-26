import { Episode } from '@libs/db/models/episode.model';
import { Video } from '@libs/db/models/video.model';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
  model: Episode
})
@Controller('episodes')
@ApiTags('单视频管理API')
export class EpisodesController {
  constructor(
    @InjectModel(Episode) private readonly model:ReturnModelType<typeof Episode>,
    @InjectModel(Video) private readonly videoModel:ReturnModelType<typeof Video>
  ){}

  @Get('option')
  async option(){
    const videos = (await this.videoModel.find()).map(v=>({
      label: v.name,
      value: v._id
    }))
    return {
      title: "视频管理",
      align: "center",
      headerAlign: "center",
      border: true,
      stripe: true,
      translate: false,
      column: [
        { prop: "name", label: "视频名称",span: 24, row: true },
        { prop: "belong", label: "所属专辑", type:"select", dicData: videos },
        { prop: "file", label: "视频文件", span: 24, type:"upload", listType:'picture-img', action: '/upload'},
      ],
    }
  }
}
