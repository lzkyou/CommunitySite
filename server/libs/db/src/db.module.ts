import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';
import { Video } from './models/video.model';
import { Episode } from './models/episode.model';

//创建collection
const models = TypegooseModule.forFeature([
  User,
  Episode,
  Video
])


//使模块全局可引用
@Global()
@Module({
  imports:[
    //连接数据库 nestjs-typegoose
    TypegooseModule.forRoot('mongodb://localhost:27017/CommunitySite',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService, models], //导入User集合的schema并创建User集合同时将导入到模块中并导出到全局
})
export class DbModule {}
